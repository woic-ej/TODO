import React from "react";
import Label from "@/app/(home)/_components/label/Label";
import TodoItem from "@/app/_components/check-list/TodoItem";
import Image from "next/image";
import DoneLarge from "@/assets/images/done-large.png";
import DoneSmall from "@/assets/images/done-small.png";
import TodoLarge from "@/assets/images/todo-large.png";
import TodoSmall from "@/assets/images/todo-small.png";

interface Props {
  label: "TO DO" | "DONE";
  list: string[];
}

const ListBox: React.FC<Props> = ({ label, list }) => {
  const isEmpty = list.length === 0;
  return (
    <div className={`flex flex-col ${isEmpty ? "gap-16" : "gap-4"} flex-1 gap`}>
      <Label title={label} />
      {isEmpty ? (
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <Image
            src={label === "TO DO" ? TodoLarge : DoneLarge}
            alt="리스트가 없을 때 이미지"
            className="max-sm:hidden block"
          />
          <Image
            src={label === "TO DO" ? TodoSmall : DoneSmall}
            alt="리스트가 없을 때 이미지"
            className="max-sm:block hidden"
          />
          <span className="text-center text-slate-400 nanum-bold-16">
            할 일이 없어요. <br />
            TODO를 새롭게 추가해주세요!
          </span>
        </div>
      ) : (
        list.map((item, index) => <TodoItem todo={item} key={index} />)
      )}
    </div>
  );
};

export default ListBox;
