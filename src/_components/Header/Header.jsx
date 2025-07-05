import React, { useRef, useState } from "react";
import Buttons from "../_ui/Buttons";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FiBriefcase, FiHome, FiUser } from "react-icons/fi";
import LogoA from "../../assets/Logo2.png";
import LogoB from "../../assets/Logo3.png";

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{ hidden: { y: "-200%" }, visible: { x: "0%" } }}
      transition={{ duration: 0.2 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className="w-full max-w-7xl h-16 md:h-[68px] text-white flex justify-around 
      items-center gap-[20px] lg:gap-[50px] shrink-0 border-[2px] border-[#4d4d4d] rounded-[10px] bg-black"
      >
        <div className="w-[10%]">
          <img src={LogoA} className="hidden lg:block" alt="logo" />
          <img
            src={LogoB}
            className="w-[45%] max-md:w-[100%] lg:hidden"
            alt="logo"
          />
        </div>
        <div className="hidden lg:flex gap-[50px] text-[12px] sm:hidden">
          <a
            className="hover:text-[#F5B754] transition-all duration-300"
            href="#home"
          >
            HOME
          </a>
          <a
            className="hover:text-[#F5B754] transition-all duration-300"
            href="#about"
          >
            ABOUT
          </a>
          <a
            className="hover:text-[#F5B754] transition-all duration-300"
            href="#service"
          >
            SERVICE
          </a>
          <a
            className="hover:text-[#F5B754] transition-all duration-300"
            href="#portfolio"
          >
            PORTFOLIO
          </a>
          <a
            className="hover:text-[#F5B754] transition-all duration-300"
            href="#contact"
          >
            CONTACT
          </a>
        </div>
        <div className="flex lg:hidden items-center gap-[20px] text-xl">
          <a href="">
            <FiHome size={20} />
          </a>
          <a href="">
            <FiUser size={20} />
          </a>
          <a href="">
            <FiBriefcase size={20} />
          </a>
        </div>
        <div>
          <Buttons width="140px" height="40px" fontSize="13.5px" gap="10px" rounded="50px">
            {"Lets Talks"}
            <label htmlFor="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M4.24745 17.3625L18.0058 11.2267C19.1091 10.735 19.1091 9.265 18.0058 8.77333L4.24745 2.63666C3.00162 2.08083 1.70829 3.315 2.32579 4.47166L4.95245 9.39166C5.15662 9.77416 5.15662 10.225 4.95245 10.6067L2.32579 15.5267C1.70912 16.6833 3.00079 17.9192 4.24745 17.3625Z"
                  fill="black"
                />
              </svg>
            </label>
          </Buttons>
        </div>
      </nav>
    </motion.div>
  );
}

export default Header;
