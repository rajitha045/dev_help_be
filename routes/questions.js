var express = require('express');
var router = express.Router();
var con = require('./connection');


router.get('/:qid', function(req, res, next) {
  con.query('select * from questions where qid =?',req.params.qid, function(err, rows, fields) {
    
    if (!err){
      res.send({status: 200, data: rows});
  }
    else{
      res.send({status: 500, message: "Unknown Error"});
    }
    });
});
router.get('/', function(req, res, next) {
  con.query('select * from questions where status=0',function(err, rows, fields) {
    if (!err){
      res.send({status: 200, data: rows});
  }
    else{
      res.send({status: 500, message: "Unknown Error"});
    }
    });
});
router.post('/', function(req, res, next) {
  var {subject,description,posted_by_user,status}=req.body;
  con.query('INSERT INTO questions SET ?', {subject,description,posted_by_user,status},function(err, rows, fields){
    if (!err){
      res.send({status: 200, data: rows});
  }
    else{
      res.send({status: 500, message: "Unknown Error"});
    }
  })

});
router.put('/', function(req, res, next) {
  var {subject,description,posted_by_user,status,qid}=req.body;
  con.query('update questions SET ? WHERE qid = ?', [{subject,description,posted_by_user,status},qid],function(err, rows, fields){
    if (!err){
      res.send({status: 200, data: rows});
  }
    else{
      res.send({status: 500, message: "Unknown Error"});
    }
  })
});

module.exports = router;
