const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const estrelaSchema = new Schema({
  nome: { type: String, required: true, trim: true },
  descricao: {type: String, required: true, trim: true},
  magnitude: {type: Number, required: true, trim: true},
  tamanho: {type: Number, required: true, trim: true},
  massa: {type: Number, required: true, trim: true},
  distancia: {type: Number, required: true, trim: true},
  constelacao: {type: Schema.Types.ObjectId, required: true, trim: true},
  classificacao: {type: Schema.Types.ObjectId, required: true, trim: true},
  
}, {
  timestamps: false,
});

const Estrela = mongoose.model('Estrela', estrelaSchema);

module.exports = Estrela;