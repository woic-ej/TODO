"use client";

import React from "react";
import LargeButton from "@/app/_components/buttons/LargeButton";
import { deleteData, patchData } from "@/app/_api/api";
import { useRouter } from "next/navigation";
import useUpdateItemStore from "@/app/_store/updateItemStore";

interface Props {
  id: number;
}

/**
 * 수정하기, 삭제하기 버튼 컴포넌트
 * @param id : 할 일 id
 * @returns
 */

const ButtonSection: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  const { updateItem, clear } = useUpdateItemStore();
  const isNotEmpty = Object.keys(updateItem).length > 0;

  // 삭제하기 api 호출
  const handleDelete = async () => {
    try {
      await deleteData(`items/${id}`);
      router.replace("/");
      clear();
    } catch (error) {
      console.error(error);
    }
  };

  // 수정하기 api 호출
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
      <LargeButton
        title="수정완료"
        onClick={handleUpdate}
        isActive={isNotEmpty}
      />
      <LargeButton
        title="삭제하기"
        onClick={handleDelete}
        isActive={isNotEmpty}
      />
    </div>
  );
};

export default ButtonSection;
