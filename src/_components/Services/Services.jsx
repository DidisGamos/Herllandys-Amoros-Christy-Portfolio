import React from "react";
import Marquee from "react-fast-marquee";

function Services() {
  return (
    <div className="w-full h-auto bg-[#1C1C1C]">
      <div className="mt-[50px]">
        <Marquee autoFill={true} pauseOnClick={true} className="space-x-[30px] max-md:space-x-[10px]">
          <div className="flex items-center max-md:gap-[10px] gap-[30px]">
            <p className="text-[90px] max-md:text-[50px] text-[#F4F4F4] font-semibold ">SERVICES</p>
            <p
              className="text-[#1c1c1c] max-md:text-[50px] text-[91px] leading-0 font-semibold
            "
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#F4F4F4",
              }}
            >
              SERVICES
            </p>
          </div>
        </Marquee>
      </div>
      <div className="px-[30px] max-md:px-[20px] lg:px-[120px] py-[20px] lg:py-[50px]">
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Services;
