'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', [
      {
        id: 'd12d9eb4-40c5-4ab4-8017-88799fd8bd28',
        titulo: 'Node.js',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '13332d46-d3a9-4327-847d-e1c8daf12435',
        titulo: 'Java',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '7c31941f-7918-4ac5-8d25-1f14dc706625',
        titulo: 'Python',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ffa8fe79-369f-4c41-804a-ab558673e09b',
        titulo: 'C#',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
