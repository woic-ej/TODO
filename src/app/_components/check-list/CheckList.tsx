"use client";

import React, { useState } from "react";
import CheckBox from "@/app/_components/check-list/CheckBox";

interface Props {
  todo: string;
}

const CheckList: React.FC<Props> = ({ todo }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div
      className={`w-[527px] h-[50px] rounded-[27px] border-2 pl-3 border-slate-900 flex items-center nanum-regular-16 ${
        isChecked ? "bg-violet-100" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-4">
        <CheckBox isChecked={isChecked} onClick={handleClick} />
        <span className={`${isChecked && "line-through"}`}>{todo}</span>
      </div>
    </div>
  );
};

export default CheckList;
