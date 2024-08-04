/** @format */

import Image from "next/image";
import React from "react";
import HeroIcon from "@/public/LandingIcons/HeroIcon.png";
import { ArrowDown2 } from "iconsax-react";
function ThirdSection() {
  return (
    <div id="thirdSection" className=" w-full flex  justify-between  h-fit">
      <div className=" w-full flex flex-col justify-between">
        <div className=" flex justify-between w-full">
          <div className="  flex-col flex items-center lg:items-start gap-y-4 relative">
            <h1 className=" text-white text-[80px] lg:text-[110px] z-20 ">
              درباره ما
            </h1>
            <div className="bg-gradient-to-l rounded-tr-[120px]  max-w-[320px]  rounded-bl-[120px] from-[#FF6000] to-white/30 absolute top-10 lg:top-20 w-full  rotate-[-190deg] h-10 z-10"></div>
            <p className=" text-white text-sm leading-5 lg:text-base text-justify">
              پلتفرم منوی دیجیتال "طعم نما" یک ابزار نوآورانه در صنعت
              رستوران‌داری است که به منظور بهبود تجربه مشتریان و کارآمدی مدیریت
              رستوران‌ها طراحی شده است. این پلتفرم امکان مشاهده و انتخاب منوهای
              رستوران را به صورت دیجیتال فراهم می‌کند، به گونه‌ای که مشتریان
              می‌توانند از طریق گوشی‌های هوشمند یا تبلت‌های خود، به منوی رستوران
              دسترسی پیدا کنند و سفارشات خود را به راحتی ثبت کنند.
            </p>
          </div>

          {/* <div className=" bg-white rounded-tr-[120px] rounded-tl-[240px] rounded-br-[110px] rounded-bl-3xl ">
            <Image src={HeroIcon} alt="HeroIcon" />
          </div> */}

          <div className=" flex flex-col gap-4 mt-32"></div>
        </div>

        <div className=" flex-col justify-center w-full items-center mt-32 flex">
          {/* <ArrowDown2 className=" text-white animate-bounce" />
          <p className="text-white">منوی طعم نما</p> */}
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
