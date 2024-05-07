'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cursos', [
      {
        id: '2b880444-79d5-492c-a062-d3f0e622d995',
        titulo: 'API com Express',
        descricao: 'Curso de API com Express e MongoDB',
        data_inicio: '2023-01-01',
        categoria_id: 'd12d9eb4-40c5-4ab4-8017-88799fd8bd28',
        docente_id: '77c06537-8d57-43fd-8837-24c1d5bbc5a1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c3147608-c6ff-4ffb-a148-a551426b2236',
        titulo: 'SpringBoot',
        descricao: 'Curso de Java com Spring Framework',
        data_inicio: '2023-01-01',
        categoria_id: '13332d46-d3a9-4327-847d-e1c8daf12435',
        docente_id: '77c06537-8d57-43fd-8837-24c1d5bbc5a1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '8897e34b-558e-4f1a-a172-fdfc486c9f0d',
        titulo: 'Python Web com Django',
        descricao: 'Curso de aplicações web com Django',
        data_inicio: '2023-01-01',
        categoria_id: '7c31941f-7918-4ac5-8d25-1f14dc706625',
        docente_id: '719e643c-9f46-42e3-baeb-8008b29ce9ca',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '6cf393d0-afcb-4b5a-b9e9-ce843b796d38',
        titulo: 'Orientação a Objetos com C#',
        descricao: 'Curso de C#: coleções, arquivos e libs',
        data_inicio: '2023-01-01',
        categoria_id: 'ffa8fe79-369f-4c41-804a-ab558673e09b',
        docente_id: '719e643c-9f46-42e3-baeb-8008b29ce9ca',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cursos', null, {});
  }
};
