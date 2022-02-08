//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const OrderProduct = require('./models/OrderProduct');

//associations could go here!
User.hasMany(Order);
Order.belongsTo(User);

Product.belongsToMany(Order, { through: OrderProduct });
Order.belongsToMany(Product, { through: OrderProduct });

Order.hasMany(OrderProduct);

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    OrderProduct,
  },
};
