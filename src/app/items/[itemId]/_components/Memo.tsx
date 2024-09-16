"use client";

import React, { useState } from "react";
import Image from "next/image";
import MemoImage from "@/assets/images/memo.png";
import useUpdateItemStore from "@/app/_store/updateItemStore";

interface Props {
  memo: string;
}

/**
 * 메모를 위한 컴포넌트
 * @param memo : 저장된 메모 데이터
 */
const Memo: React.FC<Props> = ({ memo }) => {
  const [memoContent, setMemoContent] = useState<string>(memo);
  const { updateItem, setUpdateItem } = useUpdateItemStore();

  const handleChange = (value: string) => {
    setMemoContent(value);
    setUpdateItem({ ...updateItem, memo: value });
  };

  return (
    <div className="md:w-[588px] w-full h-[311px] flex items-center justify-center rounded-3xl relative">
      <Image
        src={MemoImage}
        alt="메모장"
        className="w-full h-full absolute rounded-3xl"
      />
      <div className="w-full h-full flex flex-col items-center py-6 gap-6">
        <span className="text-amber-800 relative nanum-extraB-16">Memo</span>
        <textarea
          value={memoContent}
          onChange={(e) => handleChange(e.target.value)}
          className="w-[90%] flex flex-grow relative resize-none bg-inherit text-center p-4 rounded-md items-center justify-center focus:outline-none text-lg text-slate-800"
        />
      </div>
    </div>
  );
};

export default Memo;
