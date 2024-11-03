/** @format */
import {
  Swiper,
  SwiperSlide,
  Swiper as SwiperType,
  SwiperRef,
} from "swiper/react"; // Import SwiperType and SwiperRef
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useEffect, useRef, useState } from "react";
import useGetCategoryList from "@/util/hooks/Category/GetCategory";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  const path = usePathname();
  const fullString = path;
  const extractedString = fullString?.replace("/", "");
  const getCategory = useGetCategoryList(extractedString || "");
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isInitialSet, setIsInitialSet] = useState<boolean>(false);

  // Define the swiperRef with the correct type
  const swiperRef = useRef<SwiperRef | null>(null);

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
        swiperRef.current?.swiper.slideTo(foundCategory.index); // Slide to the found category

        setIsInitialSet(true); // Ensure this only runs once
      }
    }
  }, [initialValue, getCategory, isInitialSet]);

  // Add focused call in onActiveIndexChange to set the focused category when sliding
  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
    const selectedCategory =
      getCategory?.data?.allCategory?.categories[swiper.activeIndex];
    if (selectedCategory) {
      focused(selectedCategory[0].name); // Trigger the focused function when slide changes
    }
  };

  return (
    <div className="">
      {getCategory?.data?.allCategory?.categories ? (
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          className="rounded-3xl"
          // slideToClickedSlide={true}
          ref={swiperRef}
          // slidesPerView={getCategory?.data?.allCategory?.categories.length}
          slideActiveClass="swiper-slide-active"
          centeredSlides={
            getCategory?.data?.allCategory?.categories.length >= 4
              ? true
              : false
          }
          initialSlide={activeSlide}
          onActiveIndexChange={handleSlideChange}
          grabCursor={true}
          modules={[Pagination]}
          slideToClickedSlide={true}
        >
          {getCategory?.data?.allCategory?.categories.map(
            (item: any, index: number) => {
              return (
                <SwiperSlide
                  // onClick={() => focused(item[0].name)}
                  style={{
                    height: "40px",
                    // backgroundColor: lightColor,
                  }}
                  key={index}
                  className={`text-black my-3 bg-white border border-black  rounded-3xl
                   shadow-lg min-w-[70px] cursor-pointer duration-200 text-lg text-center`}
                >
                  <div className={`flex justify-center items-center`}>
                    <Image
                      alt="logo"
                      className="select-none"
                      width={30}
                      height={40}
                      src={`/${item[0].icon}`}
                    />
                    {/* {activeSlide === index ? ( */}
                    <p className="text-xs text-black select-none">
                      {item[0].name}
                    </p>
                    {/* ) : null} */}
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export default MenuSlider;
