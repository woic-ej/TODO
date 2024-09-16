"use client";

import React, { useState } from "react";
import SearchBar from "@/app/_components/search/SearchBar";
import LargeButton from "@/app/_components/buttons/LargeButton";
import SmallButton from "@/app/_components/buttons/SmallButton";
import { postData } from "@/app/_api/api";
import { ItemResponseType, PostItemType } from "@/app/_type/itemType";
import useTodoStore from "@/app/_store/todoStore";

const SearchSection = () => {
  const [name, setIsName] = useState<string>("");
  const { listData, setListData } = useTodoStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name !== "") {
      try {
        const requestData: PostItemType = { name };
        const response: ItemResponseType = await postData("items", requestData);
        const newData = {
          id: response.id,
          name: response.name,
          isCompleted: response.isCompleted,
        };
        setListData([...listData, newData]);
        setIsName("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (value: string) => {
    setIsName(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center sm:gap-4 gap-2 mt-6"
    >
      <SearchBar value={name} onChange={handleChange} />
      <div className="hidden sm:block">
        <LargeButton title="추가하기" onClick={handleSubmit} />
      </div>
      <div className="block sm:hidden">
        <SmallButton onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default SearchSection;
