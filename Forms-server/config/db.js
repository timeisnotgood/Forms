const { Sequelize } = require("sequelize")
const env = require("dotenv").config;

const sequelize = new Sequelize('form', 'postgres', process.env.db_password, {
    host: 'localhost',
    dialect: 'postgres'
  });



module.exports = sequelize;