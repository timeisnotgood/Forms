const { Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize('postgres::memory:');

const contact = sequelize.define('cont_data',{
    count_id:{
        type:DataTypes.INTEGER
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
        type:DataTypes.BIGINT,
    }
},
{
  tableName: 'cont_data',
})

module.exports = contact;