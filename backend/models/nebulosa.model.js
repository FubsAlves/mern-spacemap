const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nebulosaSchema = new Schema({
  nome: { type: String, required: true, trim: true },
  descricao: {type: String, required: false, trim: true},
  magnitude: {type: Number, required: true, trim: true},
  distancia: {type: Number, required: true, trim: true},
  constelacao: {type: Schema.Types.ObjectId, required: true, trim: true, ref: 'Constelacao'},
  classificacao: {type: Schema.Types.ObjectId, required: true, trim: true, ref: 'ClassificacaoNebulosa'},
  
}, {
  timestamps: false,
});

const classificaoNebulosaSchema = new Schema({
  classificacao: { type: String, required: true, trim: true },
  descricao: { type: String, required: false, trim: true },
}, {
  timestamps: false,
});

const Nebulosa = mongoose.model('Nebulosa', nebulosaSchema);
const ClassificacaoNebulosa = mongoose.model('ClassificacaoNebulosa', classificaoNebulosaSchema);

module.exports = {
  Nebulosa, 
  ClassificacaoNebulosa
};