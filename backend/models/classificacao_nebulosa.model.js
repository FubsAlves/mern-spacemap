const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classificaoNebulosaSchema = new Schema({
  classificacao: { type: String, required: true, trim: true },
  descricao: { type: String, required: true, trim: true },
}, {
  timestamps: false,
});

const ClassificacaoNebulosa = mongoose.model('ClassificacaoNebulosa', classificaoNebulosaSchema);

module.exports = ClassificacaoNebulosa;