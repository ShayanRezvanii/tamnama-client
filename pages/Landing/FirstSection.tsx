/** @format */

import Image from "next/image";
import React from "react";
import dashlap from "@/public/LandingIcons/dashlap.png";
import { ArrowDown2 } from "iconsax-react";
function FirstSection() {
  return (
    <div id="FirstSection" className=" w-full flex  justify-between  h-fit">
      <div className=" w-full flex flex-col justify-between">
        <div className=" flex justify-between flex-col xl:flex-row w-full">
          <div className="  flex-col flex items-center w-full justify-center xl:items-start gap-y-4 relative">
            <h1 className=" text-white text-[80px] text-center  lg:text-[110px] z-20 ">
              امکانات
            </h1>
            <div className="bg-gradient-to-l rounded-tr-[120px]  rounded-bl-[120px] from-[#FF6000] to-white/30 absolute top-10 xl:top-52 xl:left-10 w-full  rotate-[-190deg] h-10 z-10"></div>
            <ul className=" text-white list-disc px-4 ">
              <li className=" text-white font-semibold text-xl">
                امکان اولویت بندی دسته بندی ها
              </li>
              <li className=" text-white font-semibold text-xl">
                تغییر رنگ پوسته منو
              </li>
              <li className=" text-white font-semibold text-xl">
                ثبت اطلاعات کافه یا رستوران
              </li>
            </ul>
          </div>

          <div className="  rounded-tr-[120px] rounded-tl-[240px] rounded-br-[110px] rounded-bl-3xl ">
            <Image src={dashlap} alt="HeroIcon" />
          </div>

          <div className=" hidden xl:flex  flex-col gap-4 mt-32">
            <div className=" w-20 rounded-2xl h-20 bg-[#FF6000]"></div>
            <div className=" w-20 rounded-2xl h-20 bg-[#FFE6C7]"></div>
            <div className=" w-20 rounded-2xl h-20 bg-[#FFA559]"></div>
          </div>
        </div>

        <div className=" flex-col justify-center w-full items-center mt-32 flex">
          {/* <ArrowDown2 className=" text-white animate-bounce" />
          <p className="text-white">منوی طعم نما</p> */}
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
