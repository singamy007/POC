'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      { id: 1, name: 'Fiction', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Horror', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Comedy', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Science', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'Autobiography', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
