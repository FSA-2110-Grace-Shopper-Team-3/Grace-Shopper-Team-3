const Sequelize = require('sequelize');
const db = require('../db');

const { STRING, INTEGER, TEXT, UUID, UUIDV4, ARRAY } = Sequelize;

const Cart = db.define('cart', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
});

module.exports = Cart;
