const router = require('express').Router();
let Estrela = require('../models/estrela.model').Estrela;


router.route('/').get((req, res) => {
  Estrela.find().populate('constelacao').populate('classificacao')
    .then(estrelas => res.json(estrelas))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const nome = req.body.nome;
  const descricao = req.body.descricao;
  const magnitude = Number(req.body.magnitude);
  const tamanho = Number(req.body.tamanho);
  const massa = Number(req.body.massa);
  const distancia = Number(req.body.distancia);
  const constelacao = req.body.constelacao;
  const classificacao = req.body.classificacao;
  

  const novaEstrela = new Estrela({
    nome,
    descricao,
    magnitude,
    tamanho,
    massa,
    distancia,
    constelacao,
    classificacao,

    
  });

  novaEstrela.save()
  .then(() => res.json('Estrela adicionada!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Estrela.findById(req.params.id).populate('constelacao').populate('classificacao')
    .then(estrela => res.json(estrela))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Estrela.findByIdAndDelete(req.params.id)
    .then(() => res.json('Estrela deletada!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Estrela.findById(req.params.id)
    .then(estrela => {
      estrela.nome = req.body.nome;
      estrela.descricao = req.body.descricao;
      estrela.magnitude = Number(req.body.magnitude);
      estrela.tamanho = Number(req.body.tamanho);
      estrela.massa = Number(req.body.massa);
      estrela.distancia = Number(req.body.distancia);
      estrela.constelacao = req.body.constelacao;
      estrela.classificacao = req.body.classificacao;

      estrela.save()
        .then(() => res.json('Estrela alterada!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;