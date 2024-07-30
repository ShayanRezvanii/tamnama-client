/** @format */
// import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import useGetCategoryList from "@/util/hooks/Category/GetCategory";
import Image from "next/image";
interface sliderProps {
  focused: (value: number) => void;
  data: any;
  darkColor: string;
  lightColor: string;
}
function MenuSlider({ focused, data, darkColor, lightColor }: sliderProps) {
  const getCategory = useGetCategoryList("lounge");
  const [activeSlide, setActiveSlide] = useState<number>(0);
  // useEffect(() => {
  //   focused(activeSlide);
  // }, [activeSlide, focused]);
  return (
    <Swiper
      spaceBetween={20}
      slideToClickedSlide={true}
      slidesPerView={3}
      slideActiveClass="swiper-slide-active"
      // centeredSlides
      centeredSlides
      style={{
        borderRadius: "10px",
        // backgroundColor: lightColor,
      }}
      onActiveIndexChange={(e) => setActiveSlide(e.activeIndex)}
      grabCursor={true}
      // className=" h-[68px] "
      modules={[EffectCoverflow, Pagination]}
    >
      {getCategory?.data?.allCategory?.categories.map(
        (item: any, index: number) => {
          return (
            <SwiperSlide
              onClick={() => focused(item[0].name)}
              style={{
                // width: "10px",
                height: "60px",
                backgroundColor: lightColor,
              }}
              key={index}
              className={`text-black  w-[70px] max-w-[140px]   cursor-pointer   duration-200 text-lg  text-center rounded-md `}
            >
              <div
                className={` flex   ${
                  activeSlide !== index ? "flex-col " : " h-[60px] gap-1 "
                }  justify-center items-center `}
              >
                <Image
                  alt="logo"
                  className="rounded-full select-none"
                  width={activeSlide !== index ? 30 : 40}
                  height={40}
                  src={`/${item[0].icon}`}
                />
                <p className=" text-sm text-white mt-2">{item[0].name}</p>
              </div>
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
}

export default MenuSlider;
