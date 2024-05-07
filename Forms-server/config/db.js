const { Pool } = require("pg")
const env = require("dotenv").config;

const client = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'form',
    password: process.env.db_password,
    port: 5432,
});

module.exports = client;