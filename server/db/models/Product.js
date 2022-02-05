const Sequelize = require('sequelize');
const db = require('../db');

const { STRING, INTEGER, TEXT } = Sequelize;

const Product = db.define('product', {
  brand: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  model: {
    type: STRING,
    allowNull: false,
  },
  price: {
    type: INTEGER,
    allowNull: false,
  },
  img: {
    type: STRING,
    defaultValue: '',
  },
  description: {
    type: TEXT,
  },
  category: {
    type: STRING,
  },
});

module.exports = Product;
