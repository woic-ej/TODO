"use client";

import React, { useState } from "react";
import CheckBox from "@/app/_components/check-list/CheckBox";
import {
  GetItemType,
  UpdateItemRequestType,
  ItemResponseType,
} from "@/app/_type/itemType";
import { patchData } from "@/app/_api/api";
import useTodoStore from "@/app/_store/todoStore";

interface Props {
  item: GetItemType;
}

const TodoItem: React.FC<Props> = ({ item }) => {
  const { name, id, isCompleted } = item;
  const [isChecked, setIsChecked] = useState<boolean>(isCompleted);
  const { listData, setListData } = useTodoStore();

  const handleClick = async () => {
    try {
      const requestData: UpdateItemRequestType = {
        name,
        isCompleted: !isCompleted,
      };
      const response: ItemResponseType = await patchData(
        `items/${id}`,
        requestData
      );
      const newData: GetItemType[] = listData.map((item) =>
        item.id === id ? { ...item, isCompleted: response.isCompleted } : item
      );
      setListData(newData);
    } catch (error) {}
    setIsChecked((prev) => !prev);
  };

  return (
    <div
      className={`w-full h-[50px] rounded-[27px] border-2 pl-3 border-slate-900 flex items-center ${
        isChecked ? "bg-violet-100" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-4">
        <CheckBox isChecked={isChecked} onClick={handleClick} />
        <span
          className={`${
            isChecked && "line-through"
          } text-slate-900 nanum-regular-16`}
        >
          {name}
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
