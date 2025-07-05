import React from 'react'
import { FiCopy } from 'react-icons/fi'

function SmallTitle() {
  return (
    <div className="flex items-center gap-[10px] text-white">
      <div>
        <FiCopy className="h-[24px] w-[24px]" />
      </div>
      <div>
        <p className="text-[14px] text-[#A8A8A8] font-normal">About me</p>
      </div>
    </div>
  );
}

export default SmallTitle
