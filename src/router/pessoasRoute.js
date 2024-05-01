const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js'); 

const pessoaController = new PessoaController( );

const routes = Router();

routes
  .get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res))
  .get('/pessoas/:id', (req, res) => pessoaController.pegaUmPorId(req, res))
  .post('/pessoas', (req, res) => pessoaController.criaNovo(req, res))
  .put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res))
  .delete('/pessoas/:id', (req, res) => pessoaController.exclui(req, res));

module.exports = routes;