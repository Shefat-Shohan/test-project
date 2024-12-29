"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";

export default function Slider6() {
  return (
    <div className="h-screen p-4 md:p-16 bg-slideImage6 bg-cover flex flex-col justify-between relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#251D19] opacity-30 z-10"></div>

      {/* Logo at the top */}
      <div className="z-20">
        <Link href="/" className="flex gap-4 items-center ">
          <Image src={Logo} alt="logo" />
          <span className="font-tiltWarpFont text-[18px] md:text-[35px] leading-[44px] text-white drop-shadow-xl">
            GMK Dakonderhoud
          </span>
        </Link>
      </div>

      {/* Content at the bottom */}
      <div className=" z-20 flex flex-col lg:flex-row justify-between md:items-end">
        <div className="">
          <h2 className="font-tiltWarpFont text-[26px] leading-[30px] md:text-[45px] md:leading-[60px] lg:text-[64px] lg:leading-[81px] text-white text-right lg:text-left">
            Wij bieden een <br className="lg:block" /> duurzame en passende
            <br /> oplossing voor uw klus.
          </h2>
        </div>
        <div className="w-full md:max-w-3xl flex flex-col items-end">
          <p className="paragraph text-white pt-2 text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <button className="bg-[#1677FF] px-20 py-4 rounded-full text-white mt-4 md:mt-8"></button>
        </div>
      </div>
    </div>
  );
}
