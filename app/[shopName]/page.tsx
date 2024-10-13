/** @format */
"use client";
import Navbar from "@/components/layout/Navbar/Navbar";
import useGetCategoryList from "@/util/hooks/Category/GetCategory";
import useGetUserProfile from "@/util/hooks/user/showProfile";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

import "@/public/category-icon/latte.png";
import ProductCard from "@/components/layout/ProductCard/ProductCard";
import Categories from "@/components/pages/categories";
import Products from "@/components/pages/products";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
function Page() {
  const Product = dynamic(() => import("../../components/pages/products"), {
    loading: () => <p>Loading...</p>,
  });

  const [selectedCat, setSelectedCat] = useState();
  const path = usePathname();
  const fullString = path;
  const extractedString = fullString?.replace("/", "");
  const getInfo = useGetUserProfile(extractedString || "");

  return (
    <div className="flex-col justify-between h-dvh overflow-y-hidden flex  ">
      {!getInfo?.data?.profile ? (
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
      ) : (
        <>
          <Product selectedCategory={selectedCat} />
          <Categories selectedCat={(e: any) => setSelectedCat(e)} />
        </>
      )}
    </div>
  );
}

export default Page;
