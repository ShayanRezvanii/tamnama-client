/** @format */
"use client";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cover bg-center bg-texturebg ">
      <div>{children}</div>
    </div>
  );
}

export default Layout;
