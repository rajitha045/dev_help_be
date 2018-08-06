var express = require('express');
var router = express.Router();
var con = require('./connection');


router.get('/:id', function(req, res, next) {
  con.query('select * from users where uid =?',req.params.qid, function(err, rows, fields) { 
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
  var {name,user_name,password,email,designation}=request.body;
  connection.query('INSERT INTO users SET ?', {name,user_name,password,email,designation},function(err, rows, fields){
    if (!err){
      res.send({status: 200, data: rows});
  }
    else{
      res.send({status: 500, message: "Unknown Error"});
    }
  })

});
router.put('/', function(req, res, next) {
  var {name,user_name,password,email,designation,uid}=request.body;
  connection.query('INSERT INTO users SET ? WHERE uid = ?', [{name,user_name,password,email,designation},uid],function(err, rows, fields){
    if (!err){
      res.send({status: 200, data: rows});
  }
    else{
      res.send({status: 500, message: "Unknown Error"});
    }
  })
});

module.exports = router;
