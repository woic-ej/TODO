"use client";

import React, { useState } from "react";
import Plus from "@/assets/icons/button/plus-button-icon.svg";
import classNames from "classnames";

interface Props {
  onClick: () => void;
}

const SmallButton: React.FC<Props> = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = () => {
    onClick();
    setIsClicked((prev) => !prev);
  };

  const buttonClass = classNames(
    "w-[54.75px] h-[52px] flex justify-center items-center border-2 border-slate-900 rounded-3xl relative z-10",
    {
      "bg-violet-600 ": isClicked,
      "bg-white": !isClicked,
    }
  );

  return (
    <button onClick={handleClick} className="relative">
      <div className={buttonClass}>
        <Plus stroke={`${isClicked ? "white" : "#0F172A"}`} />
      </div>
      <div className="w-[54.75px] h-[52px] bg-slate-900 rounded-3xl absolute top-1 left-[1.22px] z-0" />
    </button>
  );
};

export default SmallButton;
