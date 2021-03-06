const router = require('express').Router();
const {
  models: { Product },
} = require('../db');
module.exports = router;

// GET ALL PRODUCTS
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({});
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// CREATE NEW PRODUCT
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Product.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE A PRODUCT
router.delete('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      res.sendStatus(404);
    } else {
      await product.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

// EDIT A PRODUCT
router.put('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(await product.update(req.body));
  } catch (error) {
    next(error);
  }
});
