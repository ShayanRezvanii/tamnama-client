/** @format */
"use client";
import Products from "@/components/pages/products";
import React, { useState } from "react";

function page() {
  const [selectedCat, setSelectedCat] = useState();

  return (
    <div>
      <Products selectedCategory={selectedCat} />
    </div>
  );
}

export default page;
