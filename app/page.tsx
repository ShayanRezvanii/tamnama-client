/** @format */

import LandingLayout from "@/components/layout/LandingLayout/LandingLayout";
import LandingNavbar from "@/components/layout/Navbar/LandingNavbar";
import Hero from "@/pages/Landing/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <LandingLayout>
      <LandingNavbar />
      <Hero />
    </LandingLayout>
  );
}
