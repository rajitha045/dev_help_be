var express = require('express');
var router = express.Router();
var con = require('./connection');


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.put('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;