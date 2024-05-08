const expressAsyncHandler = require("express-async-handler")
const userModel = require("../model/userModel");
const sequelize = require("../config/db");


const userSignup = expressAsyncHandler(async(req, res) =>{

    try {
        const insertUser = await userModel.create({
            id:req.body.id,
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
        }) 
        res.status(200).json(insertUser)
        sequelize.close();
    } catch (error) {
        console.log(error);
    }
   
})

module.exports = { userSignup };