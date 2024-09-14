import React from "react";
import SmallLogo from "@/assets/images/small-logo.png";
import Image from "next/image";

const SmallNavBar = () => {
  return (
    <div className="w-[375px] flex items-center pl-6 h-[60px] border-b border-slate-200 bg-white">
      <Image
        src={SmallLogo}
        alt="작은 로고 이미지"
        className="w-[71px] h-[40px]"
      />
    </div>
  );
};

export default SmallNavBar;
