const router = require('express').Router();
let ClassificacaoEstrela = require('../models/estrela.model').ClassificacaoEstrela;

router.route('/').get((req, res) => {
  ClassificacaoEstrela.find()
    .then(classificacoes => res.json(classificacoes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  
  const classificacao = req.body.classificacao;
  const descricao = req.body.descricao;
  const cor_aparente = req.body.cor_aparente;
  const temperatura = req.body.temperatura;

  const novaClassificacaoEstrela = new ClassificacaoEstrela({
    classificacao,
    descricao,
    cor_aparente,
    temperatura
  });

  
  novaClassificacaoEstrela.save()
  .then(() => res.json('Classifacação de Estrela adicionada!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  ClassificacaoEstrela.findById(req.params.id)
    .then(classificacao => res.json(classificacao))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  ClassificacaoEstrela.findByIdAndDelete(req.params.id)
    .then(() => res.json('Classificação de Estrela deletada!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  ClassificacaoEstrela.findById(req.params.id)
    .then(classificacao => {
       classificacao.classificacao = req.body.classificacao;
       classificacao.descricao = req.body.descricao;
       classificacao.cor_aparente = req.body.cor_aparente;
       classificacao.temperatura = req.body.temperatura;

      classificacao.save()
        .then(() => res.json('Classificação de Estrela atualizada!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;