const router = require('express').Router();
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

module.exports = router;
const DOMAIN = 'http:/localhost/8080';

// CREATE AN ORDER
router.post('/', async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          name: 'Apple',
          amount: 200,
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
