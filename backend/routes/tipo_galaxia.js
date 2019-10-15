const router = require('express').Router();
let TipoGalaxia = require('../models/galaxia.model').TipoGalaxia;

router.route('/').get((req, res) => {
  TipoGalaxia.find()
    .then(tipos => res.json(tipos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  const tipo = req.body.tipo;
  const descricao = req.body.descricao;
  
  

  const novoTipoGalaxia = new TipoGalaxia({
    
    tipo,
    descricao
    
    
  });

  novoTipoGalaxia.save()
  .then(() => res.json('Tipo de Galaxia adicionado!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  TipoGalaxia.findById(req.params.id)
    .then(tipo => res.json(tipo))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  TipoGalaxia.findByIdAndDelete(req.params.id)
    .then(() => res.json('Tipo de galaxia deletado!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  TipoGalaxia.findById(req.params.id)
    .then(tipo => {
      
      tipo.tipo = req.body.tipo;
      tipo.descricao = req.body.descricao;

      tipo.save()
        .then(() => res.json('Tipo de galaxia alterado!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;