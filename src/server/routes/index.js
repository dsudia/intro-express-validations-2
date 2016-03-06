var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {

});

module.exports = router;
