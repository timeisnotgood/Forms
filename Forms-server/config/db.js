const { Sequelize } = require("sequelize")
const env = require("dotenv").config;

const sequelize = new Sequelize('form', 'postgres', String("kishore2005"), {
    host: 'localhost',
    dialect: 'postgres'
  });



module.exports = sequelize;