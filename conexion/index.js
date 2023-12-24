const mysql = require("mysql2");

const dotenv = require('dotenv');
dotenv.config();




// 1. Creación de una conexión a la base de datos
const db = mysql.createConnection({
    host: process.env.HOSTDATA,
    user: process.env.USERDATA,
    password: process.env.PASSDATA,
    port: process.env.PORTDATA,
    database: process.env.DATABASE,

});

db.connect((err)=>{
  if(err) throw err;
  console.log(`Conexión a la Database ${ process.env.DATABASE } correcta!!! Joya!!`);
});

  module.exports = db;