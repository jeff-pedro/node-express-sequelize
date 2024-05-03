'use strict';

const { v4: uuid } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('matriculas', [
      {
        id: uuid(),
        estudante_id: '110e23a2-88ab-4fcb-ad97-2660c4c00391',
        curso_id: '2b880444-79d5-492c-a062-d3f0e622d995',
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        estudante_id: '44b91718-e057-4c11-8f90-f53777555f46',
        curso_id: 'c3147608-c6ff-4ffb-a148-a551426b2236',
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        estudante_id: '15d319fc-dc5b-4267-acb7-b10a741953c4',
        curso_id: '8897e34b-558e-4f1a-a172-fdfc486c9f0d',
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        estudante_id: 'b53d4c86-a75b-4550-bf17-e83c688631ac',
        curso_id: '6cf393d0-afcb-4b5a-b9e9-ce843b796d38',
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('matriculas', null, {});
  }
};
