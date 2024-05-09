const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const user = sequelize.define('usr',{
    id:{
        type:DataTypes.STRING,
        primaryKey: true
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
    freezeTableName: true,
    tableName: 'usr'
})


module.exports = user;
