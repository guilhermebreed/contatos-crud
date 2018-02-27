var mongoose = require('mongoose');

var ContatoSchema = new mongoose.Schema({
    nome: String,
    dataNascimento: String,
    email: String,
    telefone: String,
    });

module.exports = mongoose.model('Contato', ContatoSchema);
