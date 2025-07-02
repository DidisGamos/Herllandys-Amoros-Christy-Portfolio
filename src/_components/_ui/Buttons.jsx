import React from 'react'

function Buttons() {
  return (
    <div>
      <button className="flex justify-center items-center gap-[10px] w-[127px] h-[40px] shrink-0 rounded-[50px] text-black text-[13px] font-semibold bg-[#F5B754] max-md:w-[100px] max-md:h-[30px] max-md:text-[10px]">
        Let's Talk{" "}
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
      </button>
    </div>
  );
}

export default Buttons
