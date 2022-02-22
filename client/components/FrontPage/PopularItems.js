import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = [
  'https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/1_Full_Straight_Front_NA-b00f4e68d3bf5fd6392445d6ecfcc523.jpg',
  'https://www.percussionsource.com/product/image/medium/217851_0.jpg',
  'https://media.sweetwater.com/api/i/q-82__ha-c09ba7e75bfe9a7e__hmac-1b4683966c5525c16e286bd4edad556e21796ce0/images/closeup/750-KnSebClo44SO_detail2.jpg',
  'https://media.sweetwater.com/api/i/q-82__ha-7fbafc2aa5b251dd__hmac-9107d146513a9ab9986cd89670a54ae3d1db90c6/images/items/750/YDP164RW-large.jpg',
  'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
];

const PopularItems = () => {
  return (
    <div className="pi">
      <div>
        <h1>BEST SELLERS</h1>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="pi-slide">
          {' '}
          <div className="pds-product-wrapper">
            <div className="pi-slide-img">
              <img src={images[0]} />
            </div>
            <div className="pds-product-name">
              <div className="pds-product-model">
                <h3>DOVE</h3>
              </div>
              <div className="pds-product-brand">Gibson</div>
            </div>
            {/* <div className="pds-product-name">
              <div className="pds-product-model">
                <h3>{product.model}</h3>
              </div>
              <div className="pds-product-brand">{product.brand}</div>
              <div className="pds-product-price">${product.price}</div>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="pi-slide">
          {' '}
          <div className="pds-product-wrapper">
            <div className="pi-slide-img">
              <img src={images[1]} />
            </div>
            <div className="pds-product-name">
              <div className="pds-product-model">
                <h3>ROADSHOW</h3>
              </div>
              <div className="pds-product-brand">Pearl</div>
            </div>
            {/* <div className="pds-product-name">
              <div className="pds-product-model">
                <h3>{product.model}</h3>
              </div>
              <div className="pds-product-brand">{product.brand}</div>
              <div className="pds-product-price">${product.price}</div>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="pi-slide">
          {' '}
          <div className="pi-slide-wrapper">
            <div className="pi-slide-img">
              <img src={images[2]} />
            </div>
            <div className="pds-product-name">
              <div className="pds-product-model">
                <h3>154S</h3>
              </div>
              <div className="pds-product-brand">Knilling</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pi-slide">
          {' '}
          <div className="pds-product-wrapper">
            <div className="pi-slide-img">
              <img src={images[3]} />
            </div>
            <div className="pds-product-name">
              <div className="pds-product-model">
                <h3>ARIAS</h3>
              </div>
              <div className="pds-product-brand">Yamaha</div>
            </div>
            {/* <div className="pds-product-name">
              <div className="pds-product-model">
                <h3>{product.model}</h3>
              </div>
              <div className="pds-product-brand">{product.brand}</div>
              <div className="pds-product-price">${product.price}</div>
            </div> */}
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="pi-ss">
          {' '}
          <div className="pds-product-wrapper">
            <div>
              <img src={product.img} />
            </div>
            <div className="pds-product-name">
              <div className="pds-product-model">
                <h3>{product.model}</h3>
              </div>
              <div className="pds-product-brand">{product.brand}</div>
              <div className="pds-product-price">${product.price}</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pi-ss">
          {' '}
          <div className="pds-product-wrapper">
            <div>
              <img src={product.img} />
            </div>
            <div className="pds-product-name">
              <div className="pds-product-model">
                <h3>{product.model}</h3>
              </div>
              <div className="pds-product-brand">{product.brand}</div>
              <div className="pds-product-price">${product.price}</div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default PopularItems;

{
  /* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 20,
          depth: 100,
          modifier: 0,
          // slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="ss">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="ss">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className="ss">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className="ss">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className="ss">
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide className="ss">
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
      </Swiper> */
}

{
  /* <Swiper
slidesPerView={2}
spaceBetween={20}
slidesPerGroup={2}
loop={true}
loopFillGroupWithBlank={true}
pagination={{
  clickable: true,
}}
navigation={true}
modules={[Pagination, Navigation]}
className="mySwiper"
>
<div className="ss-items">
  <SwiperSlide className="ss">Slide 1</SwiperSlide>
  <SwiperSlide className="ss">Slide 2</SwiperSlide>
  <SwiperSlide className="ss">Slide 3</SwiperSlide>
  <SwiperSlide className="ss">Slide 4</SwiperSlide>
  <SwiperSlide className="ss">Slide 5</SwiperSlide>
  <SwiperSlide className="ss">Slide 6</SwiperSlide>
</div>
</Swiper> */
}
