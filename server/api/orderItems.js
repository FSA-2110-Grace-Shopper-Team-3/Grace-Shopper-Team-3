const router = require('express').Router();
const {
  models: { OrderItem },
} = require('../db');
module.exports = router;

// GET ALL OrderItemS
router.get('/', async (req, res, next) => {
  try {
    const orderItems = await OrderItem.findAll();
    res.json(orderItems);
  } catch (err) {
    next(err);
  }
});

// CREATE NEW OrderItemS
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await OrderItem.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE A OrderItemS
router.delete('/:id', async (req, res, next) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (!orderItem) {
      res.sendStatus(404);
    } else {
      await orderItem.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

// EDIT A OrderItemS
router.put('/:id', async (req, res, next) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    res.send(await orderItem.update(req.body));
  } catch (error) {
    next(error);
  }
});
