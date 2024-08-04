/** @format */
"use client";
import {
  Call,
  Designtools,
  Home,
  Home2,
  Home3,
  InfoCircle,
} from "iconsax-react";
import React from "react";
import { useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

function LandingNavbar() {
  const scrollto = () => {
    scroll.scrollTo(800);
  };
  return (
    <div className=" w-full h-14 bg-[#FF6000]/70 z-40 backdrop-blur-lg rounded-3xl border border-white/40  flex justify-between items-center p-8  sticky top-4 max-w-[1220px] mx-auto">
      <div className=" flex justify-center gap-16">
        <Link
          to="hero"
          // onClick={scrollto}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className=" flex gap-3 text-white p-2 hover:bg-[#FFE6C7]/40 hover:text-white duration-200 rounded-lg  h-full items-center"
        >
          <Home2 />
          <p className=" font-semibold">صفحه اصلی</p>
        </Link>

        <Link
          to="FirstSection"
          // onClick={scrollto}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className=" flex gap-3 p-2 text-white hover:bg-[#FFE6C7]/40 hover:text-white duration-200 rounded-lg  h-full items-center"
        >
          <Designtools />
          <p className=" font-semibold">منوی طعم نما</p>
        </Link>

        <Link
          to="secondSection"
          // onClick={scrollto}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className=" flex gap-3 p-2 text-white  hover:bg-[#FFE6C7]/40 hover:text-white duration-200 rounded-lg  h-full items-center"
        >
          <Call />
          <p className=" font-semibold">ارتباط با ما</p>
        </Link>

        <Link
          to="thirdSection"
          // onClick={scrollto}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className=" flex gap-3 p-2 text-white hover:bg-[#FFE6C7]/40 hover:text-white duration-200 rounded-lg h-full items-center"
        >
          <InfoCircle />
          <p className=" font-semibold">درباره ما</p>
        </Link>
      </div>

      <div>
        <h1 className=" text-white font-semibold">LOGO</h1>
      </div>
    </div>
  );
}

export default LandingNavbar;
