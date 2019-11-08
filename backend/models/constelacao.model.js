const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const constelacaoSchema = new Schema({
  nome: { type: String, required: true, trim: true, unique: true },
  descricao: { type: String, required: false, trim: true, default: '' },
  estrela_principal: { type: Schema.Types.ObjectId, required: false, trim: true, ref: 'Estrela' }
}, 
{
  timestamps: false,
});

const Constelacao = mongoose.model('Constelacao', constelacaoSchema);

module.exports = Constelacao;