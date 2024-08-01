/** @format */

import React from "react";
import Navbar from "../layout/Navbar/Navbar";
import ProductCard from "../layout/ProductCard/ProductCard";

interface productsProps {
  selectedCategory?: string;
}
function Products({ selectedCategory }: productsProps) {
  return (
    <div className=" flex flex-col">
      <Navbar selectedCat={selectedCategory} />
    </div>
  );
}

export default Products;
