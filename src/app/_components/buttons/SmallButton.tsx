"use client";

import React from "react";
import BigPlus from "@/app/_components/icons/BigPlus";

interface Props {
  isActive: boolean;
  onClick: (e: React.FormEvent) => void;
}

/**
 * 작은 추가 버튼
 * @param isActive : 버튼 활성화 여부
 * @param onClick
 */
const SmallButton: React.FC<Props> = ({ isActive, onClick }) => {
  return (
    <button onClick={onClick} className="relative">
      <div
        className={`w-[54.75px] h-[52px] ${
          isActive ? "bg-violet-600" : "bg-white"
        } flex justify-center items-center border-2 border-slate-900 rounded-3xl relative z-10`}
      >
        <BigPlus
          className={`${isActive ? "stroke-white" : "stroke-[#0F172A]"}`}
        />
      </div>
      <div className="w-[54.75px] h-[52px] bg-slate-900 rounded-3xl absolute top-1 left-[1.22px] z-0" />
    </button>
  );
};

export default SmallButton;
