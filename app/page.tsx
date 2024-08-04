/** @format */

import LandingFooter from "@/components/layout/LandingFooter/LandingFooter";
import LandingLayout from "@/components/layout/LandingLayout/LandingLayout";
import LandingNavbar from "@/components/layout/Navbar/LandingNavbar";
import FirstSection from "@/pages/Landing/FirstSection";
import Hero from "@/pages/Landing/Hero";
import SecondSection from "@/pages/Landing/SecondSection";
import ThirdSection from "@/pages/Landing/ThirdSection";
import Image from "next/image";

export default function Home() {
  return (
    <LandingLayout>
      <LandingNavbar />
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <LandingFooter />
    </LandingLayout>
  );
}
