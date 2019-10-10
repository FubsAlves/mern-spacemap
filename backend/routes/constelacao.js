const router = require('express').Router();
let Constelacao = require('../models/constelacao.model');

router.route('/').get((req, res) => {
  Constelacao.find()
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

// router.route('/:id').get((req, res) => {
//   Exercise.findById(req.params.id)
//     .then(exercise => res.json(exercise))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//   Exercise.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Exercise deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//   Exercise.findById(req.params.id)
//     .then(exercise => {
//       exercise.username = req.body.username;
//       exercise.description = req.body.description;
//       exercise.duration = Number(req.body.duration);
//       exercise.date = Date.parse(req.body.date);

//       exercise.save()
//         .then(() => res.json('Exercise updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;