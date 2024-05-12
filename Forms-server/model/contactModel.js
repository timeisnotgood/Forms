const { DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const contact = sequelize.define('cont_data',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
    },
    cont_name:{
        type:DataTypes.STRING,
    },
    cont_fathername:{
        type:DataTypes.STRING,
    },
    cont_age:{
        type:DataTypes.BIGINT,
    },
    cont_cast:{
        type:DataTypes.STRING,
    },
    cont_degree:{
        type:DataTypes.STRING,
    },
    cont_cgpa:{
        type:DataTypes.BIGINT,
    },
    usr_id:{
        type:DataTypes.STRING,
    }
},
{
    freezeTableName: true,
    tableName: 'cont_data'
})


// sequelize.sync({force : true})

module.exports = contact;