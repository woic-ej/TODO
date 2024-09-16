"use client";

import React, { useState } from "react";
import CheckBox from "./CheckBox";
import { UpdateItemRequestType } from "@/app/_type/itemType";
import { patchData } from "@/app/_api/api";

interface Props {
  id: number;
  name: string;
  isCompleted: boolean;
}

const DetailTodoItem: React.FC<Props> = ({ id, name, isCompleted }) => {
  const [isChecked, setIsChecked] = useState<boolean>(isCompleted || false);

  const handleCheckBoxClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const requestData: UpdateItemRequestType = {
        name,
        isCompleted: !isCompleted,
      };
      await patchData(`items/${id}`, requestData);
    } catch (error) {}
    setIsChecked((prev) => !prev);
  };

  return (
    <div
      className={`w-full h-16 rounded-3xl border-2  border-slate-900 flex items-center justify-center  ${
        isChecked ? "bg-violet-100" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-4">
        <CheckBox isChecked={isChecked} onClick={handleCheckBoxClick} />
        <span className="underline nanum-bold-20 text-slate-900">{name}</span>
      </div>
    </div>
  );
};

export default DetailTodoItem;
