'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Dracula', author: 'Bram Stoker', categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { title: 'The Hitchhiker’s Guide to the Galaxy', author: 'Douglas Adams', categoryId: 3, createdAt: new Date(), updatedAt: new Date() },
      { title: 'A Brief History of Time', author: 'Stephen Hawking', categoryId: 4, createdAt: new Date(), updatedAt: new Date() },
      { title: 'The Diary of a Young Girl', author: 'Anne Frank', categoryId: 5, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  },
};
