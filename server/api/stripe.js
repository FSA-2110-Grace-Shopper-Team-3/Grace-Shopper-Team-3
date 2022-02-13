const router = require('express').Router();
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { Op } = require('sequelize');
const {
  models: { Order },
} = require('../db');
const cors = require('cors');

module.exports = router;
const DOMAIN = 'http:/localhost/8080';

// CREATE AN ORDER
router.post('/', cors(), async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          name: 'Total Items',
          amount: 100,
          currency: 'usd',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://www.linkedin.com`,
      cancel_url: `http://www.facebook.com`,
    });
    console.log(session.url);
    res.redirect(303, session.url);
  } catch (error) {
    next(error);
  }
});
