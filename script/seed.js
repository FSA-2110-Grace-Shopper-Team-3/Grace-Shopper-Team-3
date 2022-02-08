'use strict';

const {
  db,
  models: { User, Product, Order, OrderItem },
} = require('../server/db');

const guitars = require('./guitarData');
const percussion = require('./percData');
const cellos = require('./celloData');
const pianos = require('./pianoData');
const accesories = require('./accData');
const users = require('./userData');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const allUsers = await Promise.all(users.map((user) => User.create(user)));

  allUsers.forEach((user) => Order.create({ userId: user.id }));

  const guitarProducts = await Promise.all(
    guitars.map((guitar) => Product.create(guitar))
  );

  const percProducts = await Promise.all(
    percussion.map((perc) => Product.create(perc))
  );

  const celloProducts = await Promise.all(
    cellos.map((cello) => Product.create(cello))
  );

  const pianoProducts = await Promise.all(
    pianos.map((piano) => Product.create(piano))
  );

  const accesoryProducts = await Promise.all(
    accesories.map((accesory) => Product.create(accesory))
  );

  // const david = await User.findOne({
  //   where: {
  //     username: 'david',
  //   },
  // });

  // const louis = await User.findOne({
  //   where: {
  //     username: 'louis',
  //   },
  // });

  // const gibson = await Product.findOne({
  //   where: {
  //     model: 'J-45',
  //   },
  // });

  // const arias = await Product.findOne({
  //   where: {
  //     model: 'Arias',
  //   },
  // });

  // const firstOrder = await Order.create({
  //   userId: david.id,
  //   status: 'pending',
  // });

  // const secondOrder = await Order.create({
  //   userId: louis.id,
  //   status: 'pending',
  // });

  // const orderProd = await OrderItem.create({
  //   productId: gibson.id,
  //   orderId: firstOrder.id,
  // });

  // const orderProd2 = await OrderItem.create({
  //   productId: arias.id,
  //   orderId: firstOrder.id,
  // });

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
