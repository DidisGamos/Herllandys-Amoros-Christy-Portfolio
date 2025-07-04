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
          <img src={LogoB} className="w-[45%] max-md:w-[100%] lg:hidden" alt="logo" />
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
          <Buttons />
        </div>
      </nav>
    </motion.div>
  );
}

export default Header;
