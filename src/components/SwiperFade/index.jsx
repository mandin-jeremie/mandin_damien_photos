import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

import swiper01 from '../../assets/images/swiper-01.jpg'
import swiper02 from '../../assets/images/swiper-02.jpg'
import swiper03 from '../../assets/images/swiper-03.jpg'
import swiper04 from '../../assets/images/swiper-04.jpg'

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";


import './swiperfade.scss'
const SwiperFade = () => {
  return (
    <div className='containerSwiperFade'>
      <Swiper
        autoplay={{
          delay: 10000,
        }}
        spaceBetween={0}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="swiperImg" src={swiper01} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperImg" src={swiper02} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperImg" src={swiper03} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperImg" src={swiper04} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperFade;