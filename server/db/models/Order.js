const Sequelize = require('sequelize');
const db = require('../db');

const { DECIMAL, UUID, UUIDV4, BOOLEAN } = Sequelize;

const Order = db.define('order', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  isOrdered: {
    type: BOOLEAN,
    defaultValue: false,
  },
  totalPrice: {
    type: DECIMAL,
    defaultValue: 0,
  },
});

module.exports = Order;
