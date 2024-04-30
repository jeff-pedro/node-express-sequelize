const { v4: uuid } = require('uuid');
const database = require('../models');

class PessoaController {

  static async criaPessoa (req, res) {
    const { body } = req;
    const dados = {
      id: uuid(),
      ...body
    };

    try {
      await database.Pessoa.create(dados);
      res.status(201);
    } catch (erro) {
      res.status(400).send({ mensagem: erro });
    }
  }

  static async pegaTodas (req, res) {
    try {
      const pessoas = await database.Pessoa.findAll();
      return res.status(200).json(pessoas);
    } catch (erro) {
      return res.status(400).json({ mensagem: erro });
    }
  }

  static async listaPessoaPorId (req, res) {
    const { id } = req.params;
    
    try {
      const pessoas = await database.Pessoa.findatabaseyPk(id);
      res.status(200).json(pessoas);
    } catch (erro) {
      return res.status(400).json({ mensagem: erro });
    }
  }

  static async atualizaPessoa (req, res) {
    const { id } = req.params;
    const novosDados = req.body;
    
    try {
      await database.Pessoa.update(novosDados, { where: { id }});
      res.status(200).json({ mensagem: 'Atualizado com sucesso!'});
    } catch (erro) {
      return res.status(400).json({ mensagem: erro });
    }
  }

  static async excluiPessoa (req, res) {
    const { id } = req.params;
    
    try {
      await database.Pessoa.destroy({ where: { id }});
      res.status(200).json({ mensagem: 'Excluído com sucesso!'});
    } catch (erro) {
      return res.status(400).json({ mensagem: erro });
    }
  }
}

module.exports = PessoaController;