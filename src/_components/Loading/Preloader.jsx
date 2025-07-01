import React from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { motion } from "framer-motion";

// Fusée SVG composant
const Rocket = ({ className, style, animate, transition }) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    animate={animate}
    transition={transition}
  >
    <path
      d="M12 2C13.1046 2 14 2.89543 14 4V6.5C14 7.32843 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5V11C17 12.1046 16.1046 13 15 13H9C7.89543 13 7 12.1046 7 11V9.5C7 8.67157 7.67157 8 8.5 8C9.32843 8 10 7.32843 10 6.5V4C10 2.89543 10.8954 2 12 2Z"
      fill="#F5B754"
    />
    <rect x="11" y="13" width="2" height="6" rx="1" fill="#fff" />
    <rect x="9" y="19" width="6" height="2" rx="1" fill="#F5B754" />
  </motion.svg>
);

function Preloader() {
  return (
    <div className="relative flex h-screen justify-center bg-[#212121] items-center overflow-hidden">
      {/* Fusées animées en arrière-plan */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* Rocket 1 */}
        <Rocket
          className="absolute left-10 bottom-10 w-10 h-10 blur-md opacity-60"
          animate={{ y: [0, -600], x: [0, 200], rotate: [0, 30] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0,
          }}
        />
        {/* Rocket 2 */}
        <Rocket
          className="absolute right-10 bottom-1/4 w-8 h-8 blur-sm opacity-40"
          animate={{ y: [0, -500], x: [0, -150], rotate: [0, -20] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            delay: 1.5,
          }}
        />
        {/* Rocket 3 */}
        <Rocket
          className="absolute left-1/3 bottom-0 w-12 h-12 blur-lg opacity-30"
          animate={{ y: [0, -700], x: [0, 100], rotate: [0, 45] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "loop",
            delay: 2.5,
          }}
        />
        {/* Rocket 4 */}
        <Rocket
          className="absolute right-1/4 bottom-10 w-7 h-7 blur-md opacity-50"
          animate={{ y: [0, -400], x: [0, -120], rotate: [0, -30] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.8,
          }}
        />
      </div>
      {/* Contenu principal */}
      <div className="flex flex-col justify-center items-center gap-10 z-10">
        {/* Logo animé */}
        <motion.img
          src={"/src/assets/Logo2.png"}
          alt="logo"
          className="w-[60%] mb-4"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 0.2,
          }}
        />
        {/* Texte animé */}
        {/*<motion.p
          className="text-white text-lg md:text-lg font-Michroma text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Welcome to my portfolio!
        </motion.p>*/}
        {/* Loader points animés */}
        <div className="flex gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block w-3 h-3 rounded-full bg-[#F5B754]"
              initial={{ y: 0, opacity: 0.5 }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        {/* Chevron animé */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
            <FaChevronCircleDown className="text-white text-5xl mt-6" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Preloader;
