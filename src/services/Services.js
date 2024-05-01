const { v4: uuid } = require('uuid');
const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criaRegistro(dados) {
    return dataSource[this.model].create({
      id: uuid(),
      ...dados
    });
  }

  async excluiRegistro(id) {
    return dataSource[this.model].destroy({ where: { id } });
  }

  async atualizaRegistro(dados, id) {
    const listaDeRegistrosAtualizados = dataSource[this.model].update(dados, { where: { id } });

    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Services;