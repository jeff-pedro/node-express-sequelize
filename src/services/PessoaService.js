const Services = require('../services/Services.js');

class PessoaService extends Services {
  constructor() {
    super('Pessoa');
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
    const estudante = await super.pegaUmRegistro({ id: estudanteId });
    
    const listaMatriculas = await estudante.getTodasAsMatriculas();
    
    listaMatriculas.forEach(async (matricula) => {
      matricula.status = 'cancelado';
      await matricula.save();
    }); 

    await super.atualizaRegistro({ ativo: false }, { id: estudanteId });

    return;
  }
}

module.exports = PessoaService;
