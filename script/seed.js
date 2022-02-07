'use strict';

const {
  db,
  models: { User, Product },
} = require('../server/db');

const guitars = require('./guitarData');
const percussion = require('./percData');
const cellos = require('./celloData');
const pianos = require('./pianoData');
const accesories = require('./accData');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: 'louis',
      password: '123',
      email: 'louis@gmail.com',
      address: '123 louis lane',
      phoneNumber: '555-555-5555',
      paymentInfo: '1234 6789 0191 7474',
    }),
    User.create({
      username: 'david',
      password: '123',
      email: 'david@gmail.com',
      address: '456 david street',
      phoneNumber: '123-123-1234',
      paymentInfo: '1234 6675 0861 4747',
    }),
    User.create({
      username: 'kenny',
      password: '123',
      email: 'kenny@gmail.com',
      address: '789 kenny court',
      phoneNumber: '222-234-2323',
      paymentInfo: '1234 6655 5656 5656',
    }),
  ]);

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

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    guitarProducts,
    percProducts,
    celloProducts,
    pianoProducts,
    accesoryProducts,
  };
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
