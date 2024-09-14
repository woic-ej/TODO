"use client";

import LargeButton from "@/app/_components/buttons/LargeButton";
import { useState } from "react";

export default function Home() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-3">
      <LargeButton title="삭제하기" onClick={handleClick} />
      <LargeButton
        title="수정완료"
        onClick={handleClick}
        isClicked={isClicked}
      />
      <LargeButton
        title="추가하기"
        onClick={handleClick}
        isClicked={isClicked}
      />
    </div>
  );
}
