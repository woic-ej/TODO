import React from "react";
import BigPlus from "@/app/_components/icons/BigPlus";

interface Props {
  onClick?: () => void;
}

const PlusButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[64px] h-[64px] flex justify-center items-center bg-slate-200 rounded-full "
    >
      <BigPlus className="stroke-[#64748B]" />
    </button>
  );
};

export default PlusButton;
