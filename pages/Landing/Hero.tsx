/** @format */

import Image from "next/image";
import React from "react";
import HeroIcon from "@/public/LandingIcons/HeroIcon.png";
import { ArrowDown2 } from "iconsax-react";
function Hero() {
  return (
    <div className=" w-full flex justify-between mt-24 h-screen">
      <div className=" w-full flex flex-col justify-between">
        <div className=" flex justify-between w-full">
          <div className="  flex-col flex items-center">
            <h1 className=" text-white text-[110px] ">طعم نما</h1>
            <h1 className=" text-white text-2xl ">
              منوی دیجیتال و دسترسی آسان
            </h1>
          </div>

          <div className=" bg-white rounded-tr-[120px] rounded-tl-[240px] rounded-br-[110px] rounded-bl-3xl ">
            <Image src={HeroIcon} alt="HeroIcon" />
          </div>
        </div>

        <div className=" flex-col justify-center w-full items-center mb-52 flex">
          <ArrowDown2 className=" text-white animate-bounce" />
          <p className="text-white">منوی طعم نما</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
