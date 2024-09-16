"use client";

import React from "react";
import LargeButton from "@/app/_components/buttons/LargeButton";
import { deleteData, patchData } from "@/app/_api/api";
import { useRouter } from "next/navigation";
import useUpdateItemStore from "@/app/_store/updateItemStore";

interface Props {
  id: number;
}

const ButtonSection: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  const { updateItem, clear } = useUpdateItemStore();

  const handleDelete = async () => {
    try {
      await deleteData(`items/${id}`);
      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await patchData(`items/${id}`, updateItem);
      router.replace("/");
      clear();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex md:justify-end justify-center sm:gap-4 gap-[7px]">
      <LargeButton title="수정완료" onClick={handleUpdate} />
      <LargeButton title="삭제하기" onClick={handleDelete} />
    </div>
  );
};

export default ButtonSection;
