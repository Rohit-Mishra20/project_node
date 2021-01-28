const mysql = require('mysql');


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

con.query('CREATE DATABASE express_db',(err)=>{
    if(err)
        console.log('Error while creating database '+ err)
    else
        console.log('Database created : expressd_db')
})


var table_query = 'CREATE TABLE `express_db`.`registration` ( `Id` INT(100) NOT NULL AUTO_INCREMENT , `Name` VARCHAR(20) NOT NULL , `Email` VARCHAR(20) NOT NULL , `Contact_dtl` SMALLINT(10) NOT NULL , `DOB` DATE NOT NULL , `Address` TEXT NOT NULL , PRIMARY KEY (`Id`)) ENGINE = InnoDB'

con.query(table_query,(err)=>{
    if(err)
        console.log("Error While creating table "+ err)
    else
    console.log("table create successfully")
})

