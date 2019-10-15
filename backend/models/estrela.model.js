const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const estrelaSchema = new Schema({
  nome: { type: String, required: true, trim: true },
  descricao: {type: String, required: false, trim: true},
  magnitude: {type: Number, required: true, trim: true},
  tamanho: {type: Number, required: true, trim: true},
  massa: {type: Number, required: true, trim: true},
  distancia: {type: Number, required: true, trim: true},
  constelacao: {type: Schema.Types.ObjectId, required: true, trim: true, ref: 'Constelacao'},
  classificacao: {type: Schema.Types.ObjectId, required: true, trim: true, ref: 'ClassificacaoEstrela'},
  
}, {
  timestamps: false,
});

const classificaoEstrelaSchema = new Schema({
  classificacao: { type: String, unique: true, required: true, trim: true },
  cor_aparente: { type: String, required: true, trim: true },
  temperatura: {
    min: {type: Number, required: true, trim: true },
    max: {type: Number, required: false, trim: true }
  },
  descricao: { type: String, required: false, trim: true },
}, {
  timestamps: false,
});

const Estrela = mongoose.model('Estrela', estrelaSchema);
const ClassificacaoEstrela = mongoose.model('ClassificacaoEstrela', classificaoEstrelaSchema);

module.exports = {
  Estrela,
  ClassificacaoEstrela
};