"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Slider8() {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-5">
      <div className="relative col-span-1 lg:col-span-3 bg-slideImage8 bg-cover p-4 sm:p-6 md:p-8 lg:p-16 flex flex-col justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#251D19] opacity-30 z-10" />

        {/* Logo */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 flex gap-4 items-center z-20">
          <Image src={Logo} alt="logo" />
          <span className="font-tiltWarpFont text-[14px] sm:text-[18px] md:text-[25px] lg:text-[35px] text-white drop-shadow-xl">
            GMK Dakonderhoud
          </span>
        </div>

        {/* Content */}
        <div className="z-20 space-y-4 sm:space-y-6 mt-20 md:mt-20 hidden md:block">
          <h3 className="font-tiltWarp text-lg sm:text-xl md:text-2xl text-white">
            Uw adres
          </h3>
          <p className="paragraph text-sm sm:text-base text-white">
            Via uw adres kunnen we openbare en vrij verkrijgbare informatie,
            bijv. kadaster-gegevens en satelliet beelden, gebruiken om een
            optimaal beeld te vormen van uw dak.
          </p>
          <div>
            <input
              type="text"
              id="address"
              className="w-full mt-1 p-2 text-sm sm:text-md font-actorFont border rounded-md focus:ring focus:ring-[#251D19] focus:outline-none"
              placeholder="Singel 63 1012VD Amsterdam"
              required
            />
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2 bg-white p-4 md:p-8 lg:p-16 flex flex-col items-center justify-center">
        <h2 className="font-tiltWarpFont text-sm md:text-[32px] md:leading-[40px] lg:text-[40px] text-center pb-2">
          Vraag hieronder <br className="md:block hidden" /> een offerte op
        </h2>
        <form className="w-full max-w-sm sm:max-w-md space-y-4 sm:space-y-6 border border-[#D9D9D9] p-4 sm:p-6 rounded-lg">
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-actorFont font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 p-2 text-sm sm:text-md font-actorFont font-medium border rounded-md focus:ring focus:ring-[#251D19] focus:outline-none"
                placeholder="Value"
                required
              />
            </div>
            <div>
              <label
                htmlFor="surname"
                className="block text-sm sm:text-base font-actorFont font-medium text-gray-700"
              >
                Surname
              </label>
              <input
                type="text"
                id="surname"
                className="w-full mt-1 p-2 text-sm sm:text-md font-actorFont border rounded-md focus:ring focus:ring-[#251D19] focus:outline-none"
                placeholder="Value"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-actorFont font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 text-sm sm:text-md font-actorFont border rounded-md focus:ring focus:ring-[#251D19] focus:outline-none"
                placeholder="Value"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm sm:text-base font-actorFont font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full mt-1 p-2 text-sm sm:text-md font-actorFont border rounded-md focus:ring focus:ring-[#251D19] focus:outline-none"
                placeholder="Value"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#11162E] text-white py-2 rounded-md hover:bg-opacity-90"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
