const router = require('express').Router();
let ClassificacaoNebulosa = require('../models/nebulosa.model').ClassificacaoNebulosa;

router.route('/').get((req, res) => {
  ClassificacaoNebulosa.find()
    .then(classificacoes => res.json(classificacoes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const classificacao = req.body.classificacao;
  const descricao = req.body.descricao;
  
  

  const novaClassificacaoNebulosa = new ClassificacaoNebulosa({
    classificacao,
    descricao,
  });

  novaClassificacaoNebulosa.save()
  .then(() => res.json('Classifacação de Nebulosa adicionada!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  ClassificacaoNebulosa.findById(req.params.id)
    .then(classificacao => res.json(classificacao))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  ClassificacaoNebulosa.findByIdAndDelete(req.params.id)
    .then(() => res.json('Classificação de nebulosa deletada!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  ClassificacaoNebulosa.findById(req.params.id)
    .then(classificacao => {
      classificacao.classificacao = req.body.classificacao;
      classificacao.descricao = req.body.descricao;
      
      classificacao.save()
        .then(() => res.json('Classificação de nebulosa atualizada!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;