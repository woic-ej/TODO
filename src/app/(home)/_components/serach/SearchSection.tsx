"use client";

import React, { useState } from "react";
import SearchBar from "@/app/_components/search/SearchBar";
import LargeButton from "@/app/_components/buttons/LargeButton";
import SmallButton from "@/app/_components/buttons/SmallButton";
import { postData } from "@/app/_api/api";
import { ItemResponseType, PostItemType } from "@/app/_type/itemType";
import useTodoStore from "@/app/_store/todoStore";

/**
 * 할 일 목록 추가 컴포넌트
 */

const SearchSection = () => {
  const [name, setIsName] = useState<string>("");
  const { listData, setListData } = useTodoStore();

  // 할 일 목록 추가 : Enter 키 입력 시 데이터 추가 api 호출을 위해 submit 이벤트로 구현
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
        <LargeButton
          title="추가하기"
          onClick={handleSubmit}
          isActive={name !== ""}
        />
      </div>
      <div className="block sm:hidden">
        <SmallButton isActive={name !== ""} onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default SearchSection;
