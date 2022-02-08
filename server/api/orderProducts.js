const router = require('express').Router();
const {
  models: { OrderProduct, Product },
} = require('../db');
module.exports = router;

// GET ALL ORDERPRODUCTS
router.get('/', async (req, res, next) => {
  try {
    const orderProducts = await OrderProduct.findAll();
    res.json(orderProducts);
  } catch (err) {
    next(err);
  }
});

// CREATE NEW ORDERPRODUCTS
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await OrderProduct.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE A ORDERPRODUCTS
router.delete('/:id', async (req, res, next) => {
  try {
    const orderProduct = await OrderProduct.findByPk(req.params.id);
    if (!orderProduct) {
      res.sendStatus(404);
    } else {
      await orderProduct.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

// EDIT A ORDERPRODUCTS
router.put('/:id', async (req, res, next) => {
  try {
    const orderProduct = await OrderProduct.findByPk(req.params.id);
    res.send(await orderProduct.update(req.body));
  } catch (error) {
    next(error);
  }
});
