import React, { useRef, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai"
import { Link } from "react-scroll";
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
const SwiperFade = ({
  Desktop,
  Tablet,
  Mobile
}) => {
  return (
    <div className='containerSwiperFade'>
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        spaceBetween={0}
        effect={"fade"}
        navigation={false}

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
        <Desktop>
          <Link smooth={true}
            offset={0}
            duration={1000}
            to="home"
          ><AiOutlineArrowDown className="arrowDown" id="home" />
          </Link>

        </Desktop>
      </Swiper>
    </div>
  );
}

export default SwiperFade;