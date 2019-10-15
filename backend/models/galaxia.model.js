const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const galaxiaSchema = new Schema({
  nome: { type: String, required: true, trim: true },
  descricao: {type: String, required: false, trim: true},
  magnitude: {type: Number, required: true, trim: true},
  tamanho: {type: Number, required: true, trim: true},
  distancia: {type: Number, required: true, trim: true},
  numero_estrelas: {type: Number, required: false, trim: true},
  constelacao: {type: Schema.Types.ObjectId, required: true, trim: true, ref : 'Constelacao'},
  tipo: {type: Schema.Types.ObjectId, required: true, trim: true, ref : 'TipoGalaxia'},
  
}, {
  timestamps: false,
});

const tipoGalaxiaSchema = new Schema({
  tipo: { type: String, required: true, trim: true },
  descricao: {type: String, required: false, trim: true},
  
  
}, {
  timestamps: false,
});

const Galaxia = mongoose.model('Galaxia', galaxiaSchema);
const TipoGalaxia = mongoose.model('TipoGalaxia', tipoGalaxiaSchema);

module.exports = {
  Galaxia,
  TipoGalaxia
};