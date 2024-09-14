import React from "react";
import LogoImage from "@/assets/images/logo.png";
import Image from "next/image";

const LargeNavBar = () => {
  return (
    <div className="w-full flex items-center pl-[360px] h-[60px] border-b border-slate-200 bg-white">
      <Image src={LogoImage} alt="로고 이미지" />
    </div>
  );
};

export default LargeNavBar;
