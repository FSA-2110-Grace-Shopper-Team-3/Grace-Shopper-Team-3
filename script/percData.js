const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const percussion = [
  {
    brand: 'Ludwig',
    model: 'Breakbeats',
    price: 4429.99,
    description:
      'Breakbeats by Ludwig marks the return of Ahmir "Questlove" Thompson to the drums of his youth.',
    category: 'Drum',
    img: 'https://media.guitarcenter.com/is/image/MMGS7/H91063000001000-00-1600x1600.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Pearl',
    model: 'Roadshow',
    price: 6629.99,
    description:
      "Get everything you need to start drumming in one complete package with Pearl's Roadshow 5-piece drum set.",
    category: 'Drum',
    img: 'https://www.percussionsource.com/product/image/medium/217851_0.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Mapex',
    model: 'Armory',
    price: 10999.99,
    description:
      "When you're battling multiple guitars for a place in the mix, not just any drum kit will do. The Mapex Armory shell pack cuts through today's music with a clean, focused attack and style to match.",
    category: 'Drum',
    img: 'https://media.sweetwater.com/api/i/q-82__ha-3b1765ae8fcbbee3__hmac-da9dbe34a4d5d35ca08df6a44de0609bcd251548/images/items/750/AR628SF-DD-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Tama',
    model: 'Imperial Star',
    price: 11799.99,
    description:
      "We're committed to making sure you get your money's worth out of the gear you buy. That's why we stand behind our TAMA Imperialstar complete drum sets.",
    category: 'Drum',
    img: 'https://media.sweetwater.com/api/i/q-82__ha-16d58495bf88298c__hmac-3bde5ed11e230c24860f6b832598ae4c406215c6/images/items/750/IE52CHBK-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Pearl',
    model: 'Export',
    price: 14929.99,
    description:
      'Upgraded shells, hardware, and more make this Pearl Export EXX 5-piece drum set an upgraded version of one of the most popular and affordable drum kits around.',
    category: 'Drum',
    img: 'https://media.sweetwater.com/api/i/q-82__ha-1193898a7e82aa79__hmac-0d192d7ba6f21fd0793f30ee43937b9d010c9fc9/images/items/750/EXX725S33-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Gretsch',
    model: 'Catalina',
    price: 11199.99,
    description:
      'The Gretsch Catalina Maple seven-piece drum kit sports maple shells for explosive sound and balanced, wide-ranging tone. The fast response and vibrant sound make this an exceptional kit for any style, and a great setup for recording studios. ',
    category: 'Drum',
    img: 'https://m.media-amazon.com/images/I/61Z-ewh7PvL._AC_SX425_.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'DW',
    model: 'Performance Series',
    price: 12626.99,
    description:
      "The DW Performance Series' HVX maple shells are hand built in the same California plant, by the same skilled craftsmen, as DW's inimitable Collector's Series.",
    category: 'Drum',
    img: 'https://media.sweetwater.com/api/i/q-82__ha-877f6baa73a4156a__hmac-3f8a2d406369b61c10f2c123e9f3eea81c04bae2/images/items/750/PSK422PS-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Yamaha',
    model: 'Stage Custom',
    price: 11709.99,
    description:
      "This Yamaha Stage Custom Birch 5-piece drum kit gives you a lot of bang for your buck, whether you're a beginner or a seasoned player.",
    category: 'Drum',
    img: 'https://media.sweetwater.com/api/i/q-82__ha-693613463df91c9a__hmac-f0287997c7fe81bc2f7852d5c5e6a01eb3bd1007/images/items/750/SCBIRCHSPHA-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Pearl',
    model: 'Masterworks',
    price: 18092.96,
    description:
      "For arena rock, nothing tops the classic maple drum kit. The sharp crack. The warm, singing sustain. The dry, musical decay. That's why the handbuilt Pearl Masterworks Stadium Sonic Select shell pack is masterfully built and finished from only the choicest plies of 100% maple.",
    category: 'Drum',
    img: 'https://media.sweetwater.com/api/i/q-85__ha-5214d15a146730a3__hmac-382a354abde14cb727ed126f110c75f62b6ae133/images/items/1800/MW922N-SFM-xlarge.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Craviotto',
    model: 'Exclusive',
    price: 25092.99,
    description:
      'This year Craviotto began experimenting with woods outside its wheelhouse, including hickory, Ambrosia maple, and, as featured here, beech wood.',
    category: 'Drum',
    img: 'https://media.sweetwater.com/api/i/q-82__ha-b5591edba1cce228__hmac-37708c56410496df7943dc71938c4723ab96361a/images/items/750/CDC420FBC-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Pearl',
    model: 'Music City Custom',
    price: 22092.99,
    description:
      'Pearl voiced every drum in its lightweight Reference Pure shell pack with a custom blend of maple, birch, and African mahogany plies for optimal tone, crack, and sustain at every size.',
    category: 'Drum',
    img: 'https://media.sweetwater.com/api/i/q-82__ha-24625f5b28798030__hmac-78af1d41ead5f8ffae78a11ce82bec1b12b18768/images/items/750/RFP522-TG-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'DW',
    model: 'Collectors Series',
    price: 26092.99,
    description:
      "If you demand top-of-the-line, professional quality, this DW Collector's Series lacquer custom shell pack is both sonically versatile and visually stunning. Built from cherry and finished in natural lacquer, these shells give you a punchy, warm tonality with plenty of resonance and high-end bite.",
    category: 'Drum',
    img: 'https://media.sweetwater.com/api/i/q-82__ha-53e9a7320c07db56__hmac-1013414f7c096859231711dd337b30446797f74c/images/items/750/DRCherryShell-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'A&F',
    model: 'Royal',
    price: 35092.99,
    description:
      'Wake up to the visceral punch and enveloping warmth of handcrafted brass shells in the A&F Royal shell pack from Sweetwater. This premier 4-piece features shells that are entirely handbuilt — cut, rolled, welded, and sanded smooth — from a solid blank of brass and treated with a patented oxidizing bath to unearth a raw, rustic patina and an otherworldly fatness.',
    category: 'Drum',
    img: 'https://media.sweetwater.com/api/i/b-original__w-300__h-300__bg-ffffff__q-85__ha-8fac827ae50097de__hmac-9c5732f54eb6c3caf2dabee665c1b8c9279dbf7a/images/items/350/AF424ROYAL.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Sonor',
    model: 'SQ2',
    price: 19092.96,
    description:
      "With this pre-configured Sonor SQ2 maple shell pack from Sweetwater, your dream kit is just a click or call away. The SQ2 series represents the pinnacle of Sonor's more than 140 years of drum expertise.",
    category: 'Drum',
    img: 'https://media.sweetwater.com/api/i/q-85__ha-b60cb4ffe35c709a__hmac-c63e354985a3be39447201c8e25d0ffe2ca1f6f5/store/enhanced/items/SQ2420SW/61f386-rs_1011590-2.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'DW',
    model: 'Collectors Jazz',
    price: 15092.99,
    description:
      "The Collector's Jazz Series offers DW's modern shell innovations with a classic sound. This kit's warm, open tones evoke shades of Kansas City jazz to New Orleans funk.",
    category: 'Drum',
    img: 'https://media.sweetwater.com/api/i/q-85__ha-a993a5929f2c7cff__hmac-e56b60e5fbc8bc3b30a5f0f38fe86c00d815688d/images/items/1800/DWJ4320-BL-xlarge.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Ludwig',
    model: 'Vistalite',
    price: 30092.99,
    description:
      "The Ludwig Zep Set 5-piece shell pack is a re-creation of John Bonham's legendary acrylic set. There is no question that Bonham helped write the book for hard-hitting rock 'n' roll stage presence and drumming. ",
    category: 'Drum',
    img: 'https://media.guitarcenter.com/is/image/MMGS7/L68975000001000-00-1600x1600.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Tama',
    model: 'Star Classic',
    price: 10092.99,
    description:
      "TAMA's Starclassics once ruled the drumming world. Today, TAMA is transforming these former hard rock staples into a timeless paradigm: the Starclassic Maple shell pack. ",
    category: 'Drum',
    img: 'https://media.sweetwater.com/api/i/q-85__ha-ca1fc1ee0ede83dc__hmac-1fb5b667c7dabc2181fdf22f2a778260514cbb6d/images/items/1800/ME42TZBSVTBV-xlarge.jpg',
    rating: randomNum(1, 5),
  },
];

module.exports = percussion;
