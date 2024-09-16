"use client";

import React, { useState } from "react";
import ListBox from "@/app/(home)/_components/list/ListBox";
import { useEffect } from "react";
import { getData } from "@/app/_api/api";
import useTodoStore from "@/app/_store/todoStore";
import { GetItemType } from "@/app/_type/itemType";

const ListSection = () => {
  const { listData, setListData } = useTodoStore();
  const [todoList, setTodoList] = useState<GetItemType[]>([]);
  const [doneList, setDoneList] = useState<GetItemType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData("items?page=1&pageSize=20");
        setListData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [setListData]);

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
