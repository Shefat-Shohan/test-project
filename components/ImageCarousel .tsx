import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import React from "react";
import { gallery } from "@/data";
export default function ImageCarousel() {
  return (
    <div className="container">
      <div className="box flex items-center justify-center mx-auto">
        {gallery.map((gallery) => (
          <span
            key={gallery.id}
            style={{ "--i": gallery.id } as React.CSSProperties}
          >
            <Image src={gallery.image} alt={`${gallery.id}`} />
          </span>
        ))}
      </div>
    </div>
  );
}
