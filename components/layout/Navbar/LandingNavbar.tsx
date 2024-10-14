/** @format */
"use client";
import { motion } from "framer-motion";
import {
  Add,
  Call,
  CloseSquare,
  Designtools,
  HambergerMenu,
  Home,
  Home2,
  Home3,
  InfoCircle,
} from "iconsax-react";
import React, { useState } from "react";
import Image from "next/image";

import Logo from "../../../public/logo.png";

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

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" w-full h-14 bg-[#FF6000]/70 z-40 backdrop-blur-lg rounded-3xl border border-white/40  flex justify-between items-center p-8  sticky top-4 max-w-[1220px] mx-auto">
        <div className=" hidden xl:flex  justify-center gap-16">
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

        <div className=" w-full xl:hidden flex items-center justify-between">
          <HambergerMenu
            onClick={() => setIsOpen(true)}
            size={24}
            className={`${
              isOpen ? "hidden" : "block"
            } duration-200 cursor-pointer text-white`}
          />
          <Add
            onClick={() => setIsOpen(false)}
            className={` duration-200 text-white rotate-45 ${
              isOpen ? "block" : "hidden"
            } `}
            size={32}
          />
          <div className=" xl:hidden">
            <Image
              alt="logo"
              width={90}
              height={90}
              unoptimized
              className=" object-cover rounded-lg"
              src={Logo}
            />
          </div>
        </div>

        {isOpen ? (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=" w-full xl:hidden absolute top-24 right-0"
          >
            <div className="   w-full bg-[#FF6000] p-4 gap-2   rounded-lg backdrop-blur-lg   flex items-center flex-col   justify-center right-0 ">
              <Link
                to="hero"
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
          </motion.div>
        ) : null}
      </div>
    </>
  );
}

export default LandingNavbar;
