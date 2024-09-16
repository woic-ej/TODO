"use client";

import React, { useState } from "react";
import ListBox from "@/app/(home)/_components/list/ListBox";
import { useEffect } from "react";
import { getData } from "@/app/_api/api";
import useTodoStore from "@/app/_store/todoStore";
import { GetItemType } from "@/app/_type/itemType";

/**
 * 전체 할 일 목록에서 TO DO 와 DONE으로 분류해주는 컴포넌트
 */

const ListSection = () => {
  const { listData, setListData } = useTodoStore();
  const [todoList, setTodoList] = useState<GetItemType[]>([]);
  const [doneList, setDoneList] = useState<GetItemType[]>([]);

  // 할 일 목록 조회
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData("items");
        setListData(data.reverse());
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [setListData]);

  // 조회한 목록에서 isCompleted 여부를 판단해 todoList와 doneList로 구분
  useEffect(() => {
    const newTodoList = listData.filter((item) => item.isCompleted === false);
    const newDoneList = listData.filter((item) => item.isCompleted === true);
    setTodoList(newTodoList);
    setDoneList(newDoneList);
  }, [listData, setTodoList, setDoneList]);

  return (
    <div className="flex md:flex-row flex-col gap-12 md:gap-6 my-10">
      <ListBox label="TO DO" list={todoList} />
      <ListBox label="DONE" list={doneList} />
    </div>
  );
};

export default ListSection;
