var express = require('express');
var router = express.Router();
var con = require('./connection');

router.post('/', function(req, res, next) {
  var username=req.body.username;
  var password=req.body.password;
  con.query('select password from users where user_name =?',username, function(err, rows, fields) {
    if (!err && rows[0] && rows[0].password == password){
     res.send({status: 200, message: "authenticated successfully"});
  }
    else{
      res.send({status: 500, message: rows.password});
    }
    });
});

module.exports = router;
