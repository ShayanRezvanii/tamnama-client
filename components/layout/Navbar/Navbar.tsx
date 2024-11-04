/** @format */
"use client";

import useGetUserProfile from "@/util/hooks/user/showProfile";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MenuSlider from "../MenuSlider/MenuSlider";
import { HambergerMenu } from "iconsax-react";
import ProductCard from "../ProductCard/ProductCard";
import { getProductByCategory } from "@/util/api/addProduct/getProductByCategory";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
interface Product {
  _id: number;
  title: string;
  description: string;
  category: string;
  shopName: string;
  imageURL: string;
}

interface Profile {
  firstColor: string;
  secondColor: string;
  imageURL: string;
  shopName: string;
}

interface navbarProps {
  selectedCat?: string;
}

function Navbar({ selectedCat }: navbarProps) {
  const path = usePathname();
  const fullString = path;
  const extractedString = fullString?.replace("/", "");
  const getInfo = useGetUserProfile(extractedString || "");
  const router = useRouter();
  const [foundedProducts, setFoundedProducts] = useState<{
    foundedProduct: Product[];
  }>({ foundedProduct: [] });

  const getProductByCategoryMutation = useMutation({
    mutationFn: getProductByCategory,
    onSuccess: (data: any, variables, context) => {
      setFoundedProducts(data);
    },
    onError: (error, variables, context) => {
      console.error(error);
    },
  });

  useEffect(() => {
    const fullString = path;
    const extractedString = fullString?.replace("/", "");
    if (selectedCat !== undefined && extractedString) {
      getProductByCategoryMutation.mutate({
        shopName: extractedString,
        category: selectedCat,
      });
    }
  }, [selectedCat]);

  const hexToRgba = (
    hex: string | undefined,
    opacity: number,
    tone: number = 1
  ): string => {
    if (!hex || !hex.startsWith("#") || hex.length !== 7) {
      // Return a default value or handle the invalid hex case
      return `rgba(0, 0, 0, ${opacity})`; // Default black color with specified opacity
    }

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

  if (!getInfo?.data?.profile) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <svg className="h-14 w-14 animate-spin" viewBox="3 3 18 18">
          <path
            className="fill-blue-400/20"
            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
          ></path>
          <path
            className="fill-blue-400"
            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
          ></path>
        </svg>
      </div>
    );
  }

  const profile: Profile = getInfo.data.profile;
  const { firstColor, secondColor } = profile;
  const secondColorWithOpacity = hexToRgba(secondColor, 0, 1.5);
  const firstColorWithOpacity = hexToRgba(firstColor, 1, 0.8);
  const firstColorLight = hexToRgba(firstColor, 0.5, 1.5);

  if (!firstColor) {
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

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, ${firstColor}, ${secondColorWithOpacity})`,
    height: "120px",
  };

  const colorStyle = {
    color: firstColor,
  };

  const backStyle = {
    backgroundColor: firstColorLight,
    border: "1px solid",
    borderColor: firstColor,
  };

  console.log(foundedProducts.foundedProduct);

  return (
    <div style={backgroundStyle}>
      <div className="w-full justify-center flex flex-col gap-y-10 items-center px-6">
        <div className="flex items-center h-10 w-full relative justify-between gap-10 mt-10">
          <div className="border-t border-2 rounded-xl w-full border-white relative flex justify-center items-center"></div>
          <div className="flex flex-col w-full items-center gap-y-2">
            <div
              className=" cursor-pointer"
              onClick={() => window.location.reload()}
            >
              <Image
                alt="logo"
                className="rounded-full mt-6"
                width={80}
                unoptimized
                height={80}
                src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}/${profile.imageURL}`}
              />
            </div>
            <p className="text-xs tracking-[0.3em]" style={colorStyle}>
              {profile.shopName}
            </p>
          </div>
          <div className="border-t font-extralight border-2 rounded-xl w-full border-white relative flex justify-center items-center"></div>
        </div>

        <div
          style={backStyle}
          className={`w-full h-full mt-4 shadow-lg shadow-[${firstColor}] sticky backdrop-blur-md overflow-hidden   z-30 top-2 border flex  rounded-3xl justify-end items-center`}
        >
          <div className=" w-full px-2 rounded-3xl ">
            {profile ? (
              <MenuSlider
                data={profile}
                darkColor={firstColorWithOpacity}
                lightColor={firstColorLight}
                initialValue={selectedCat}
                focused={(e: any) => {
                  getProductByCategoryMutation.mutate({
                    shopName: extractedString ? extractedString : "",
                    category: e,
                  });
                }}
              />
            ) : null}
          </div>

          <div
            onClick={() => window.location.reload()}
            className="w-full max-w-fit p-3 flex justify-center  cursor-pointer items-center  "
          >
            <HambergerMenu size={24} color={firstColor} />
          </div>
        </div>

        {foundedProducts.foundedProduct?.length > 0 && (
          <div
            className="w-full flex-col flex gap-y-4 h-96
              overflow-y-scroll rounded-b-lg  rounded-t-lg  "
          >
            {foundedProducts?.foundedProduct.map((item: Product) => (
              <ProductCard
                key={item._id}
                data={item}
                darkColor={firstColor}
                lightColor={firstColorLight}
              />
            ))}
          </div>
        )}
      </div>
      {/* <div className="absolute bg-gradient-to-t from-white via-white/50 to-gray-50/5 bottom-0 h-12 w-full z-50"></div> */}
    </div>
  );
}

export default Navbar;
