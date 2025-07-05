import React from "react";

function Buttons(props) {
  const { children, width, height, fontSize, gap} = props;
  return (
    <div>
      <button
        className="flex justify-center items-center shrink-0 rounded-[50px] text-black font-semibold bg-[#F5B754] max-md:w-[100px] max-md:h-[30px] max-md:text-[10px]"
        style={{ width, height, fontSize: fontSize, gap: gap }}
      >
        {children}
      </button>
    </div>
  );
}

export default Buttons;
