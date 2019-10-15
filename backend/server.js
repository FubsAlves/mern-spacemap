const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
const dbpath = 'mongodb://localhost:27017/admin'
mongoose.connect(dbpath, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const constelacoesRouter = require('./routes/constelacao');
const galaxiasRouter = require('./routes/galaxia');
const tipoGalaxiaRouter = require('./routes/tipo_galaxia');
const estrelasRouter = require('./routes/estrela');
const classificacaoEstrelaRouter = require('./routes/classificacao_estrela');
const nebulosasRouter = require('./routes/nebulosa');
const classificacaoNebulosaRouter = require('./routes/classificacao_nebulosa');


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/constelacoes', constelacoesRouter);
app.use('/galaxias', galaxiasRouter);
app.use('/tipogalaxia', tipoGalaxiaRouter);
app.use('/classificacoes/estrela', classificacaoEstrelaRouter);
app.use('/estrelas', estrelasRouter)
app.use('/classificacoes/nebulosa', classificacaoNebulosaRouter);
app.use('/nebulosas', nebulosasRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
