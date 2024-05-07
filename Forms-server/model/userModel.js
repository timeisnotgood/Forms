const { Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize('postgres::memory:');

const user = sequelize.define('usr',{
    id:{
        type:DataTypes.BIGINT
    },
    username:{
        type:DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
    },
    password:{
        type:DataTypes.STRING,
    }
},
{
  tableName: 'usr',
})

module.exports = user;
