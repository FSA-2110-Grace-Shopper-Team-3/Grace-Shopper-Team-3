import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PopularItems = () => {
  //-------------------Getting Products---------------------//
  const products = useSelector((state) => state.products) || [];
  const guitarProd = products.find((product) => product.model === 'Dove') || {};
  const drumsProd =
    products.find((product) => product.model === 'Roadshow') || {};
  const celloProd = products.find((product) => product.model === '154S') || {};
  const pianoProd = products.find((product) => product.model === 'Arias') || {};
  const items = [guitarProd, drumsProd, celloProd, pianoProd];
  
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
        {items.map((item, idx) => {
          return (
            <SwiperSlide className="pi-slide" key={idx}>
              {' '}
              <div className="pds-product-wrapper">
                <Link to={`/products/${item.id}`} className="react-link">
                  <div className="pi-slide-img">
                    <img src={item.img} />
                  </div>
                  <div className="pds-product-name">
                    <div className="pds-product-model">
                      <h3>{item.model}</h3>
                    </div>
                    <div className="pds-product-brand">{item.brand}</div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PopularItems;
