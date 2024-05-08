const expressAsyncHandler = require("express-async-handler")
const userModel = require("../model/userModel");
const sequelize = require("../config/db");
const bcrypt = require("bcrypt")


const userSignup = expressAsyncHandler(async(req, res) =>{

    const {id, username, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 5);

    if (id == null || username == "" || email == null || password == null) {
        res.status(404)
        res.json({"Data Not Found" : " Enter the Necessary data "});
    }

    try {
        const insertUser = await userModel.create({
            id:id,
            username:username,
            email:email,
            password:hashedPassword,
        }) 
        sequelize.close();
        res.status(200).json(insertUser);
    } catch (error) {
        console.log(error);
    }
})

module.exports = { userSignup };