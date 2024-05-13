const { v4: uuid } = require('uuid');
const dataSource = require('../database/models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros(where = {}) {
    return dataSource[this.model].findAll({ where });
  }

  async pegaRegistrosPorEscopo(escopo) {
    return dataSource[this.model].scope(escopo).findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async pegaUmRegistro(where) {
    return dataSource[this.model].findOne({ where });
  }

  async criaRegistro(dados) {
    return dataSource[this.model].create({
      id: uuid(),
      ...dados
    });
  }

  async excluiRegistro(where) {
    return dataSource[this.model].destroy({ where: { ...where } });
  }

  async atualizaRegistro(dadosAtualizados, where, transacao = {}) {
    const listadeRegistrosAtualizados = await dataSource[this.model]
      .update(dadosAtualizados, {
        where: { ...where },
        transaction: transacao
      });
    if (listadeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  async pegaEContaRegistros(options) {
    return dataSource[this.model].findAndCountAll({ ...options });
  }
}

module.exports = Services;