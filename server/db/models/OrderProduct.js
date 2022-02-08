const Sequelize = require('sequelize');
const db = require('../db');
const Order = require('./Order');
const Product = require('./Product');

const { INTEGER, UUID, UUIDV4 } = Sequelize;

const OrderProduct = db.define('OrderProduct', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  productId: {
    type: UUID,
    references: {
      model: Product,
      key: 'id',
    },
    defaultValue: UUIDV4,
  },
  orderId: {
    type: UUID,
    references: {
      model: Order,
      key: 'id',
    },
    defaultValue: UUIDV4,
  },
  quantity: {
    type: INTEGER,
    defaultValue: 1,
  },
});

module.exports = OrderProduct;
