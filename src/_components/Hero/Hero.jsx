import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Call } from "../_constants/Icons";
import { Socials } from "../_constants/Icons";

function Hero() {
  // const sociallinks = [
  //   {
  //     icon: <fafacebook size={40} />,
  //     name: "facebook"
  //   },
  //   { icon: <fainstagram size={40} />, name: "instagram" },
  // ];

  const [text] = useTypewriter({
    words: ["FRONTEND DEVELOPPER", "UI/UX DESIGNER"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="pt-[103px] relative">
      {/* <div classname="flex space-x-4">
              {sociallinks.map((social, index) => (
                  <a key={index}>{social.icon}</a>
              ))}
          </div> */}

      {/* Scquare_Cube */}

      <div className="absolute left-[78px] max-md:left-0 lg:left-[163.85px] mt-[22px] max-md:mt-[15px] lg:mt-[32.49px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60.297"
          height="44.477"
          viewBox="0 0 83 58"
          fill="none"
          className="max-md:w-[40px] max-md:h-[30px] lg:w-[60.297px] lg:h-[44.477px]"
        >
          <path
            d="M29.0097 58C25.0012 58 21.2312 57.2395 17.6997 55.7187C14.1703 54.1956 11.0995 52.1291 8.48733 49.5191C5.87518 46.9091 3.80759 43.8416 2.28456 40.3164C0.761519 36.7913 0 33.0224 0 29.0097C0 24.9969 0.761519 21.2269 2.28456 17.6997C3.80544 14.1703 5.86874 11.0995 8.47445 8.48733C11.0801 5.87518 14.1488 3.80759 17.6803 2.28456C21.2119 0.761519 24.9819 0 28.9903 0C32.9988 0 36.7688 0.761519 40.3003 2.28456C43.8297 3.80544 46.9005 5.86981 49.5127 8.47767C52.1248 11.0855 54.1924 14.1541 55.7154 17.6836C57.2385 21.213 58 24.9819 58 28.9903C58 32.9988 57.2396 36.7688 55.7187 40.3003C54.1978 43.8319 52.1313 46.9027 49.5191 49.5127C46.907 52.1227 43.8394 54.1903 40.3164 55.7154C36.7935 57.2406 33.0246 58.0021 29.0097 58Z"
            fill="#F5B754"
          />
          <path
            d="M55.1335 8.64661C56.8909 6.88925 59.7401 6.88925 61.4975 8.64661L78.9846 26.1337C80.7419 27.8911 80.7419 30.7403 78.9846 32.4977L61.4975 49.9847C59.7401 51.7421 56.8909 51.7421 55.1335 49.9847L37.6464 32.4977C35.8891 30.7403 35.8891 27.8911 37.6464 26.1337L55.1335 8.64661Z"
            fill="#F5B754"
            stroke="#212121"
            stroke-width="5"
          />
        </svg>
      </div>

      {/* Names */}
      <div className="text-white flex flex-col max-md:mb-[60px]">
        <div className="hidden max-md:block lg:block relative">
          <div className="absolute flex max-md:hidden lg:flex-col gap-[25px] top-[120px] lg:top-[123.9px]">
            {Call.map((social, index) => (
              <a
                key={index}
                href="#"
                className="block mb-2 text-white bg-transparent border-2 p-[10px] rounded-full hover:text-[#F5B754] hover:scale-110 hover:border-[#F5B754]
            transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="absolute flex lg:flex-col gap-[25px] max-md:left-[50px] max-md:top-[200px] max-md:mb-[50px] lg:top-[58.64px] lg:right-0">
            {Socials.map((social, index) => (
              <a
                key={index}
                href="#"
                className="block mb-2 text-white bg-transparent border-2 max-md:p-[7px] lg:p-[10px] rounded-full hover:text-[#F5B754] hover:scale-110 hover:border-[#F5B754]
            transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Names For My Presentation */}

        <p className="ml-[150px] max-md:ml-[60px] lg:ml-[251px] text-[60px] max-md:text-[40px] lg:text-[90px] font-bold leading-normal">
          HELLO THERE
        </p>
        <p className="ml-0 lg:ml-[88px] text-[60px] max-md:text-[40px] lg:text-[90px] font-bold leading-normal">
          I AM HERLLANDYS
        </p>
        <p className="ml-0 lg:ml-[88px] text-[55px] max-md:text-[40px] lg:text-[90px] font-bold leading-normal">
          {text}
          <span>
            <Cursor cursorStyle="|" />
          </span>
        </p>

        {/* Small Info */}
        <div className="absolute hidden lg:block top-[250px] lg:left-[850px] text-white">
          <p className="font-Michroma w-[290px] shrink-0 text-[14px] font-normal leading-normal">
            A passionate frontend developer with a talent for turning ideas into
            interactive and visually engaging experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
