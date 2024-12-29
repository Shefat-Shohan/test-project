import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import SliderImage from "@/public/slider-8.jpg";
import SliderImage2 from "@/public/slider-2.jpg";
import SliderImage3 from "@/public/slider-3.jpg";
import React from "react";
export default function ImageCarousel() {
  return (
    <div className="container">
      <div className="box flex items-center justify-center mx-auto">
        <span style={{ "--i": 1 } as React.CSSProperties}>
          <img src="/slider-3.jpg" alt="gallery" />
        </span>
        <span style={{ "--i": 2 } as React.CSSProperties}>
          <img src="/slider-2.jpg" alt="gallery" />
        </span>
        <span style={{ "--i": 3 } as React.CSSProperties}>
          <img src="/slider-8.jpg" alt="gallery" />
        </span>
        <span style={{ "--i": 4 } as React.CSSProperties}>
          <img src="/slider-8.jpg" alt="gallery" />
        </span>
        <span style={{ "--i": 5 } as React.CSSProperties}>
          <img src="/slider-8.jpg" alt="gallery" />
        </span>
        <span style={{ "--i": 6 } as React.CSSProperties}>
          <img src="/slider-8.jpg" alt="gallery" />
        </span>
        <span style={{ "--i": 7 } as React.CSSProperties}>
          <img src="/slider-8.jpg" alt="gallery" />
        </span>
        <span style={{ "--i": 8 } as React.CSSProperties}>
          <img src="/slider-8.jpg" alt="gallery" />
        </span>
        <span style={{ "--i": 9 } as React.CSSProperties}>
          <img src="/slider-8.jpg" alt="gallery" />
        </span>
        <span style={{ "--i": 10 } as React.CSSProperties}>
          <img src="/slider-8.jpg" alt="gallery" />
        </span>
      </div>
    </div>
  );
}
