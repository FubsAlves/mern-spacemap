const router = require('express').Router();
let Constelacao = require('../models/constelacao.model');

router.route('/').get((req, res) => {
  
  
  Constelacao.find().populate('estrela_principal' , 'nome -_id')
    .then(constelacoes => res.json(constelacoes))
    .catch(err => res.status(400).json('Error: ' + err));
    
});

router.route('/add').post((req, res) => {
  const nome = req.body.nome;
  const descricao = req.body.descricao;
  const estrela_principal = req.body.estrela_principal;
  

  const novaConstelacao = new Constelacao({
    nome,
    descricao,
    estrela_principal
  });

  novaConstelacao.save()
  .then(() => res.json('Constelação adicionada!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Constelacao.findById(req.params.id).populate('estrela_principal')
    .then(constelacao => res.json(constelacao))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Constelacao.findByIdAndDelete(req.params.id)
    .then(() => res.json('Constelação deletada!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Constelacao.findById(req.params.id)
    .then(constelacao => {
      constelacao.nome = req.body.nome;
      constelacao.descricao = req.body.descricao;
      constelacao.estrela_principal = req.body.estrela_principal;
      

      constelacao.save()
        .then(() => res.json('Constelação atualizada!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;