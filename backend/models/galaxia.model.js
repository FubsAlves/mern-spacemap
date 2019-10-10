const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const galaxiaSchema = new Schema({
  nome: { type: String, required: true, trim: true },
  descricao: {type: String, required: false, trim: true},
  magnitude: {type: Number, default: '0', trim: true},
  tamanho: {type: Number, default: '0', trim: true},
  distancia: {type: Number, default: '0', trim: true},
  numero_estrelas: {type: Number, default: '0', trim: true},
  constelacao: {type: Schema.Types.ObjectId, required: true, trim: true},
  tipo: {type: Schema.Types.ObjectId, required: true, trim: true},
  
}, {
  timestamps: false,
});

const Galaxia = mongoose.model('Galaxia', galaxiaSchema);

module.exports = Galaxia;