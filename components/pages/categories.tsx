/** @format */

import useGetCategoryList from "@/util/hooks/Category/GetCategory";
import useGetUserProfile from "@/util/hooks/user/showProfile";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function Categories() {
  const getInfo = useGetUserProfile("lounge");
  const getCategory = useGetCategoryList("lounge");
  const [visible, setVisible] = useState(false);
  const [height, setHeight] = useState(200);
  const isDraggingRef = useRef(false);
  const initialTouchYRef = useRef(0);
  const grabHandleRef = useRef(null);

  const { firstColor, secondColor } = getInfo?.data?.profile || {};

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (isDraggingRef.current) {
        setHeight((prevHeight) => Math.max(0, prevHeight - e.movementY));
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleTouchMove = (e: any) => {
      if (isDraggingRef.current) {
        const touchY = e.touches[0].clientY;
        const deltaY = initialTouchYRef.current - touchY;
        setHeight((prevHeight) => Math.max(0, prevHeight + deltaY));
        initialTouchYRef.current = touchY;
      }
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleTouchStart = (e: any) => {
    isDraggingRef.current = true;
    initialTouchYRef.current = e.touches[0].clientY;
  };

  if (!getInfo?.data?.profile) {
    return <div>Loading...</div>;
  }

  const backColorStyle = {
    backgroundColor: firstColor,
  };

  const backStyle = {
    backgroundColor: firstColor,
    opacity: 1,
  };

  console.log(getCategory);

  return (
    <div
      className={`w-full ${
        visible ? "hidden" : ""
      } min-h-screen overflow-y-hidden flex flex-col justify-between z-20 absolute bg-white`}
    >
      <div className="w-full flex flex-col justify-center items-center h-40">
        <div
          style={backColorStyle}
          className="h-fit w-fit mt-52 mb-10 min-w-[183px] rounded-tr-md rounded-tl-md  rounded-bl-md rounded-br-[120px] pt-6 pb-20 px-8 flex flex-col justify-start items-center"
        >
          <Image
            alt="logo"
            className="rounded-full"
            width={80}
            height={80}
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${getInfo.data.profile.imageURL}`}
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
            <p className=" text-xs">:Tel</p>
          </div>

          <div className=" flex justify-center items-center  gap-2">
            <p className="text-black tracking-widest text-xs ">
              {getInfo.data.profile.workTime}
            </p>
            <p className=" text-xs">:Work</p>
          </div>

          <div className=" flex justify-center items-center  gap-2">
            <p className="text-black tracking-widest text-xs ">
              {getInfo.data.profile.address}
            </p>
            <p className=" text-xs">:address</p>
          </div>
        </div>
      </div>

      <div
        style={{ ...backStyle, height: `${height}px` }}
        //   onClick={() => setVisible(true)}
        className="w-full rounded-tr-2xl min-h-[200px] z-40 max-h-[600px] flex flex-col justify-start items-center rounded-tl-2xl"
      >
        <div
          ref={grabHandleRef}
          className="border-2 mt-4 w-8 cursor-grab rounded-2xl h-1 border-white"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        ></div>

        <div className=" grid  gap-4 h-full w-full rounded-2xl grid-cols-3 px-10 items-start mt-10 justify-center ">
          {getCategory.data?.allCategory?.categories.map((item: any) => {
            return (
              <div
                onClick={() => setVisible(true)}
                //   style={backColorStyle}
                className={` text-white cursor-pointer backdrop-blur-lg bg-white/10 hover:bg-white/20 duration-200  rounded-lg shadow-md  w-full max-w-[90px] h-[90px] max-h-[90px] flex flex-col justify-center items-center`}
              >
                <Image
                  alt="logo"
                  className="rounded-full select-none"
                  width={40}
                  height={40}
                  src={`/${item[0].icon}`}
                />
                {item[0].name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
