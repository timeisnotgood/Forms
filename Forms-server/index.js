const express = require("express")
const dotenv = require("dotenv").config()
const sequelize = require("./config/db")
const cors = require("cors")
const app = express();

const port = process.env.port || 5001;
app.use(express.json())
app.use(cors());
app.use('/user', require("./routes/userRoute"))
app.use('/contact', require("./routes/contactRoute"))

const con = async() =>{
    try {
        await sequelize.sync();
        console.log("Connection to Postgres have been established !!");
    } catch (error) {
        console.error("Something went wrong with the connection" , error);
    }
};
con();

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});