// configuracion para trabajar con el ORM
const sequelize = require('sequelize');
// configuración para conectarse a la bd
const data_base = require('../database/conexion_mysql_db');

// definicion del modelo

const customer = data_base.con_sequelize.define('customer',
    {
        // definicion de los atributos del modelo
        customer_id : {
            type : sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type: sequelize.STRING(100)
        },
        last_name : {
            type: sequelize.STRING(100)
        },
        dni : {
            type: sequelize.STRING(100)
        },
        city : {
            type: sequelize.STRING(100)
        },
        gender : {
            type: sequelize.STRING(100)
        }

    }
);

module.exports = customer;