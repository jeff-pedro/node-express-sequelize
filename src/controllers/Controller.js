/* não está e uso pois os id neste projeto são UUIDs */
// const convertIds = require('../utils/conversorDeStringHelper');

class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros(); 
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async pegaUmPorId (req, res) {
    const { id } = req.params;
    
    try {
      const registro = await this.entidadeService.pegaUmRegistroPorId(id);
      return res.status(200).json(registro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
  // ...
  async pegaUm (req, res) {
    const { params } = req;

    /* não está e uso pois os id neste projeto são UUIDs */
    // const where = convertIds(params); 

    const where = params;

    try {
      const registro = await this.entidadeService.pegaUmRegistro(where);
      return res.status(200).json(registro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;

    try {
      const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
      return res.status(200).send(novoRegistroCriado);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async atualiza(req, res) {
    const { ...where } = req.params;
    const dadosAtualizados = req.body;

    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, where);

      if (!foiAtualizado) {
        return res.status(400).json({ mensagem: 'registro não foi atualizado' });
      }

      return res.status(200).json({ mensagem: 'atualizado com sucesso' });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    const { ...where } = req.params;
    
    try {
      await this.entidadeService.excluiRegistro(where);
      return res.status(200).json({ mensagem: `id:${id} deletado com sucesso!` });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = Controller;