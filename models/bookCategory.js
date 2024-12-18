import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const BookCategory = sequelize.define('BookCategory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

export default BookCategory;
