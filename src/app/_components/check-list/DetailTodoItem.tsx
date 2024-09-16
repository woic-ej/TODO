"use client";

import React, { useState } from "react";
import CheckBox from "./CheckBox";
import useUpdateItemStore from "@/app/_store/updateItemStore";

interface Props {
  name: string;
  isCompleted: boolean;
}

const DetailTodoItem: React.FC<Props> = ({ name, isCompleted }) => {
  const { updateItem, setUpdateItem } = useUpdateItemStore();
  const [isChecked, setIsChecked] = useState<boolean>(isCompleted || false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedName, setEditedName] = useState<string>(name);

  const handleCheckBoxClick = async () => {
    setIsChecked((prev) => !prev);
    setUpdateItem({ ...updateItem, isCompleted: !isChecked });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
    setUpdateItem({ ...updateItem, name: e.target.value });
  };

  return (
    <div
      className={`w-full h-16 rounded-3xl border-2  border-slate-900 flex items-center justify-center  ${
        isChecked ? "bg-violet-100" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-4">
        <CheckBox isChecked={isChecked} onClick={handleCheckBoxClick} />
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={handleInputChange}
            onBlur={() => setIsEditing(false)}
            autoFocus
            className="underline nanum-bold-20 text-slate-900 "
          />
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            className="underline nanum-bold-20 text-slate-900 cursor-pointer"
          >
            {editedName}
          </span>
        )}
      </div>
    </div>
  );
};

export default DetailTodoItem;
