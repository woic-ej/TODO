"use client";

import React from "react";
import LargeButton from "@/app/_components/buttons/LargeButton";
import { deleteData } from "@/app/_api/api";
import { useRouter } from "next/navigation";

interface Props {
  id: number;
}

const ButtonSection: React.FC<Props> = ({ id }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteData(`items/${id}`);
      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex md:justify-end justify-center sm:gap-4 gap-[7px]">
      <LargeButton title="수정완료" />
      <LargeButton title="삭제하기" onClick={handleDelete} />
    </div>
  );
};

export default ButtonSection;
