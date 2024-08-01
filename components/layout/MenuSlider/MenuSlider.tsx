/** @format */
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useEffect, useRef, useState } from "react";
import useGetCategoryList from "@/util/hooks/Category/GetCategory";
import Image from "next/image";

interface sliderProps {
  focused: (value: string) => void;
  data: any;
  darkColor: string;
  lightColor: string;
  initialValue?: string;
}

function MenuSlider({
  focused,
  data,
  darkColor,
  lightColor,
  initialValue,
}: sliderProps) {
  const getCategory = useGetCategoryList("lounge");
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isInitialSet, setIsInitialSet] = useState<boolean>(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!isInitialSet && getCategory?.data?.allCategory?.categories) {
      const categoriesWithIndex = getCategory.data.allCategory.categories.map(
        (item: any, index: number) => ({ item, index })
      );

      const foundCategory = categoriesWithIndex.find(
        ({ item }: any) => item[0].name === initialValue
      );

      if (foundCategory) {
        setActiveSlide(foundCategory.index);
        swiperRef?.current?.swiper.slideTo(foundCategory.index);

        setIsInitialSet(true); // Ensure this only runs once
      }
    }
  }, [initialValue, getCategory, isInitialSet]);

  // useEffect(() => {
  //   focused(getCategory?.data?.allCategory?.categories[activeSlide]?.[0]?.name);
  // }, [activeSlide, focused, getCategory]);

  return (
    <>
      {getCategory?.data?.allCategory?.categories ? (
        <Swiper
          spaceBetween={20}
          slideToClickedSlide={true}
          ref={swiperRef}
          slidesPerView={getCategory?.data?.allCategory?.categories.length}
          slideActiveClass="swiper-slide-active"
          centeredSlides
          style={{
            borderRadius: "10px",
          }}
          initialSlide={activeSlide}
          onActiveIndexChange={(e) => setActiveSlide(e.activeIndex)}
          grabCursor={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {getCategory?.data?.allCategory?.categories.map(
            (item: any, index: number) => {
              return (
                <SwiperSlide
                  onClick={() => focused(item[0].name)}
                  style={{
                    height: "40px",
                    backgroundColor: lightColor,
                  }}
                  key={index}
                  className={`text-black my-3 ${
                    activeSlide === index ? "rounded-md" : "rounded-full"
                  } shadow-lg w-[70px] cursor-pointer duration-200 text-lg text-center`}
                >
                  <div className={`flex justify-center items-center`}>
                    <Image
                      alt="logo"
                      className="select-none"
                      width={30}
                      height={40}
                      src={`/${item[0].icon}`}
                    />
                    {activeSlide === index ? (
                      <p className="text-sm text-white">{item[0].name}</p>
                    ) : null}
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default MenuSlider;
