"use client";

import React, { useState } from "react";
import CheckBox from "./CheckBox";

interface Props {
  todo: string;
}

const DetailTodoItem: React.FC<Props> = ({ todo }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div
      className={`w-full h-16 rounded-3xl border-2  border-slate-900 flex items-center justify-center  ${
        isChecked ? "bg-violet-100" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-4">
        <CheckBox isChecked={isChecked} onClick={handleClick} />
        <span className="underline nanum-bold-20 text-slate-900">{todo}</span>
      </div>
    </div>
  );
};

export default DetailTodoItem;
