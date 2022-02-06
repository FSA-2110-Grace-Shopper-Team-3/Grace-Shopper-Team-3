'use strict';

const {
  db,
  models: { User, Product },
} = require('../server/db');

const guitars = require('./guitarData');
const percussion = require('./percData');
const cellos = require('./celloData');

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

  // const products = await Promise.all([
  //   Product.create({
  //     brand: 'Fender',
  //     model: 'Acoustasonic',
  //     price: 1999.99,
  //     description:
  //       'Guitarists of diverse styles and tastes are finding their voice in the new Fender Acoustasonic Telecaster.',
  //     category: 'Guitar',
  //     img: 'https://sc1.musik-produktiv.com/pic-010128323xxl/fender-acoustasonic-jazzmaster-arctic-white.jpg',
  //   }),
  //   Product.create({
  //     brand: 'Gibson',
  //     model: 'J-45',
  //     price: 2849.99,
  //     description:
  //       'The J-45 has been a staple and top-seller for Gibson since its debut in 1942.',
  //     category: 'Guitar',
  //   }),
  //   Product.create({
  //     brand: 'Scherl & Roth',
  //     model: 'SR55E4H',
  //     price: 2709,
  //     description:
  //       'More than an amazing instrument, the Scherl & Roth SR55E4H 4/4-size Galliard Student Cello Outfit represents amazing value.',
  //     category: 'Cello',
  //   }),
  //   Product.create({
  //     brand: 'Knilling',
  //     model: '154S',
  //     price: 1299,
  //     description:
  //       "As part of Knilling's value-rich Sebastian series, the 154S Sebastian Student Cello Outfit stands out among student models with its exceptional craftsmanship and quality components.",
  //     category: 'Cello',
  //   }),
  //   Product.create({
  //     brand: 'Ludwig',
  //     model: 'Breakbeats',
  //     price: 429,
  //     description:
  //       'Breakbeats by Ludwig marks the return of Ahmir "Questlove" Thompson to the drums of his youth.',
  //     category: 'Drums',
  //   }),
  // ]);

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
