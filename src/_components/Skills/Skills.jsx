import React from "react";
import SmallTitle from "../_ui/SmallTitle";

function Skills() {
  return (
    <div>
      <div className="flex flex-col gap-[13px]">
        <div>
          <SmallTitle />
        </div>
        <div>
          <p className="text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35.8px] text-[#DEDEDE] w-full max-w-[1200px] leading-[1.2] md:leading-[1.3] lg:leading-[1.4] xl:leading-[43.452px] px-4 sm:px-6 md:px-8 lg:px-0">
            With 2 years of experience as a Frontend Developer and UI/UX
            Designer, I combine technical skills and creative thinking to build
            intuitive, user-friendly interfaces. I understand the importance of
            aligning design with business goals to create digital experiences
            that engage users and drive results.
          </p>
        </div>
      </div>

      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Skills;
