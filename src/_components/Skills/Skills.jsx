import React from "react";
import SmallTitle from "../_ui/SmallTitle";
import { BsMortarboard } from "react-icons/bs";
import { education, experience } from "../_constants/EducationExperience";
import { MdWorkspacePremium } from "react-icons/md";
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
      <hr className="w-full h-[1px] bg-[#4d4d4d] mb-[100px] max-md:mb-[50px] mt-[100px] max-md:mt-[50px]" />
      <div className="flex justify-around max-md:justify-center max-md:items-center max-md:flex-col max-md:gap-[50px]">
        <div>
          <div className="flex items-center gap-[10px] text-white">
            <BsMortarboard className="w-[40px] h-[40px]" />
            <p className="text-[35.7px] leading-normal font-bold">
              My Education
            </p>
          </div>
          <div className="flex flex-col gap-[20px] max-lg:gap-[20px] min-[1163px]:gap-[20px] mt-[40px]">
            {education.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-[10px] max-md:gap-[5px] w-[458px] max-md:w-[300px] h-[169px] max-md:h-[120px] rounded-[12px] border-[1px] border-[#3D3D3D]"
              >
                <p className="w-[121px] max-md:w-[80px] h-[37px] max-md:h-[25px] rounded-full border-[1px] border-[#3F3F3F] flex items-center justify-center text-[#ABABAB] text-[13.5px] max-md:text-[10px] leading-normal">
                  {item.year}
                </p>
                <p className="text-[#C2C2C2] text-[28.3px] max-md:text-[20px] font-bold leading-normal">
                  {item.class}
                </p>
                <p className="text-[#9F9F9F] text-[13.5px] font-normal leading-normal">
                  {item.school}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[10px] text-white">
            <MdWorkspacePremium className="w-[40px] h-[40px]" />
            <p className="text-[35.7px] leading-normal font-bold">
              My Experience
            </p>
          </div>
          <div className="flex flex-col gap-[20px] mt-[40px]">
            {experience.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-[10px] max-md:gap-[5px] w-[458px] max-md:w-[300px] h-[169px] max-md:h-[120px] rounded-[12px] border-[1px] border-[#3D3D3D] max-md:text-center"
              >
                <p className="w-[121px] max-md:w-[80px] h-[37px] max-md:h-[25px] rounded-full border-[1px] border-[#3F3F3F] flex items-center justify-center text-[#ABABAB] text-[13.5px] max-md:text-[10px] leading-normal">
                  {item.year}
                </p>
                <p className="text-[#C2C2C2] text-[28.3px] max-md:text-[20px] font-bold leading-normal">
                  {item.techno}
                </p>
                <p className="text-[#9F9F9F] text-[13.5px] max-md:text-[10px] font-normal leading-normal">
                  {item.school}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Skills;
