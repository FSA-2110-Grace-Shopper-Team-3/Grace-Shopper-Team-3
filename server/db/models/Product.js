const Sequelize = require('sequelize');
const db = require('../db');

const { STRING } = Sequelize;

const Product = db.define('product', {
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = Product;
