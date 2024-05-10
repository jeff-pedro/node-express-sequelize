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

  async atualizaRegistro(dados, where) {
    const listaDeRegistrosAtualizados = dataSource[this.model].update(dados, { where: { ...where } });

    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Services;