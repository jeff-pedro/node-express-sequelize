const { Router } = require('express');
const { CursoController } = require('../controllers'); 

const cursoController = new CursoController( );

const routes = Router();

routes
  .get('/cursos', (req, res) => cursoController.pagaCursos(req, res))
  .get('/cursos/:id', (req, res) => cursoController.pegaUmPorId(req, res))
  .post('/cursos', (req, res) => cursoController.criaNovo(req, res))
  .put('/cursos/:id', (req, res) => cursoController.atualiza(req, res))
  .delete('/cursos/:id', (req, res) => cursoController.exclui(req, res));

module.exports = routes;