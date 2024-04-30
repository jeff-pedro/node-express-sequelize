'use strict';

const { v4: uuid } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Pessoas', [
      {
        id: uuid(),
        nome: 'Solange Estudante',
        email: 'solange@email.com',
        cpf: '63058133022',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        nome: 'Igor Estudante',
        email: 'igor@email.com',
        cpf: '99018205028',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        nome: 'Aline Estudante',
        email: 'aline@email.com',
        cpf: '92797497066',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        nome: 'Fernando Estudante',
        email: 'fernando@email.com',
        cpf: '17195730000',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),      
        nome: 'Ricardo Docente',
        email: 'ricardo@email.com',
        cpf: '06946507061',
        ativo: true,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
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
     await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
