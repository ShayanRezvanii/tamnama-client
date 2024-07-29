/** @format */
"use client";
import useGetUserProfile from "@/util/hooks/user/showProfile";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" min-h-screen">
      <div>{children}</div>
    </div>
  );
}

export default Layout;
