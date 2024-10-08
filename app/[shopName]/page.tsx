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
function Page() {
  const [selectedCat, setSelectedCat] = useState();

  return (
    <div className="flex-col justify-between flex min-h-screen ">
      <Products selectedCategory={selectedCat} />
      <Categories selectedCat={(e: any) => setSelectedCat(e)} />
    </div>
  );
}

export default Page;
