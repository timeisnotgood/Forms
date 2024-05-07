const express = require("express")
const dotenv = require("dotenv").config()
const client = require("./config/db")


const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

client.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error executing query', err.stack);
    } else {
        console.log('Connected to PostgreSQL on', res.rows[0].now);
    }
});

app.listen(process.env.port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});