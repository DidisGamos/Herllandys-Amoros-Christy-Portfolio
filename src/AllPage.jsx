import React from "react";
import Header from "./_components/Header/Header";
import Hero from "./_components/Hero/Hero";
import Hero2 from "./_components/Hero/Hero2";
import Bars from "./_components/_ui/Bars";

export default function AllPage() {
  return (
    <div className="w-full h-auto font-SpaceGrotesk bg-[#212121]">
      <div className="px-[30px] lg:px-[120px] py-[20px] lg:py-[50px]">
        <Header />
        <Hero />
      </div>
      <Hero2 />
      <Bars />
    </div>
  );
}
