const { Tune } = require('@material-ui/icons');
const Sequelize = require('sequelize');
const db = require('../db');

const { STRING, DECIMAL, TEXT, INTEGER, UUID, UUIDV4 } = Sequelize;

const Product = db.define('product', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  brand: {
    type: STRING,
    allowNull: false,
  },
  model: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  price: {
    type: DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
  img: {
    type: STRING,
    defaultValue:
      'https://www.nogapinsulation.com.au/wp-content/uploads/2019/12/product-coming-soon-no-gap-insulation.jpg',
  },
  description: {
    type: TEXT,
  },
  category: {
    type: STRING,
  },
  quantity: {
    type: INTEGER,
    defaultValue: 10,
    validate: {
      min: 0,
    },
  },
  rating: {
    type: INTEGER,
    defaultValue: 3,
  },
});

module.exports = Product;
