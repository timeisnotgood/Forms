const contactModel = require("../model/contactModel")
const userModel = require("../model/userModel");
const sequelize = require("../config/db");
const expressAsyncHandler = require("express-async-handler")

const addContact =expressAsyncHandler(async(req, res) =>{

    const {name, fatherName, age, cast, degree, cgpa, usrId} = req.body;

    if (!name || !usrId) {
        res.status(404)
        throw new Error("All fileds are Manadatory");
    }

    const existUser = await userModel.findOne({where:{id : usrId}});
    console.log(existUser);

    const autoID = await sequelize.query("SELECT nextval('id_seq')", {
        type: sequelize.QueryTypes.SELECT
      })
    console.log("*****************",autoID[0].nextval); 

    if(existUser){
        try {
            const insertData = await contactModel.create({
                id:autoID[0].nextval,
                cont_name :name,
                cont_fathername:fatherName,
                cont_age: age,
                cont_cast: cast,
                cont_degree: degree,
                cont_cgpa: cgpa,
                usr_id: usrId
            })
            res.status(200).json(insertData);
        } catch (error) {
            throw new Error(error);
        }
       
    }else{
        throw new Error("User Does'nt exist !!")
    }
})

module.exports = addContact;

