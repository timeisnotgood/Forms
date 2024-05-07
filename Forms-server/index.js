const express = require("express")
const dotenv = require("dotenv").config()
const sequelize = require("./config/db")


const app = express()
const port = process.env.port || 5001;
app.use(express.json())

const con = async() =>{
    try {
        await sequelize.authenticate();
        console.log("Connection to Postgres have been established !!");
    } catch (error) {
        console.error("Something went wrong with the connection" , error);
    }
};
con();

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});