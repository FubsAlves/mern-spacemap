const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nebulosaSchema = new Schema({
  nome: { type: String, required: true, trim: true },
  descricao: {type: String, required: true, trim: true},
  magnitude: {type: Number, required: true, trim: true},
  distancia: {type: Number, required: true, trim: true},
  constelacao: {type: Schema.Types.ObjectId, required: true, trim: true},
  classificacao: {type: Schema.Types.ObjectId, required: true, trim: true},
  
}, {
  timestamps: false,
});

const Nebulosa = mongoose.model('Nebulosa', nebulosaSchema);

module.exports = Nebulosa;