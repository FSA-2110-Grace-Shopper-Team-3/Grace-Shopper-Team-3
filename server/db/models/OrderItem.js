const Sequelize = require('sequelize');
const db = require('../db');
const Order = require('./Order');
const Product = require('./Product');

const { INTEGER, UUID, UUIDV4 } = Sequelize;

const OrderItem = db.define('orderitem', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  quantity: {
    type: INTEGER,
    defaultValue: 1,
  },
});

module.exports = OrderItem;
