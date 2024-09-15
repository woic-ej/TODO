import React from "react";
import LogoImage from "@/assets/images/large-logo.png";
import SmallLogo from "@/assets/images/small-logo.png";
import Image from "next/image";

const LargeNavBar = () => {
  return (
    <div className="w-full flex items-center pl-6 md:pl-[360px] h-[60px] border-b border-slate-200 bg-white">
      <Image
        src={LogoImage}
        alt="로고 이미지"
        className="w-[151px] h-[41px] hidden sm:block"
      />
      <Image
        src={SmallLogo}
        alt="작은 로고 이미지"
        className="w-[71px] h-[40px] block sm:hidden"
      />
    </div>
  );
};

export default LargeNavBar;
