var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  var person = req.body;
  knex('people').insert({
    name: person.name,
    hobby: person.hobby
  });
});

module.exports = router;
