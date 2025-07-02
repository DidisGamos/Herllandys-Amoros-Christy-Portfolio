import React from "react";
import Marquee from "react-fast-marquee";
import { HiSparkles } from "react-icons/hi";
function Bars() {
  return (
    <div className="w-full flex justify-center items-center h-[100px] max-md:h-[80px] lg:h-[139px] bg-[#F3F1ED]">
      <Marquee autoFill={true} pauseOnClick={true} className="space-x-10">
        <div className="flex items-center gap-10">
          <div>
            <p className="text-[40px] max-md:text-[30px] lg:text-[64px] leading-0 font-bold">
              +5 PROJECT COMPLETED
            </p>
          </div>
          <div>
            <HiSparkles className="w-[64px] h-[64px]" />
          </div>
          <div>
            <p
              className=" text-[#F3F1ED] text-[40px] max-md:text-[30px] lg:text-[64px] leading-0 font-bold"
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              2 HAPPY CLIENTS
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default Bars;
