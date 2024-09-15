import React from "react";
import Image from "next/image";
import memo from "@/assets/images/memo.png";

const Memo: React.FC = () => {
  return (
    <div className="md:w-[588px] w-full h-[311px] flex items-center justify-center rounded-3xl relative">
      <Image src={memo} alt="메모장" className="w-full h-full absolute" />
      <div className="w-full h-full flex flex-col items-center py-6 gap-6">
        <span className="text-amber-800 relative nanum-extraB-16">Memo</span>
        <textarea className="w-[90%] flex flex-grow relative resize-none bg-inherit text-center p-4 rounded-md border items-center justify-center" />
      </div>
    </div>
  );
};

export default Memo;
