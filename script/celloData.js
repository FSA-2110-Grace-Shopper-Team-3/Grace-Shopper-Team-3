const cellos = [
  {
    brand: 'Knilling',
    model: '154S',
    price: 1299,
    description:
      "As part of Knilling's value-rich Sebastian series, the 154S Sebastian Student Cello Outfit stands out among student models with its exceptional craftsmanship and quality components.",
    category: 'Cello',
    img: 'https://media.sweetwater.com/api/i/q-82__ha-c09ba7e75bfe9a7e__hmac-1b4683966c5525c16e286bd4edad556e21796ce0/images/closeup/750-KnSebClo44SO_detail2.jpg',
  },
  {
    brand: 'Cecilio',
    model: 'CCO-100',
    price: 299,
    description:
      'The Cecilio CCO-100 cello instrument kit is an ideal beginner music instrument for any student, young or old, who has dreams of playing music. ',
    category: 'Cello',
    img: 'https://m.media-amazon.com/images/I/61F247xal9L._AC_SL1500_.jpg',
  },
  {
    brand: "D'Luca",
    model: 'MC100',
    price: 1299,
    description:
      'The Eastar EVC-1 4/4 full size Matt Natural Varnish Cello is made of spruce wood panels, maple backboards and side plates.The body of the cello has beautiful lines with clean timbre and stable sound.',
    category: 'Cello',
    img: 'https://m.media-amazon.com/images/I/31z-7UwCH2L._AC_.jpg',
  },
  {
    brand: 'Eastar',
    model: 'EVC',
    price: 410,
    description:
      "As part of Knilling's value-rich Sebastian series, the 154S Sebastian Student Cello Outfit stands out among student models with its exceptional craftsmanship and quality components.",
    category: 'Cello',
    img: 'https://m.media-amazon.com/images/I/711JO+wFKtL._AC_SL1500_.jpg',
  },
  {
    brand: 'D Z Strad',
    model: '800',
    price: 9000,
    description:
      'The Model 800 cello is another beautifully handcrafted example of our figured Maple offerings. This Cello is a finely crafted handmade instrument executed by Silver Award winning luthiers of the Violin Society of America. ',
    category: 'Cello',
    img: 'https://cdn.shopify.com/s/files/1/2290/4197/products/Model_800_Cello_1_1024x1024.jpg?v=1568840270',
  },
  {
    brand: 'Albert Nebel',
    model: 'VC601',
    price: 4564,
    description:
      'Albert Nebel celli provide famous quality at a modest price. These instruments are crafted from aged European tone woods. Each cello is hand carved and varnished in the Eastman Strings workshop.',
    category: 'Cello',
    img: 'https://imgix.cosmicjs.com/45c82bd0-96c9-11e9-b0ea-3d785d04f3a2-EastmanCelloVC601GuarneriFront041117.png?auto=format,compress&h=568&dpr=2',
  },
  {
    brand: 'Cremona',
    model: 'SC-165',
    price: 1000,
    description:
      'Crafted from the finest hand carved solid spruce and maple, our Student Series may be played without apology in any orchestra. Their fine tone and easy playability will assure rapid progress for any dedicated student.',
    category: 'Cello',
    img: 'https://media.guitarcenter.com/is/image/MMGS7/K47063000003000-00-720x720.jpg',
  },
  {
    brand: 'Merano',
    model: 'MC400',
    price: 1000,
    description:
      'Crafted from the finest hand carved solid spruce and maple, our Student Series may be played without apology in any orchestra. Their fine tone and easy playability will assure rapid progress for any dedicated student.',
    category: 'Cello',
    img: 'https://m.media-amazon.com/images/I/41XZTT3jQ5L._AC_.jpg',
  },
  {
    brand: 'Merano',
    model: 'CL500-MP',
    price: 450,
    description:
      'Hand Carved Spruce top. Flamed Solid Maple back, neck and sides. Ebony tailpiece with 4 built-in fine tuners',
    category: 'Cello',
    img: 'https://cdn1.bigcommerce.com/server600/h6qlog4f/products/52/images/145/CL500__32383.1358045765.1280.1280.jpg?c=2',
  },
  {
    brand: 'Merano',
    model: 'CL300-MP',
    price: 350,
    description:
      'Hand Carved Spruce top. Maple back, neck and sides. Ebony tailpiece with 4 built-in fine tuners',
    category: 'Cello',
    img: 'https://cdn1.bigcommerce.com/server600/h6qlog4f/products/52/images/145/CL500__32383.1358045765.1280.1280.jpg?c=2',
  },
  {
    brand: 'Yamaha',
    model: 'SVC-110SK',
    price: 3499,
    description:
      'Full bodied frame for traditional feel4 Wittner tuning adjusters plus fine tuning control on tailpiece',
    category: 'Cello',
    img: 'https://m.media-amazon.com/images/I/61nr41Ho4SL._AC_SL1500_.jpg',
  },
  {
    brand: 'Yamaha',
    model: 'SVC-210SK',
    price: 3299,
    description:
      'Fully collapsible in both upper and lower bout. Inner resonance chamber to give it an acoustic instrument feel. 3 reverb presetss',
    category: 'Cello',
    img: 'https://m.media-amazon.com/images/I/51vXdqvdAbL._AC_SL1000_.jpg',
  },
  {
    brand: 'Cecilio',
    model: 'CCO-500',
    price: 449,
    description:
      "Cecilio CCO-500 cello is ideal for intermediate cellist. Every cello is inspected by technicians at Cecilio's distribution center in the United States to ensure that their high quality standards are met",
    category: 'Cello',
    img: 'https://m.media-amazon.com/images/I/41MyYZOXIEL._AC_.jpg',
  },
  {
    brand: "D'Luca",
    model: 'CAC400-44',
    price: 899,
    description:
      'D’Luca Student Ebony Cello Outfit With Padded Gig Bag, Bow, And Rosin, 4/4 Full Size. This entry level student Cello is perfect for beginner to intermediate students. Produces quality warm full sound typical of the instrument.',
    category: 'Cello',
    img: 'https://m.media-amazon.com/images/I/71mVliLudfL._AC_SL1500_.jpg',
  },
  {
    brand: 'Cecilio',
    model: 'CCO-600',
    price: 799,
    description:
      "Cecilio CCO-600 an excellent cello for any intermediate to professional cellist. Every cello is inspected by technicians at Cecilio's distribution center in the United States to ensure that their high quality standards are met.",
    category: 'Cello',
    img: 'https://m.media-amazon.com/images/I/51PV9Y1FwGL._AC_.jpg',
  },
];

module.exports = cellos;
