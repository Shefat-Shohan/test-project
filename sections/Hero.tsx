"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider2 from "@/components/Slider2";
import Slider3 from "@/components/Slider3";
import Slider4 from "@/components/Slider4";
import Slider6 from "@/components/Slider6";
import Slider7 from "@/components/Slider7";
import Slider8 from "@/components/Slider8";
import Slider5 from "@/components/Slider5";
import Slider1 from "@/components/Slider1";

export default function Hero() {
  return (
    <div className="min-h-screen mb-20">
      <Swiper
        spaceBetween={0}
        loop={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Slider1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider3 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider4 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider5 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider6 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider7 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider8 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
