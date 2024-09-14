import React from "react";
import LogoImage from "@/assets/images/logo.png";
import Image from "next/image";

const MediumNavBar = () => {
  return (
    <div className="w-[744px] flex items-center pl-6 h-[60px] border-b border-slate-200 bg-white">
      <Image src={LogoImage} alt="로고 이미지" />
    </div>
  );
};

export default MediumNavBar;
