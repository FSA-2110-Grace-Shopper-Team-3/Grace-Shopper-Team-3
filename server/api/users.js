const router = require('express').Router();
const {
  models: { User },
} = require('../db');
module.exports = router;

// GET ALL USERS
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // attributes: ['id', 'username', 'password'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// CREATE A USER
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await User.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE A USER
router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.sendStatus(404);
    } else {
      await user.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

// EDIT A USER
router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});
