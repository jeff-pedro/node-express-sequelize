const Services = require('../services/Services.js');

class PessoaService extends Services {
  constructor() {
    super('Pessoa');
  }

  async pegaMatriculasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = estudante.getAulasMatriculadas();
    return listaMatriculas;  
  }

  async pegaMatriculasCanceladasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = estudante.getMatriculasCanceladas();
    return listaMatriculas;  
  }

  async pegaPessoasEscopoTodos() {
    const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');
    return listaPessoas;
  }
}

module.exports = PessoaService;
