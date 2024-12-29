"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { navBar } from "@/data";
import Link from "next/link";
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/16/solid";

export default function Slider5() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };
  return (
    <div className="h-screen p-4 md:p-16 bg-slideImage5 bg-cover flex flex-col relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#251D19] opacity-30 z-10"></div>

      {/* Logo at the top */}
      <div className="flex justify-between items-center z-20">
        {/* Logo and Title */}
        <div className="gap-4">
          <Link href="/" className="flex gap-4 items-center ">
            <Image src={Logo} alt="logo" />
            <span className="font-tiltWarpFont text-[18px] md:text-[35px] leading-[44px] text-white drop-shadow-xl">
              GMK Dakonderhoud
            </span>
          </Link>
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white cursor-pointer">
            {isMenuOpen ? (
              <XMarkIcon className="size-8 md:size-12 text-white" />
            ) : (
              <Bars3BottomRightIcon className="size-8 md:size-12 text-white" />
            )}
          </button>
        </div>

        {/* Navigation Links for Large Screens */}
        <nav
          className={`lg:block ${
            isMenuOpen ? "block" : "hidden"
          } backdrop-blur-lg absolute lg:relative lg:top-0 lg:h-auto lg:bg-transparent lg:border-none left-0 top-24 md:top-40 h-[300px] lg:w-auto w-full border-b border-gray-100/70`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 p-6 lg:p-0">
            {navBar.map((nav) => (
              <li key={nav.id} className="paragraph text-white">
                <Link href={nav.path}>{nav.menu}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Contact Info */}
          <p className="paragraph text-white lg:hidden px-6">
            Spoed? Bel 020 1234567 of klik hier | Chat
          </p>
        </nav>

        {/* Contact for large screens */}
        <p className="paragraph text-white hidden lg:block">
          Spoed? Bel 020 1234567 of klik hier | Chat
        </p>
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center h-full lg:gap-20 gap-10">
        {/* Left Side */}
        <div className="flex-2  lg:text-left mt-32 md:mt-40 lg:mt-0">
          <h2 className="font-tiltWarpFont text-[26px] leading-[30px] md:text-[45px] md:leading-[60px] lg:text-[64px] lg:leading-[81px] text-white">
            Wij bieden een <br className="lg:block" /> duurzame en passende
            <br /> oplossing voor uw klus.
          </h2>
        </div>

        {/* Right Side (Form Section) */}
        <div className="flex-1">
          <h3 className="font-tiltWarp text-lg sm:text-xl md:text-4xl text-white mb-2">
            Uw adres
          </h3>
          <p className="paragraph text-white mb-6">
            Via uw adres kunnen we openbare en vrij verkrijgbare informatie,
            bijv. kadaster-gegevens en satelliet beelden, gebruiken om een
            optimaal beeld te vormen van uw dak.
          </p>
          <div className="flex flex-col">
            <input
              type="text"
              id="address"
              className="w-full p-3 text-sm sm:text-md font-actorFont border rounded-md focus:ring focus:ring-[#251D19] focus:outline-none mb-4"
              placeholder="Singel 63 1012VD Amsterdam"
              required
            />
            <button className="bg-[#1677FF] px-20 py-4 rounded-full text-white mt-4 md:mt-8 transition-all self-end"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
