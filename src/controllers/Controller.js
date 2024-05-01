class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros(); 
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      // erro
    }
  }

  async pegaUmPorId (req, res) {
    const { id } = req.params;
    
    try {
      const registro = await this.entidadeService.pegaUmRegistroPorId(id);
      return res.status(200).json(registro);
    } catch (erro) {
      // erro
    }
  }

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;

    try {
      const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
      return res.status(200).send(novoRegistroCriado);
    } catch (erro) {
      // erro
    }
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, id);

      if (!foiAtualizado) {
        return res.status(400).json({ mensagem: 'registro não foi atualizado' });
      }

      return res.status(200).json({ mensagem: 'atualizado com sucesso' });
    } catch (erro) {
      // erro
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    
    try {
      await this.entidadeService.excluiRegistro(id);
      return res.status(200).json({ mensagem: `id:${id} deletado com sucesso!` });
    } catch (erro) {
      // erro
    }
  }
}

module.exports = Controller;