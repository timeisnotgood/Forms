const expressAsyncHandler = require("express-async-handler")
const userModel = require("../model/userModel");
const sequelize = require("../config/db");
const bcrypt = require("bcrypt");
const { where } = require("sequelize");
const jwt = require("jsonwebtoken");

const userSignup = expressAsyncHandler(async(req, res) =>{

    const {id, username, email, password} = req.body;
    console.log("*****************************", id);
    const hashedPassword = await bcrypt.hash(password, 5);

    if (id == "" || username == "" || email == "" || password == "") {
        res.status(404)
        res.json({"Data Not Found" : " Enter the Necessary data "});
    }else{
        const existUser = await userModel.findOne({where : {username : username}});
        if(existUser) res.status(409).json({"Conflict" : "User Already Exist !!"})
    }

    try {
        const insertUser = await userModel.create({
            id:id,
            username:username,
            email:email,
            password:hashedPassword,
        }) 
        res.status(200).json(insertUser);
    } catch (error) {
        console.log(error);
    }
})

const userLogin = expressAsyncHandler( async(req, res) =>{

    const { username, password} = req.body;

    console.log("**************************", req.body);
    if(!username || !password){
        res.status(404)
        throw new Error("All fileds are Manadatory");
    }


    try {
        const findUser = await userModel.findOne({ where : {username : username}});

        if(findUser && bcrypt.compare(password, findUser.password)){
            const accessToken = await jwt.sign({
                user : {
                    username : findUser.username,
                    email : findUser.email,
                    id : findUser.id
                },
            },process.env.access_token_secret, {expiresIn : "10m"});
            res.status(200).json({"accessToken" : accessToken});
        }else{
            res.status(400)
            throw new Error("Email or password not valid")
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = { userSignup, userLogin };