const contactModel = require("../model/contactModel")
const userModel = require("../model/userModel");
const sequelize = require("../config/db");
const expressAsyncHandler = require("express-async-handler");
const { where } = require("sequelize");

const addContact =expressAsyncHandler(async(req, res) =>{

    const {name, fatherName, age, cast, degree, cgpa, usrId} = req.body;

    if (!name || !usrId) {
        res.status(404).json({"conflict" : "All fileds are Manadatory"});
    }

    const existUser = await userModel.findOne({where:{id : usrId}});

    if(existUser){
        try {
            const autoID = await sequelize.query("SELECT nextval('id_seq')", {
                type: sequelize.QueryTypes.SELECT
                })
                console.log("************************8",autoID[0].nextval);
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
            res.status(404).json({"conflict" : "All fields are Mandatory"})
            console.log(error);
        }
       
    }else{
        res.status(409).json({"conflict" : "User Does'nt exist !!"})
    }
})

const getContact = expressAsyncHandler(async(req, res)=>{
    const {usrId, username} = req.query;
    // console.log("*************",req);
    // const usrId = 22;
    const records = await sequelize.query(`
        SELECT 
        cd.id,
        cd.cont_name,
        cd.cont_fathername,
        cd.cont_age,
        cd.cont_cast,
        cd.cont_degree,
        cd.cont_cgpa,
        cd.usr_id
        FROM cont_data cd
        JOIN usr ur ON ur.username = '${username}' OR cd.usr_id = '${usrId}'
        where ur.id = cd.usr_id ;
        `);
    if(records){
        // console.log({"data" : JSON.stringify(records[0], null, 1)});
        res.status(200).json({"data" : records[0]})
    }else{
        res.status(404).json({"conflict" : "User Id not exist !!"})
    }
})

const getSingleContact = expressAsyncHandler(async(req, res)=>{
    const { id } = req.params;
    if(!id) res.status(404).json({"conflict" : "id is mandatory to find contact"})
    // console.log(req.params);

    const contact = await contactModel.findOne({where:{id:id}});
    // console.log(contact);
    res.status(contact ? 200 : 404).json(contact ? contact : {"conflict" : "Contact does'nt exist !!"})
})

const updateContact = expressAsyncHandler(async(req, res)=>{
    const { contactname, fathername, age, cast, degree, cgpa, usrId } 
        = req.body;
    const { id } = req.params;
    console.log(id);
    const existingContact = await contactModel.findOne({where:{id:id}});
    if(!existingContact){
        res.status(404).json({"conflict" : "Contact does'nt exist !!"})
    }
    try {
        const updatedContact = await contactModel.update({
            cont_name:contactname,
            cont_fathername:fathername,
            cont_age:age,
            cont_cast:cast,
            cont_degree:degree,
            cont_cgpa: cgpa,
            usr_id: usrId
        },{where:{id:id}})
        res.status(200).json(updatedContact)
    } catch (error) {
        console.log(error);
        res.json({"conflict" : "something is went wrong retry !!"})
    }
})

const deleteContact = expressAsyncHandler(async(req, res)=>{
    const { id } = req.params;
    console.log("$$$$$$$$$$$$$$$$$$$",id);

    const deleteData = await contactModel.destroy({where:{id : id}});
    res.json({deleteData})
})

module.exports = { addContact, getContact, getSingleContact, updateContact, deleteContact };

