var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contato = require('../models/Contato.js');

/* Obtem todos os contatos */
router.get('/', function(req, res, next) {
  Contato.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* Obtem o contato por ID */
router.get('/:id', function(req, res, next) {
  Contato.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Salva o contato */
router.post('/', function(req, res, next) {
  Contato.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Atualiza o contato */
router.put('/:id', function(req, res, next) {
  Contato.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Exclui o contato */
router.delete('/:id', function(req, res, next) {
  Contato.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;