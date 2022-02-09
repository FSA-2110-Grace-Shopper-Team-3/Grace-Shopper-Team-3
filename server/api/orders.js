const router = require('express').Router();
const {
  models: { Order, OrderItem },
} = require('../db');
module.exports = router;

// GET ALL ORDERS
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [OrderItem],
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

// CREATE AN ORDER
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Order.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE AN ORDER
router.delete('/:id', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      res.sendStatus(404);
    } else {
      await order.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

// EDIT AN ORDER
router.put('/:id', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    res.send(await order.update(req.body));
  } catch (error) {
    next(error);
  }
});
