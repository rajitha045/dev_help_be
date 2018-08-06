var express = require('express');
var router = express.Router();
var con = require('./connection');

router.post('/', function(req, res, next) {
  var username=req.body.body.username;
  var password=req.body.body.password;
  con.query('select password from User where user =?',username, function(err, rows, fields) {
    if (!err){
      res.send({status: 200, message: "authenticated successfully"});
  }
    else{
      console.log('Error in Post auth sql' + err);
    }
    });


});

module.exports = router;
