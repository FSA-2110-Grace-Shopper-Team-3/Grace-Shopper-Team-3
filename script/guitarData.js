const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const guitars = [
  {
    brand: 'Gibson',
    model: 'J-45',
    price: 3499.99,
    description:
      'The J-45 has been a staple and top-seller for Gibson since its debut in 1942.',
    category: 'Guitar',
    img: 'https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/1_Full_Straight_Front_44410-450b52d2ce9e2cee69ef556f54a18ed9.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Gibson',
    model: 'Hummingbird Studio',
    price: 3999.99,
    description:
      "The unmistakable Gibson Hummingbird is followed by the masses as one of the most remarkable acoustic guitars ever built. The Hummingbird Original blends vintage appointments and today's modern, high-quality build construction.",
    category: 'Guitar',
    img: 'https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/1_Full_Straight_Front_NA-b00f4e68d3bf5fd6392445d6ecfcc523.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Gibson',
    model: 'Dove',
    price: 4499.99,
    description:
      'This famous flame maple-backed square-shoulder introduced in the early 60s is intertwined with one of the most revolutionary decades in popular music history.',
    category: 'Guitar',
    img: 'https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/1_Full_Straight_Front_NA-2bd48c0458902ff4cfe26ce7f7aadbd9.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Gibson',
    model: 'L-00',
    price: 2799.99,
    description:
      'Gibson was a pioneer in the development of small body guitars in the beginning of the 1900s with its "L-Series Small Body" acoustics. These smaller Gibsons deliver a tonality that is best described in Gibson\'s 1934 catalog as a sound of "perfect balance."',
    category: 'Guitar',
    img: 'https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/1_Full_Straight_Front_NA-0ad92ebb03b36e4fc9a67cfda2ff750e.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Gibson',
    model: 'Generation G-00 ',
    price: 999.99,
    description:
      "The perfect personal parlor guitar, the Gibson G-00 is equipped with a Gibson Player Port. The Player Port is an original Gibson concept from the early 1960s that has been refined by Gibson's acoustic luthier team to deliver a truly revolutionary sonic improvement that adds a new dimension to the sound. ",
    category: 'Guitar',
    img: 'https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/1_Full_Straight_Front_NA-12b4a1a99b13c249e24954953e3e2cc5.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Martin',
    model: 'D-45',
    price: 10499.99,
    description:
      "Launched in 1906, Britain's HMS Dreadnought was the first all-big-gun battleship and the first to use steam-turbine propulsion. Larger, faster, quieter, and more deadly than any warship that had come before, it ushered in the modern era of naval warfare. ",
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-009c24e8a7b93cb2__hmac-bc236ceb244efcc63366a244f349deede6ac67c0/images/closeup/750-D45MD_front.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Martin',
    model: '000-42 Modern Deluxe',
    price: 7199.99,
    description:
      "Martin's 000-42 Modern Deluxe is a refreshing take on the classic auditorium body style, blending old-world style with modern refinements. Its Sitka spruce Vintage Tone System (VTS) top has been torrefied for maximum projection and harmonic excitement. The dovetail neck joint reinforces the classic Martin tone.",
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-f674c6de2c3b617d__hmac-9731bf49e09a5c47887be7fa378fbe67c971a9cb/images/closeup/750-00042MD_front.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Martin',
    model: '000-18 Modern Deluxe',
    price: 3599.99,
    description:
      "Martin's 000-18 Modern Deluxe is a refreshing take on the classic auditorium body style, blending old-world style with modern refinements. Its Sitka spruce Vintage Tone System (VTS) top has been torrefied for maximum projection and harmonic excitement.",
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-042e303cfc8e2e18__hmac-6f7c5c30d07049088cf44bad6c7a0bc912dc9239/images/closeup/750-00018MD_front.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Martin',
    model: 'SC-13E Special',
    price: 1799.99,
    description:
      'Looking for a high-performance acoustic-electric guitar? The Martin Road Series SC-13E Special delivers the goods, eliminating the limitations of the conventional cutaway acoustic. This game-changing A/E exhibits a gorgeous modern acoustic sound — direct, punchy, and dynamic — with incredible volume and projection.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-e7f5aad9b4cec698__hmac-efecbf3e85262ed7f5c535e9cc267d2627ab8eac/images/closeup/750-SC13ESp_front.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Martin',
    model: 'HD-28',
    price: 3199.99,
    description:
      "The HD-28 is Martin's premium dreadnought, considered by many guitarists to be the finest-sounding guitar Martin has ever made, period. With a solid Sitka spruce top and solid East Indian rosewood back and sides, this Martin HD-28 is a beautiful, immaculately designed acoustic guitar.",
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-5f4896a838873682__hmac-2da18bdd978af7b10515279ecc3bc062205abe20/images/closeup/750-HD28Y8_front.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Seagull',
    model: 'Artist Mosaic',
    price: 1299.99,
    description:
      'The Artist Mosiac EQ acoustic-electric is yet another beautifully designed instrument from Seagull Guitars. The Artist Mosiac EQ features mahogany back and sides and a solid spruce top for incredibly balanced, full tone.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-aad581fe8e8cd0cf__hmac-fe15e8f656c7b04266f3b5f2a1ff4820a9bc6bc4/images/guitars/ArtMosEQN/050536000076/050536000076-front-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Seagull',
    model: 'Artist CW',
    price: 1449.99,
    description:
      'The Seagull Artist CW EQ is in a class all its own. This premium cutaway acoustic-electric features mahogany back and sides and a solid spruce top to deliver a full, balanced, lively tone.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-eebb291e0e632c0f__hmac-4c432fafc89a0ea8734c7ab720c974bf63121399/images/closeup/750-ArtCWEQN_front.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Seagull',
    model: 'Artist Tuxedo',
    price: 1669.99,
    description:
      'With its piano-black gloss finish and white body trim, the Artist Tuxedo Black Anthem EQ could be considered the gentleman of the Seagull Artist series. This comfortable acoustic-electric fuses premium tonewoods with innovative construction methods to bring you a great-playing guitar for the stage and studio.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-5abcb9952a6f0007__hmac-f48f0f6893ac0acb856a40af2edf8ac82939aa4c/images/closeup/750-ArtTuxEQB_front.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Seagull',
    model: 'Maritime',
    price: 949.99,
    description:
      "The attention to detail given to each Seagull shows in its looks, playability, and tone. Seagull has also taken extra care to ensure that the Maritime SWS Concert Hall's neck helps to create an amazing guitar experience.",
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-cee4846074af53ee__hmac-65638f749a8633c51f6504cb68a282bca0bf266c/images/closeup/750-MariSWSCHCWQ_front.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Seagull',
    model: 'Coastline, 12-String',
    price: 1029.99,
    description:
      "The Seagull Guitars Coastline Spruce 12-string Concert Hall acoustic-electric guitar delivers the power, punch, and dynamics you need to bring your playing to life. Singer/songwriters, fingerpickers, and studio players alike will appreciate how the focused, authoritative midrange furnished by this guitar's Concert Hall body makes everybody sit up and take notice.",
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-9ac26fbd96de2aba__hmac-d63b82d12a82c6519c60c3d005d3dfa4c2702613/images/closeup/750-CoastCCE12Q1_front.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Taylor',
    model: 'K26ce',
    price: 5499.99,
    description:
      'The Taylor K26ce acoustic guitar pairs a head-turning design with divine sound for a sublime playing experience. Built around Taylor’s innovative V-Class bracing, this Grand Symphony–sized guitar produces a rich and airy orchestral tone with incredible detail, resonance, and projection.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-361a23c44fd30447__hmac-423b86b43240e72e2bb8161615bb1d3bb7470bdd/images/guitars/K26ceSE/1210201077/1210201077-front-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Taylor',
    model: '814ce',
    price: 3799.99,
    description:
      'Combining elegant aesthetics with sophisticated playability and tone-enhancing details, the 800 Series is Taylor’s incredibly popular class of premium rosewood guitars. The 814ce acoustic plays very comfortably, thanks to its Grand Auditorium body, graceful Venetian cutaway, and ergonomically radiused rosewood armrest.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-fbf5004183a74e82__hmac-72f2dd99e27c30eb5d9be344eb2e0a10df410fe9/images/guitars/814ceV/1212151164/1212151164-front-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Taylor',
    model: '914ce',
    price: 5499.99,
    description:
      'The Taylor 914ce is one of those acoustics that guitar enthusiasts talk about with passion and excitement. Its craftsmanship, design, and detailed appointments have made it one of Taylor’s most popular models — and for good reason.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-2176767d078add55__hmac-08be12662813c5adcf8e120d750b76263c4ed282/images/guitars/914ceRAVCN/1210071164/1210071164-front-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Taylor',
    model: '816ce',
    price: 3999.99,
    description:
      'The Taylor 816ce Builder’s Edition acoustic-electric guitar pairs a distinctive body design with an immaculate sound for the ultimate playing experience.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-6ea658dd6259f416__hmac-7bd0e767de0722a5e391875f9779f4bd6a34656a/images/guitars/816ceBE/1212141090/1212141090-front-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Taylor',
    model: 'K24ce',
    price: 5499.99,
    description:
      'The Taylor K24ce acoustic-electric guitar delivers all the sonic benefits of koa — a very special tonewood and a Taylor specialty. Run some single notes or strum a chord; savor the strong attack, crisp articulation, and voluptuous bloom.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-1d4ed039aa61ca2d__hmac-f48a67f6e6c9c57261558a84eec24f417b294438/images/guitars/K24ceV9/1209301184/1209301184-front-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Martin',
    model: 'BC-16E Bass',
    price: 2000.99,
    description:
      'The Martin BC-16E acoustic-electric bass is a great option for the bassist that prefers to play unplugged. This acoustic axe produces mellow tones that will have you smiling from ear to ear. The body is made from all-solid tonewoods.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-34b748fcd83a46b0__hmac-a10f3fce64e7c4b17ecae01af44ef11780cfd3ee/images/closeup/750-BC16E_front.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Guild',
    model: 'B-140E Bass',
    price: 899.99,
    description:
      'Get incredible acoustic bass tone and playability with the B-140E from Guild. This 4-string bass features a solid African mahogany body with a solid spruce top for rich, full tone.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-123f7273de5fc8c8__hmac-1abec81520e06c1222ef6f440d5b6fa8cf294f68/images/guitars/GB140ENat/G32113305/G32113305-front-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Breedlove',
    model: 'ECO Pursuit Exotic S',
    price: 799.99,
    description:
      'There’s nothing quite like the playing experience and enriching low end of an awesome acoustic bass. For “unplugged” sets, bassists at Sweetwater recommend the Breedlove ECO Pursuit Exotic S Concerto CE Acoustic-electric Bass.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-054c5b182bc65e0e__hmac-eb5c48e74534a647d5d7ab53982617cc0d89e8c5/images/closeup/750-EPECertoCEBAM_front.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Takamine',
    model: 'GB30CE Bass',
    price: 699.99,
    description:
      'In the market for an acousticbass? We have your axe: the Takamine GB30CE. When you take the stage with the GB30CE, all eyes and ears will be on you.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-adc7d830baf334b3__hmac-e03bd967e8013e19df359d2bdf73b72e8e2e5717/images/closeup/750-GB30CEBLK_front.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Breedlove',
    model: 'Premier Concert CE',
    price: 2899.99,
    description:
      'The Breedlove Premier Concert CE combines unique tonewoods with knockout electronics and construction methods. This acoustic-electric guitar is made with solid redwood over solid East Indian rosewood back and sides.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-2afd10af51bb9211__hmac-da3d32ac7df806981906612f913e12fb4d6a974c/images/guitars/PrCertCERRE/26558/26558-front-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Breedlove',
    model: 'LE 30th Anniv. Focus',
    price: 3999.99,
    description:
      'Sweetwater is excited to introduce you to the Breedlove 30th-anniversary Focus Special Edition Concert CE. The story begins with a set of fine East Indian rosewood back and sides that Breedlove pairs with a salvaged sinker redwood top.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-ff7a2d247919bfb0__hmac-bf357ebf72e803174bad49d9ba7124e18994078f/images/guitars/L3FSCertCERR/26411/26411-front-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Breedlove',
    model: 'Premier Concerto CE',
    price: 3049.99,
    description:
      'The Breedlove Premier Concerto CE combines unique tonewoods with knockout electronics and construction methods. This acoustic-electric guitar is made with solid Adirondack spruce over solid East Indian rosewood back and sides.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-958caa37a8bc5141__hmac-5ec113b59015bbc36329400607c07e666c9ce72d/images/guitars/PrCertoCEARA/26998/26998-front-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Breedlove',
    model: 'Legacy Concert CE',
    price: 3699.99,
    description:
      'The Breedlove Legacy Concert CE represents the pinnacle of Breedlove’s guitar-building expertise. This acoustic-electric guitar features heirloom-quality tonewoods of East Indian rosewood back and sides with redwood for the top.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-9f132a517fc8a91f__hmac-4ff08ab5cc59de2ea1a0ff8cf5406a16bec17b19/images/guitars/LgCertCESR/27051/27051-front-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Takamine',
    model: 'Legacy EF381SC',
    price: 1599.99,
    description:
      "Here's one of those little bits of guitar trivia that never fails to surprise people when you spring it at them: Takimine guitars are actually named after the Takamine Mountains in Sakashita, Japan.",
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-e7c43c78e8d5eec6__hmac-5d21343b99921b91fafd0ccc9efbf12e82d645f1/images/closeup/750-EF381SC_front.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Takamine',
    model: 'TSP178AC Thinline',
    price: 2399.99,
    description:
      'The Takamine Thinline TSP178AC SBB is an electric guitarist’s dream, thanks to its comfortable streamlined body and Slender C-shaped mahogany neck.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-b870393975ec0d79__hmac-222687fddf913439a36e830558ce62ddfa52919e/images/items/750/TSP178ACSBB-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Takamine',
    model: 'TSP-158C12 12-string',
    price: 2399.99,
    description:
      'The Takamine TSP-158C12 is made with premium tonewoods to give you the best tone possible, and the arched back and sides are made with maple, which lends a bright and lively sound with a boosted midrange.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-ccfee9973ac9f1fc__hmac-2e13ac9e6f15363ac1618bfa47fb81c60cc146b1/images/guitars/TSP158C12BL/58020858/58020858-front-large.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Guild',
    model: 'F-512E 12-string',
    price: 4399.99,
    description:
      'The Guild F-512E jumbo 12-string is the acoustic-electric version of the enormously popular F-512. The F-512E features a Sitka spruce top and rosewood back and sides.',
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-dd4a66ac4e815695__hmac-65df979743adcf7cd0fa63df142a9474c9e2c16a/images/closeup/750-F512eNat_front.jpg',
    rating: randomNum(1, 5),
  },
  {
    brand: 'Guild',
    model: 'F-55 Maple, Jumbo',
    price: 3599.99,
    description:
      "With the Guild F-55 acoustic guitar in your hands, you'll have no trouble being heard. Thanks to the F-55's jumbo body and Guild's trademark arched back, you'll get amazing volume and projection, and an exceptionally wide dynamic range for more expressive performances. ",
    category: 'Guitar',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-bb7615ad0091b173__hmac-1d87140782237cb8914a86abae6f43022603d875/images/closeup/750-F55MapBLD_front.jpg',
    rating: randomNum(1, 5),
  },
];

module.exports = guitars;
