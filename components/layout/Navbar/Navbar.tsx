/** @format */

import useGetUserProfile from "@/util/hooks/user/showProfile";
import Image from "next/image";
import React from "react";
import MenuSlider from "../MenuSlider/MenuSlider";

function Navbar() {
  const getInfo = useGetUserProfile("lounge");

  const hexToRgba = (hex: string, opacity: number) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  if (!getInfo?.data?.profile) {
    return <div>Loading...</div>;
  }

  const { firstColor, secondColor } = getInfo.data.profile;
  const secondColorWithOpacity = hexToRgba(secondColor, 0);

  // Ensure colors are defined before using them
  if (!firstColor || !secondColor) {
    return <div>Loading...</div>;
  }

  // Avoid issues with undefined colors in the class name
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, ${firstColor}, ${secondColorWithOpacity})`,
    height: "120px",
  };

  const colorStyle = {
    color: firstColor,
  };

  const backStyle = {
    backgroundColor: firstColor,
  };

  return (
    <div style={backgroundStyle}>
      <div className=" w-full justify-center flex flex-col gap-y-10  items-center ">
        <div className=" flex items-center h-10 w-full relative justify-between gap-10 mt-10">
          <div className=" border-t  border-2 rounded-xl w-full border-white relative flex justify-center items-center"></div>
          <div className=" flex flex-col ">
            <Image
              alt="logo"
              className=" rounded-full mt-6"
              width={80}
              height={80}
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${getInfo?.data?.profile?.imageURL}`}
            />
            <p className=" text-lg s " style={colorStyle}>
              {getInfo?.data?.profile?.shopName}
            </p>
          </div>
          <div className=" border-t font-extralight   border-2 rounded-xl w-full border-white relative flex justify-center items-center"></div>
        </div>

        <div
          style={backStyle}
          className=" w-full h-full   border-gray-400 rounded-lg "
        >
          <MenuSlider
            data={getInfo?.data?.profile}
            focused={(e: any) => console.log(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
