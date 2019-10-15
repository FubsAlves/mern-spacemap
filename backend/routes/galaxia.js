const router = require('express').Router();
let Galaxia = require('../models/galaxia.model').Galaxia;

router.route('/').get((req, res) => {
  Galaxia.find().populate('constelacao').populate('tipo')
    .then(galaxias => res.json(galaxias))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  
  const nome = req.body.nome;
  const descricao = req.body.descricao;
  const magnitude = Number(req.body.magnitude);
  const tamanho = Number(req.body.tamanho);
  const distancia = Number(req.body.distancia);
  const numero_estrelas = Number(req.body.numero_estrelas);
  const constelacao = req.body.constelacao;
  const tipo = req.body.tipo;
  

  const novaGalaxia = new Galaxia({
    nome,
    descricao,
    magnitude,
    tamanho,
    distancia,
    numero_estrelas,
    constelacao,
    tipo
  });

  novaGalaxia.save()
  .then(() => res.json('Galaxia adicionada!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Galaxia.findById(req.params.id).populate('constelacao').populate('tipo')
    .then(galaxia => res.json(galaxia))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Galaxia.findByIdAndDelete(req.params.id)
    .then(() => res.json('Galaxia deletada!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Galaxia.findById(req.params.id)
    .then(galaxia => {
      galaxia.nome = req.body.nome;
      galaxia.descricao = req.body.descricao;
      galaxia.magnitude = Number(req.body.magnitude);
      galaxia.tamanho = Number(req.body.tamanho);
      galaxia.distancia = Number(req.body.distancia);
      galaxia.numero_estrelas = Number(req.body.numero_estrelas);
      galaxia.constelacao = req.body.constelacao;
      galaxia.tipo = req.body.tipo;

      galaxia.save()
        .then(() => res.json('Galaxia alterada!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;