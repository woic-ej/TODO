"use client";

import DetailTodoItem from "@/app/_components/check-list/DetailTodoItem";
import React, { useEffect, useState } from "react";
import ImageUpload from "@/app/items/[itemId]/_components/ImageUpload";
import Memo from "@/app/items/[itemId]/_components/Memo";
import ButtonSection from "./_components/ButtonSection";
import { useParams } from "next/navigation";
import { ItemResponseType } from "@/app/_type/itemType";
import { getData } from "@/app/_api/api";

const DetailPage = () => {
  const params = useParams();
  const [todoItem, setTodoItem] = useState<ItemResponseType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(`items/${params.itemId}`);
        setTodoItem(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [params.itemId]);

  return (
    <div className="md:w-[1200px] w-full flex justify-center min-h-screen py-6 sm:px-6 px-4 bg-white">
      {todoItem && (
        <div className="md:w-[996px] sm:w-[696px] w-[375px] flex flex-col gap-6">
          <DetailTodoItem
            name={todoItem.name}
            isCompleted={todoItem.isCompleted}
          />
          <div className="flex md:flex-row flex-col gap-6">
            <ImageUpload imageUrl={todoItem.imageUrl} />
            <Memo memo={todoItem.memo} />
          </div>
          <ButtonSection id={todoItem.id} />
        </div>
      )}
    </div>
  );
};

export default DetailPage;
