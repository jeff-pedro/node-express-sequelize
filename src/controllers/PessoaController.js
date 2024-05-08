const Controller = require('./Controller.js');
const PessoaService = require('../services/PessoaService.js');

const pessoaService = new PessoaService();

class PessoaController extends Controller {
  constructor() {
    super(pessoaService);
  }

  async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;

    try {
      const listaMatriculas = await pessoaService.pegaMatriculasPorEstudante(estudanteId);
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async pegaMatriculasCanceladas(req, res) {
    const { estudanteId } = req.params;

    try {
      const listaMatriculas = await pessoaService.pegaMatriculasCanceladasPorEstudante(estudanteId);
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async pegaTodasAsPessoas(req, res) {
    try {
      const listaTodasAsPessoas = await pessoaService.pegaPessoasEscopoTodos();
      return res.status(200).json(listaTodasAsPessoas);
    } catch(erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = PessoaController;
