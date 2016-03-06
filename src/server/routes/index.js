var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../db/knex');

function validSubmit(req, res, next) {
  if (req.body.name === '' && req.body.hobby === '') {
    req.flash('danger', 'You must enter a name.\nYou must enter a hobby.');
    res.redirect('/');
  } else if (req.body.name === '' && req.body.hobby !== '') {
    req.flash('danger', 'You must enter a name.');
    res.redirect('/');
  } else if (req.body.name !== '' && req.body.hobby === '') {
    req.flash('danger', 'You must enter a hobby.');
    res.redirect('/');
  } else {
    return next();
  }
}

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/show', function(req, res, next) {
  knex('people').select().then(function(data) {
    res.render('show', {messages: req.flash(success), people: data});
  });
});

router.post('/', validSubmit, function(req, res, next) {
  var person = req.body;
  knex('people').insert({
    name: person.name,
    hobby: person.hobby
  }).catch(function(err) {
    console.log(err);
  }).then(function(data) {
    req.flash('success', 'The person was saved successfully!');
    res.redirect('/show');
  });
});

module.exports = router;
