const Sequelize = require('sequelize');
const db = require('../db');

const { STRING, DECIMAL, TEXT } = Sequelize;

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
    type: DECIMAL,
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
