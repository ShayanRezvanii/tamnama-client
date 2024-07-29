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
}
function MenuSlider({ focused, data }: sliderProps) {
  const getCategory = useGetCategoryList("lounge");
  const [activeSlide, setActiveSlide] = useState<number>(0);
  useEffect(() => {
    focused(activeSlide);
  }, [activeSlide, focused]);
  return (
    <Swiper
      //   effect={"coverflow"}
      spaceBetween={20}
      slideToClickedSlide={true}
      slidesPerView={2.5}
      centeredSlides
      style={{
        backgroundColor: data?.firstColor,
        borderRadius: "10px",
      }}
      //   breakpoints={{
      //     768: {
      //       slidesPerView: 4,
      //       spaceBetween: 20,
      //     },
      //     1024: {
      //       slidesPerView: 2.3,
      //       spaceBetween: 90,
      //     },
      //   }}

      onActiveIndexChange={(e) => setActiveSlide(e.activeIndex)}
      //   initialSlide={4}
      grabCursor={true}
      className=" h-[68px] "
      modules={[EffectCoverflow, Pagination]}
    >
      {getCategory?.data?.allCategory?.categories.map(
        (item: any, index: number) => {
          return (
            <SwiperSlide
              style={{
                width: "10px",
                height: "60px",
              }} // Set your desired width and height here
              key={index}
              className={`text-black w-fit backdrop-blur-lg bg-white/20 hover:bg-white/40 duration-200 text-lg  text-center rounded-lg `}
            >
              <div className=" flex flex-col justify-center items-center">
                <Image
                  alt="logo"
                  className="rounded-full select-none"
                  width={30}
                  height={40}
                  src={`/${item[0].icon}`}
                />
                <p className=" text-xs text-white mt-2">{item[0].name}</p>
              </div>
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
}

export default MenuSlider;
