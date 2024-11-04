/** @format */
"use client";
import useGetCategoryList from "@/util/hooks/Category/GetCategory";
import useGetUserProfile from "@/util/hooks/user/showProfile";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowCircleDown,
  ArrowCircleDown2,
  ArrowDown,
  ArrowDown2,
  ArrowDown3,
  ArrowUp2,
  ArrowUp3,
} from "iconsax-react";
import { usePathname } from "next/navigation";

interface categoriesProps {
  selectedCat: (e: string) => void;
}

function Categories({ selectedCat }: categoriesProps) {
  const path = usePathname();
  const fullString = path;
  const extractedString = fullString?.replace("/", "");

  const getInfo = useGetUserProfile(extractedString || "");
  const getCategory = useGetCategoryList(extractedString || "");
  const [visible, setVisible] = useState(false);
  const [height, setHeight] = useState(90);
  const isDraggingRef = useRef(false);
  const initialTouchYRef = useRef(0);
  const grabHandleRef = useRef(null);

  const [firstDarkColor, sertFirstDarkColor] = useState<string>();
  const [close, setClose] = useState(true);
  const { firstColor, secondColor } = getInfo?.data?.profile || {};

  const hexToRgba = (hex: string, opacity: number, tone: number = 1) => {
    const bigint = parseInt(hex.slice(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    // Adjust the tone
    r = Math.min(255, Math.max(0, Math.floor(r * tone)));
    g = Math.min(255, Math.max(0, Math.floor(g * tone)));
    b = Math.min(255, Math.max(0, Math.floor(b * tone)));

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  useEffect(() => {
    if (firstColor) {
      const firstColorWithOpacity = hexToRgba(firstColor, 1, 0.8);
      sertFirstDarkColor(firstColorWithOpacity);
    }
  });

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleTouchStart = (e: any) => {
    isDraggingRef.current = true;
    initialTouchYRef.current = e.touches[0].clientY;
  };

  if (!getInfo?.data?.profile) {
    return (
      <div>
        <svg className="h-6 w-6 animate-spin" viewBox="3 3 18 18">
          <path
            className="fill-red-400/20"
            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
          ></path>
          <path
            className="fill-red-400"
            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
          ></path>
        </svg>
      </div>
    );
  }

  const backColorStyle = {
    backgroundColor: firstDarkColor,
  };

  const backStyle = {
    backgroundColor: firstColor,
    opacity: 1,
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className={`w-full ${
        visible ? "hidden" : ""
      } min-h-screen overflow-y-hidden  flex flex-col justify-between z-40 bg-white absolute  bg-cover bg-center `}
    >
      <div className="w-full flex flex-col justify-center items-center h-40 ">
        <div
          style={backColorStyle}
          className="h-fit w-fit mt-52 mb-10 min-w-[183px] rounded-tr-md rounded-tl-md  rounded-bl-md rounded-br-[120px] pt-6 pb-20 px-8 flex flex-col justify-start items-center"
        >
          <Image
            alt="logo"
            className="rounded-full"
            width={80}
            height={80}
            loading="lazy"
            unoptimized
            src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}/${getInfo.data.profile.imageURL}`}
          />
          <p className="text-white mt-2 tracking-widest">
            {getInfo.data.profile.shopName}
          </p>
        </div>

        <div className=" flex flex-col justify-end items-end">
          <div className=" flex justify-center items-center  gap-2">
            <p className="text-black text-xs tracking-widest ">
              {getInfo.data.profile.phone}
            </p>
            <p
              className=" text-xs tracking-widest"
              style={{ color: firstDarkColor }}
            >
              :Tel
            </p>
          </div>

          <div className=" flex justify-center items-center  gap-2">
            <p className="text-black tracking-widest text-xs ">
              {getInfo.data.profile.workTime}
            </p>
            <p
              style={{ color: firstDarkColor }}
              className=" text-xs tracking-widest"
            >
              :Work
            </p>
          </div>

          <div className=" flex justify-center items-center  gap-2">
            <p className="text-black tracking-widest text-xs ">
              {getInfo.data.profile.address}
            </p>
            <p
              style={{ color: firstDarkColor }}
              className=" text-xs tracking-widest"
            >
              :address
            </p>
          </div>
        </div>
      </div>

      <div
        onClick={() => setClose(false)}
        className={` absolute w-full  ${
          !close ? "hidden" : null
        } bottom-40 flex-col flex items-center`}
      >
        <p style={{ color: firstDarkColor }}>menu</p>
        <ArrowDown2
          variant="Bold"
          size={24}
          style={{ color: firstDarkColor }}
          className=" animate-bounce"
        />
      </div>

      <AnimatePresence>
        <motion.div
          style={{ ...backStyle }}
          initial={{ opacity: 0, translateY: 30 }}
          animate={{
            opacity: 1,
            translateY: close ? -0 : 0,
            height: close ? 140 : 540,
          }}
          exit={{ opacity: 0, translateY: 30 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className={`w-full absolute bottom-0 shadow-2xl shadow-black
       duration-200  rounded-tr-2xl min-h-[90px] z-40 flex flex-col justify-start items-center  rounded-tl-2xl`}
        >
          <div
            className=" mt-2 flex justify-center h-fit"
            // ref={grabHandleRef}
            onClick={() => {
              setClose(!close);
              // setHeight(540);
              // if (height === 540 && close) {
              //   setHeight(90);
              // }
            }}
            // className="border-2 mt-4 w-8 cursor-grab rounded-2xl h-1 border-white"
          >
            <ArrowDown2
              size={32}
              className={` duration-200  ${
                !close ? " rotate-0 " : "-rotate-180"
              }   cursor-pointer text-white`}
            />
          </div>

          {!close ? (
            <div
              // variants={container}
              // initial="hidden"
              // animate="visible"
              className="container grid overflow-y-scroll gap-4 max-h-96 w-full  grid-cols-3  px-10 items-start mt-6 justify-center "
            >
              {getCategory.data?.allCategory?.categories.map(
                (itemData: any, index: number) => {
                  return (
                    <>
                      <div
                        onClick={() => {
                          setVisible(true);
                          selectedCat(itemData[0].name);
                        }}
                        key={index}
                        // style={backColorStyle}
                        // variants={item}
                        className={` item text-black bg-white  cursor-pointer text-xs text-center gap-1 backdrop-blur-lg duration-200  rounded-lg shadow-md  w-full max-w-[90px] h-[90px] max-h-[90px] flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt="logo"
                          className="rounded-full select-none"
                          width={40}
                          height={40}
                          src={`/${itemData[0].icon}`}
                        />
                        {itemData[0].name}
                      </div>
                    </>
                  );
                }
              )}
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Categories;
