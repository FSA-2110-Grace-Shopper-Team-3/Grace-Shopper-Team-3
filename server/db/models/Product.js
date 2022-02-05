const Sequelize = require('sequelize');
const db = require('../db');

const { STRING, INTEGER } = Sequelize;

const Product = db.define('product', {
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  price: {
    type: INTEGER,
    allowNull: false,
  },
});

module.exports = Product;
