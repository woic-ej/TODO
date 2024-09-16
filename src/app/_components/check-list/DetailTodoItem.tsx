"use client";

import React, { useState } from "react";
import CheckBox from "./CheckBox";
import useUpdateItemStore from "@/app/_store/updateItemStore";

interface Props {
  name: string;
  isCompleted: boolean;
}

/**
 * 상세 페이지에서 사용되는 할 일 컴포넌트
 * @param name : 할 일 내용
 * @param isCompleted : 완료 여부
 */
const DetailTodoItem: React.FC<Props> = ({ name, isCompleted }) => {
  const { updateItem, setUpdateItem } = useUpdateItemStore();
  const [isChecked, setIsChecked] = useState<boolean>(isCompleted || false);
  const [isEditing, setIsEditing] = useState<boolean>(false); // 할 일 내용 편집 여부
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
