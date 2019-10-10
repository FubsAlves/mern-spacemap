const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tipoGalaxiaSchema = new Schema({
  tipo: { type: String, required: true, trim: true },
  descricao: {type: String, required: false, trim: true},
  
  
}, {
  timestamps: false,
});

const TipoGalaxia = mongoose.model('TipoGalaxia', tipoGalaxiaSchema);

module.exports = TipoGalaxia;