const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const piano = [
  {
    brand: 'Yamaha',
    model: 'Arias',
    price: 125000.99,
    description:
      "The Yamaha Arius YDP-164 brings together true piano sound and feel, for an outstanding playing experience. Yamaha incorporated their high-tech sampling system into the YDP-164, so you get the rich sound of Yamaha's flagship 9-foot CFX concert grand.",
    category: 'Piano',
    img: 'https://media.sweetwater.com/api/i/q-82__ha-7fbafc2aa5b251dd__hmac-9107d146513a9ab9986cd89670a54ae3d1db90c6/images/items/750/YDP164RW-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Steinway',
    model: 'Concert Grand',
    price: 250000.99,
    description:
      'A lovely 1866 Steinway & Sons concert grand piano with rosewood case. The elegantly carved Rococo-style scrolled legs and ornate foliate details are ebonized, producing a striking contrast against the case, while the pierced and carved music rack and pedal lyre further display the masterful construction and design elements.',
    category: 'Piano',
    img: 'https://www.liveauctioneers.com/news/wp-content/uploads/2019/04/74091.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Roland',
    model: 'RP-701',
    price: 250000.99,
    description:
      "Equipped with Roland's renowned SuperNATURAL sound engine, you get an intimate and customizable connection with your piano. Each note can be shaped to respond to your touch and dynamics with the tone and harmonic accuracy you desire.",
    category: 'Piano',
    img: 'https://media.sweetwater.com/api/i/q-85__ha-0a744bee1b95f853__hmac-fa6bfc6aaf90d3e8f7878239970fee9a960f64a7/images/items/1800/RP701WH-xlarge.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Kawai',
    model: 'CA49',
    price: 350000.99,
    description:
      'If performance, elegance, and value are your top concerns, We have an excellent suggestion: the Kawai CA49. With its trim footprint and attractive finish, the CA49 will grace any room.',
    category: 'Piano',
    img: 'https://m.media-amazon.com/images/I/71aY1JD8FfL._AC_SX466_.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Steinway',
    model: 'Luxury',
    price: 350000.99,
    description:
      'Not only will it sound exquisite, but it looks amazing - the perfect addition to any home. Steinway has a global reputation for quality and value. Uncompromising care and craftsmanship go into each piano built at their state-of-the-art facilities.',
    category: 'Piano',
    img: 'https://pianopiano.com/wp-content/uploads/2015/08/Screen-Shot-2019-12-10-at-2.39.05-PM.png',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Yamaha',
    model: 'GB1K',
    price: 17699,
    description:
      " The Yamaha GB1K Grand Piano is the most affordable available instrument in the Yamaha line. Grand pianos also take up a lot of space; the GB1K is a popular choice for locations with limited space. This 5' grand piano has a full, resonant tone comparable to larger pianos. Bring the concert hall to your home with the Yamaha GB1K Grand Piano.",
    category: 'Piano',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-0401c652e22820ac__hmac-ca48f4b277c448b5cf52a05fb451c11ee20fc1ae/images/items/750/GB1KPM-large.jpg.auto.webp',
    rating: randomNum(1, 5),
  },
];

module.exports = piano;
