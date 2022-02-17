const router = require('express').Router();
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const cors = require('cors');

module.exports = router;

// CREATE AN ORDER
router.post('/', cors(), async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create(req.body);
    res.json({ url: session.url });
  } catch (error) {
    next(error);
  }
});
