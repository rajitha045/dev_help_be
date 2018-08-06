var express = require('express');
var router = express.Router();
var con = require('./connection');


router.get('/:uid', function(req, res, next) {
  
  con.query('select * from users where uid =?',req.params.uid, function(err, rows, fields) { 
    if (!err){
      res.send({status: 200, data: rows});
  }
    else{
      res.send({status: 500, message: "Unknown Error"});
    }
    });
});
router.get('/', function(req, res, next) {

  con.query('select * from users',function(err, rows, fields) {
    if (!err){
      res.send({status: 200, data: rows});
  }
    else{
      res.send({status: 500, message: "Unknown Error"});
    }
    });
});
router.post('/', function(req, res, next) {
  var {name,user_name,password,email,designation}=req.body;
  con.query('insert into users set ?', {name:name,user_name:user_name,password:password,email:email,designation:designation},function(err, rows, fields){
    if (!err){
      res.send({status: 200, data: rows});
    }
    else{
      res.send({status: 500, message: "Unknown Error"});
    }
  })
  
});
router.put('/', function(req, res, next) {
  var {name,user_name,password,email,designation,uid}=req.body;
  con.query('update users set ? where uid = ?', [{name,user_name,password,email,designation},uid],function(err, rows, fields){
    if (!err){
      res.send({status: 200, data: rows});
  }
    else{
      res.send({status: 500, message: "Unknown Error"});
    }
  })
});

module.exports = router;
