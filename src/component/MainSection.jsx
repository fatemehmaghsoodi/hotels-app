import React from 'react'
import shape from '../assets/images/shape.svg'
import slider from '../assets/images/1.jpg'
import slider2 from '../assets/images/2.jpg'
import slider3 from '../assets/images/3.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay} from "swiper";
import "swiper/css";
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'; 
function MainSection() {

  return (
      <>
      <div className="mainSection-cover"></div>
      <div className="mainSection-img">
        <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide data-swiper-autoplay="5000"><img className="slideImg" src={slider} alt="" />	</SwiperSlide>
        <SwiperSlide data-swiper-autoplay="5000"><img className="slideImg" src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="slideImg" src={slider3} alt="" /></SwiperSlide>
        
      </Swiper>
      <div className="shape">
      <img src={shape} alt="" />
      </div>
    
    </div>
    </>
  )
}

export default MainSection
