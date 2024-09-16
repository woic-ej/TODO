import DetailTodoItem from "@/app/_components/check-list/DetailTodoItem";
import React from "react";
import ImageUpload from "@/app/items/[itemId]/_components/ImageUpload";
import Memo from "@/app/items/[itemId]/_components/Memo";
import LargeButton from "@/app/_components/buttons/LargeButton";

const DetailPage = () => {
  return (
    <div className="md:w-[1200px] w-full flex justify-center min-h-screen pt-6 sm:px-6 px-4 bg-white">
      <div className="md:w-[996px] sm:w-[696px] w-[375px] flex flex-col gap-6">
        <DetailTodoItem todo="비타민 챙겨먹기" />
        <div className="flex md:flex-row flex-col gap-6">
          <ImageUpload />
          <Memo />
        </div>
        <div className="flex md:justify-end justify-center sm:gap-4 gap-[7px]">
          <LargeButton title="수정완료" />
          <LargeButton title="삭제하기" />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
