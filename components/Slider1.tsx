"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";
import TENYEARCELEBRATION from "@/public/ten-year-celebration.png";
import TOPPRO from "@/public/top-pro.png";
import GOOGLE from "@/public/google.png";
import Comment from "@/public/comment.png";
import Card from "./Card";

export default function Slider1() {
  return (
    <div className="h-screen p-4 md:p-16 bg-slideImage1 bg-cover flex flex-col justify-between relative overflow-clip">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#251D19] opacity-30 z-10" />

      {/* Logo at the top */}
      <div className="flex gap-4 items-center z-20">
        <Image src={Logo} alt="logo" />
        <span className="font-tiltWarpFont text-[18px] md:text-[35px] leading-[44px] text-white drop-shadow-xl">
          GMK Dakonderhoud
        </span>
      </div>
      {/* grid block */}

      <div className="z-20 pt-10">
        <div className="flex justify-between lg:mr-[430px]">
          <div className="flex flex-col items-end flex-1">
            <Card />
            <div className="w-[107px] h-[12px] bg-white mt-4" />
          </div>
          <div className="hidden lg:flex flex-col items-end flex-1">
            <Card />
            <div className="w-[107px] h-[12px] bg-white mt-4" />
          </div>
        </div>
        {/* Center border bottom */}
        <hr className="absolute left-0 right-0 border-t border-white w-full" />
        <div className="flex justify-between">
          <div className="flex flex-col lg:items-end">
            <div className="w-[107px] h-[12px] bg-white mb-4" />
            <Card />
          </div>
          <div className="hidden lg:flex flex-col items-end">
            <div className="w-[107px] h-[12px] bg-white mb-4 flex-2" />
            <Card />
          </div>
          <div className="hidden lg:flex flex-col items-end">
            <div className="w-[107px] h-[12px] bg-white mb-4" />
            <Card />
          </div>
        </div>
      </div>

      {/* images */}
      <div className=" z-20 flex flex-col lg:flex-row lg:justify-between md:items-center">
        {/* logos */}
        <div className="py-10 lg:py-0 lg:pt-8 flex items-center gap-8 mb-32 lg:mb-0">
          <Image
            src={TENYEARCELEBRATION}
            width={186}
            alt="10 Year Celebration"
            className="object-contain"
          />
          <Image
            src={TOPPRO}
            width={59}
            alt="Top Pro Badge"
            className="object-contain"
          />
          <Image
            src={GOOGLE}
            width={115}
            alt="Google Badge"
            className="object-contain"
          />
        </div>
        {/* images */}
        <div className="absolute bottom-4 lg:bottom-16 -right-20 z-20 ">
          <Image src={Comment} alt="Comment" width={463} height={157} />
        </div>
      </div>
    </div>
  );
}
