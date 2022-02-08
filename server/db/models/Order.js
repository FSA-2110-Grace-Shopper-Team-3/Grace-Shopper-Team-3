const Sequelize = require('sequelize');
const db = require('../db');

const { STRING, INTEGER, TEXT, UUID, UUIDV4 } = Sequelize;

const Order = db.define('order', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  status: {
    type: STRING,
    validate: {
      isIn: [['ordered', 'pending', 'cancelled']],
    },
    defaultValue: 'pending',
  },
});

module.exports = Order;
