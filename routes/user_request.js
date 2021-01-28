const mysql = require('mysql');
const express = require('express');
const { strict } = require('assert');
const router =  express.Router();

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"express_db"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  router
  .post('/confirmation',(req,res)=>{
      data = req.body
      Name = req.body.Name
      Email = req.body.Email
      Contact_dtl = req.body.Contactno
      DOB = req.body.DOB
      Address = req.body.Address
    //Id	Name	Email	Contact_dtl	DOB	Address
    var q_string = "INSERT INTO registration (Name, Email, Contact_dtl , DOB, Address) VALUES ('" + Name + " ','" + Email + " ','" + Contact_dtl + " ','" + DOB + " ','" + Address + " ')"
    con.query(q_string,(err)=>{
        if(err) {
            console.log(err)
            res.render('Registration_err') 
          }
        else
        res.render('data_save',{data})                      
    })   
  })
  .get('/show_data',(req,res)=>{
    con.query('select * from registration',(err,results)=>{
      if(err){
        res.render('Registration_err')
      }
      else
      { 
        console.log(results)
        res.render('show_data',{results})
      }
    })
  })
module.exports = router