const Services = require('../services/Services.js');

class PessoaService extends Services {
  constructor() {
    super('Pessoa');
    this.matriculaService = new Services('Matricula');
  }

  async pegaTodasAsMatriculasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = estudante.getTodasAsMatriculas();
    return listaMatriculas;
  }

  async pegaMatriculasAtivasPorEstudante(id) {
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

  async cancelaPessoaEMatriculas(estudanteId) {
    await super.atualizaRegistro({ ativo: false }, { id: estudanteId });
    await this.matriculaService.atualizaRegistro({ status: 'cancelado' }, { estudante_id: estudanteId });
  }
}

module.exports = PessoaService;
