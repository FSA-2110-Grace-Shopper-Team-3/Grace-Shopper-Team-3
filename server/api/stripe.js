const router = require('express').Router();
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { Op } = require('sequelize');
const {
  models: { Order },
} = require('../db');
const cors = require('cors');

module.exports = router;
const DOMAIN = 'http://localhost:8080';

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
      success_url: `${DOMAIN}/orderplaced/?success=true`,
      cancel_url: `${DOMAIN}/cart/?cancelled=true`,
    });
    res.redirect(303, session.url);
  } catch (error) {
    next(error);
  }
});

// router.get('/', cors(), async (req, res, next) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           name: 'Total Items',
//           amount: 100,
//           currency: 'usd',
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${DOMAIN}/orderplaced`,
//       cancel_url: `${DOMAIN}/cart`,
//     });
//     res.json(session);
//   } catch (error) {
//     next(error);
//   }
// });
