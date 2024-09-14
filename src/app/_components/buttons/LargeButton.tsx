"use client";

import React from "react";
import Plus from "@/assets/icons/plus-icon.svg";
import Delete from "@/assets/icons/x-icon.svg";
import Check from "@/assets/icons/check-icon.svg";
import classNames from "classnames";

interface Props {
  title: "추가하기" | "삭제하기" | "수정완료";
  isClicked?: boolean;
  onClick: () => void;
}

const LargeButton: React.FC<Props> = ({ title, isClicked, onClick }) => {
  const IconComponent: React.FC = () => {
    switch (title) {
      case "추가하기":
        return <Plus stroke={`${isClicked ? "white" : "#0F172A"}`} />;
      case "삭제하기":
        return <Delete />;
      case "수정완료":
        return <Check />;
    }
  };

  const buttonClass = classNames(
    "w-[168px] h-[56px] flex items-center justify-center border-2 border-slate-900 rounded-3xl nanum-bold-18 relative z-10",
    {
      "bg-slate-200 text-slate-900": title !== "삭제하기",
      "bg-rose-500 text-white": title === "삭제하기",
      "bg-violet-600 text-white": isClicked && title === "추가하기",
      "bg-lime-300": isClicked && title === "수정완료",
    }
  );

  return (
    <button className="relative" onClick={onClick}>
      <div className={buttonClass}>
        <div className="flex items-center gap-1">
          <IconComponent />
          {title}
        </div>
      </div>
      <div className="w-[168px] h-[56px] absolute rounded-3xl bg-slate-900 top-1 left-[3.65px] z" />
    </button>
  );
};

export default LargeButton;
