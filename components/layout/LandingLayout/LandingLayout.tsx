/** @format */

import React from "react";

interface LandingLayoutProps {
  children: React.ReactNode;
}

function LandingLayout({ children }: LandingLayoutProps) {
  return <div className=" bg-black px-4 lg:px-56 min-h-screen">{children}</div>;
}

export default LandingLayout;
