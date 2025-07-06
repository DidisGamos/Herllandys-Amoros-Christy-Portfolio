import React from "react";
import Header from "./_components/Header/Header";
import Hero from "./_components/Hero/Hero";
import Hero2 from "./_components/Hero/Hero2";
import Bars from "./_components/_ui/Bars";
import Skills from "./_components/Skills/Skills";
import Services from "./_components/Services/Services";

export default function AllPage() {
  return (
    <div className="w-full h-auto font-SpaceGrotesk bg-[#212121] overflow-x-hidden">
      <div className="px-[30px] max-md:px-[20px] lg:px-[120px] py-[20px] lg:py-[50px]">
        <Header />
        <Hero />
      </div>
      <Hero2 />
      <Bars />
      <div className="px-[30px] max-md:px-[20px] max-md:py-[50px] lg:px-[120px] py-[105px]">
        <Skills />
      </div>
      <Services />
    </div>
  );
}
