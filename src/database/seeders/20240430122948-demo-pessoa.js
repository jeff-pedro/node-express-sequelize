'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      {
        id: '110e23a2-88ab-4fcb-ad97-2660c4c00391',
        nome: 'Solange Estudante',
        email: 'solange@email.com',
        cpf: '63058133022',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '44b91718-e057-4c11-8f90-f53777555f46',
        nome: 'Igor Estudante',
        email: 'igor@email.com',
        cpf: '99018205028',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '15d319fc-dc5b-4267-acb7-b10a741953c4',
        nome: 'Aline Estudante',
        email: 'aline@email.com',
        cpf: '92797497066',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'b53d4c86-a75b-4550-bf17-e83c688631ac',
        nome: 'Fernando Estudante',
        email: 'fernando@email.com',
        cpf: '17195730000',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '77c06537-8d57-43fd-8837-24c1d5bbc5a1',      
        nome: 'Ricardo Docente',
        email: 'ricardo@email.com',
        cpf: '06946507061',
        ativo: true,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '719e643c-9f46-42e3-baeb-8008b29ce9ca',
        nome: 'Dine Docente',
        email: 'dine@email.com',
        cpf: '80941142078',
        ativo: true,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
