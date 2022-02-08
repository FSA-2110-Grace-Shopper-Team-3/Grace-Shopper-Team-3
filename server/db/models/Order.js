const Sequelize = require('sequelize');
const db = require('../db');

const { STRING, INTEGER, TEXT, UUID, UUIDV4, BOOLEAN } = Sequelize;

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
});

module.exports = Order;
