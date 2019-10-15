const router = require('express').Router();
let Nebulosa = require('../models/nebulosa.model').Nebulosa;

router.route('/').get((req, res) => {
  Nebulosa.find().populate('constelacao').populate('classificacao')
    .then(nebulosas => res.json(nebulosas))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  
  const nome = req.body.nome;
  const descricao = req.body.descricao;
  const magnitude = Number(req.body.magnitude);
  const distancia = Number(req.body.distancia);
  const constelacao = req.body.constelacao;
  const classificacao = req.body.classificacao;
  

  const novaNebulosa = new Nebulosa({
    nome,
    descricao,
    magnitude,
    distancia,
    constelacao,
    classificacao,
    
  });

  novaNebulosa.save()
  .then(() => res.json('Nebulosa adicionada!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Nebulosa.findById(req.params.id).populate('constelacao').populate('classificacao')
    .then(nebulosa => res.json(nebulosa))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Nebulosa.findByIdAndDelete(req.params.id)
    .then(() => res.json('Nebulosa deletada!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Nebulosa.findById(req.params.id)
    .then(nebulosa => {
      nebulosa.nome = req.body.nome;
      nebulosa.descricao = req.body.descricao;
      nebulosa.magnitude = Number(req.body.magnitude);
      nebulosa.distancia = Number(req.body.distancia);
      nebulosa.constelacao = req.body.constelacao;
      nebulosa.classificacao = req.body.classificacao;

      nebulosa.save()
        .then(() => res.json('Nebulosa alterada!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;