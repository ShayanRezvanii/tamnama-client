/** @format */

import Image from "next/image";
import React from "react";
import HeroIcon from "@/public/LandingIcons/HeroIcon.png";
import { ArrowDown2 } from "iconsax-react";
function Hero() {
  return (
    <div id="hero" className=" w-full  flex justify-between mt-24 h-fit">
      <div className=" w-full flex flex-col justify-between">
        <div className=" flex flex-col gap-12">
          <div className=" flex flex-col items-center  xl:flex-row justify-center gap-20 lg:gap-40 w-full">
            <div className="  flex-col flex lg:gap-14 items-center">
              <h1 className=" text-white text-3xl lg:text-[100px] ">
                طعم <span className=" text-[#FF6000] ">نما</span>
              </h1>
              <h1 className=" text-white  text-2xl ">
                منوی دیجیتال و دسترسی آسان
              </h1>
            </div>

            <div className=" bg-white relative w-[210px] h-[210px] lg:w-[390px] lg:h-[390px] rounded-tr-[120px] rounded-tl-[280px] rounded-br-[110px] rounded-bl-3xl ">
              <Image
                className=" animate-pulse"
                src={HeroIcon}
                fill
                alt="HeroIcon"
              />
            </div>
          </div>

          <div className=" w-full flex flex-col items-center gap-3 lg:gap-10 justify-center">
            {/* <div className=" border-t border-white max-w-[70px] w-full mx-auto"></div> */}

            <h1 className=" text-2xl lg:text-[40px] mt-10  font-semibold rounded-lg text-white">
              منوی دیجیتال طعم نما
            </h1>

            <p className=" text-white  bg-gradient-to-l from-[#FF6000] to-white/40 p-2 font-semibold rounded-lg text-md">
              با امکان تغییرات دلخواه و ظاهری ساده و جذاب
            </p>
          </div>
        </div>

        <div className=" flex-col justify-center w-full items-center my-24 flex">
          <ArrowDown2 size={24} className=" text-white animate-bounce" />
          <p className="text-white">منوی طعم نما</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
