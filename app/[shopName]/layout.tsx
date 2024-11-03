/** @format */
"use client";
import { Mobile } from "iconsax-react";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
        <div className=" w-full h-full  overflow-hidden fixed bg-cover bg-center    bg-white   ">

      <div className="md:hidden">{children}</div>
      <div className=" min-h-screen w-full  hidden  md:flex flex-col gap-3 justify-center items-center">
        <Mobile size={40} className=" text-gray-600 animate-bounce" />
        <p className=" text-gray-600 text-2xl">با نمایشگر موبایل وارد شوید</p>
      </div>
    </div>
  );
}

export default Layout;
