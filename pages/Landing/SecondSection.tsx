/** @format */

import { Box, Call, CallAdd, DirectInbox } from "iconsax-react";
import React from "react";

function SecondSection() {
  return (
    <div id="secondSection" className=" w-full flex justify-between  h-fit">
      <div className=" w-full flex flex-col justify-between mb-32">
        <div className=" flex  justify-center w-full">
          <div className="  relative flex-col flex items-center w-full gap-y-4">
            <h1 className=" text-white text-[80px] lg:text-[100px]  ">
              ارتباط با ما
            </h1>

            <div className=" flex w-full gap-3 rotate-[24deg] absolute top-20  z-30 flex-col">
              <div className=" border-t border-white/30 max-w-[420px] w-full mx-auto"></div>
              <div className=" border-t border-white/30 max-w-[320px] w-full mx-auto"></div>
              <div className=" border-t border-white/30 max-w-[210px] w-full mx-auto"></div>
            </div>

            <div className=" flex flex-col w-full gap-3">
              <div className=" flex  flex-col gap-2 justify-center items-center  px-3 rounded-lg">
                <div className=" flex justify-center items-center gap-2">
                  <Call className=" text-white" size={24} />
                  <span className=" text-white text-xl">شماره تماس</span>
                </div>
                <p className=" text-white text-md tracking-widest">
                  ۰۲۱-۸۸۷۴۸۵۰۱
                </p>
              </div>

              <div className=" flex flex-col gap-2 justify-center items-center px-3 rounded-lg">
                <div className=" flex justify-center items-center gap-2">
                  <DirectInbox className=" text-white" size={24} />
                  <span className=" text-white text-xl">آدرس ایمیل</span>
                </div>
                <p className=" text-white text-md tracking-widest">
                  info@nsjsoft.ir
                </p>
              </div>

              <a
                href="tel:02188748501"
                className=" w-full flex justify-center items-center"
              >
                <button className=" bg-white hover:bg-white/80 cursor-pointer px-10 py-2 duration-200 rounded-2xl text-black">
                  تماس
                </button>
              </a>
            </div>
          </div>

          {/* <div className=" bg-white rounded-tr-[120px] rounded-tl-[240px] rounded-br-[110px] rounded-bl-3xl ">
            <Image src={HeroIcon} alt="HeroIcon" />
          </div> */}

          {/* <div className=" flex flex-col gap-4 mt-32">
            <div className=" w-20 rounded-2xl h-20 bg-[#FF6000]"></div>
            <div className=" w-20 rounded-2xl h-20 bg-[#FFE6C7]"></div>
            <div className=" w-20 rounded-2xl h-20 bg-[#FFA559]"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
