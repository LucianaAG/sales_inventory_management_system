const mysql = require('mysql2/promise'); // importa el paquete 'mysql2' para ejecutar consultas SQL directo
const { Sequelize } = require('sequelize'); // importa el ORM para mapear los modelos a tablas en la bd

// definicion y configuración de la conexion a la bd
const con_sequelize = new Sequelize('sales_inventory_db', 'root', '', {
  host: process.env.DB_HOST, 
  dialect: 'mysql', // motor
  port: process.env.DB_PORT || 3306,
  logging: false,
  define: { timestamps: false },
  pool: { // config del minimo y maximo de conexions activas y el tiempo de respuesta antes de lanzar error 
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// funcion asincrona que asegura que la bd existe antes de usar el ORM. 
async function ensureDatabase() {
  const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: '' });
  await connection.query( // ejecución de la consulta sql para crear la bd
    "CREATE DATABASE IF NOT EXISTS sales_inventory_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
  );
  await connection.end();
}
module.exports = { con_sequelize, ensureDatabase }; // exporta la conexion al ORM y la funcion para crear la bd definida arriba