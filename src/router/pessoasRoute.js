const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js'); 

const routes = Router();

routes
  .get('/pessoas', PessoaController.pegaTodas)
  .get('/pessoas/:id', PessoaController.listaPessoaPorId)
  .post('/pessoas', PessoaController.criaPessoa)
  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .delete('/pessoas/:id', PessoaController.excluiPessoa);

module.exports = routes;