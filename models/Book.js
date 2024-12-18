import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import BookCategory from './bookCategory.js';

// Define the Book model
const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  author: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: { 
      model: BookCategory, 
      key: 'id' 
    },
    onDelete: 'CASCADE', // Automatically delete books if category is deleted
  },
});

// Define relationships between Book and BookCategory
BookCategory.hasMany(Book, { foreignKey: 'categoryId' }); // One category can have many books
Book.belongsTo(BookCategory, { foreignKey: 'categoryId' }); // Each book belongs to one category

export default Book;
