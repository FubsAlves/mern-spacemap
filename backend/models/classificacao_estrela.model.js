const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classificaoEstrelaSchema = new Schema({
  classificacao: { type: String, required: true, trim: true },
  cor_aparente: { type: String, required: true, trim: true },
  temperatura: { type: Number, required: true, trim: true },
  descricao: { type: String, required: true, trim: true },
}, {
  timestamps: false,
});

const ClassificacaoEstrela = mongoose.model('ClassificacaoEstrela', classificaoEstrelaSchema);

module.exports = ClassificacaoEstrela;