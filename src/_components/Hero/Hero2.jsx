import React from "react";
import HeroPic from "../../assets/HeroPic.png";
import { FaPlus } from "react-icons/fa";

function Hero2() {
  return (
    <div className='relative bg-[url("/src/assets/Hero_BG.png")] bg-cover bg-center bg-no-repeat h-[587px] px-[120px] py-[10px] lg:py-[50px]'>
      <div className="hidden lg:block p-[31px] text-white w-[331px] h-[136.314px] bg-[#212121] border-[2px] border-[#4d4d4d] rounded-[10px] absolute top-[335.27px] left-[122px]">
        <div className="flex mt-10 items-center justify-between">
          <div>
            <p className="text-[20px] font-bold leading-none">Latest Project</p>
          </div>
          <div>
            <button className="w-[36px] h-[36px] bg-[#212121] border-[2px] border-white rounded-[50%] flex items-center justify-center">
              <FaPlus className="text-white text-[14px]" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          src={HeroPic}
          alt="hero"
          className="absolute bottom-0 lg:left-[533.21px]"
        />
      </div>
      <div className="p-[31px] w-[290px] lg:w-[331px] lg:h-[153.353px] bg-[#212121] border-[2px] border-[#4d4d4d] rounded-[10px] absolute top-[60px] lg:top-[190.84px] right-5 lg:right-[122px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-[10px] text-white w-[280px]">
            <p className="text-[20px] font-bold leading-none">Let's Talk</p>
            <p className="text-[#4d4d4d] text-[14px] font-normal leading-none">
              I am the creator behind some of the most modern and innovative
              interfaces, combining frontend development and UX/UI design.
            </p>
          </div>
          <div className="flex items-end justify-end">
            <button className="w-[36px] h-[36px] bg-[#212121] border-[2px] border-white rounded-[50%] flex items-center justify-center">
              <FaPlus className="text-white text-[14px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
