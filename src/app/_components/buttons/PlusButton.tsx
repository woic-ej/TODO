import React from "react";
import PlusIcon from "@/assets/icons/plus-button-icon.svg";

interface Props {
  onClick: () => void;
}

const PlusButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[64px] h-[64px] flex justify-center items-center bg-slate-200 rounded-full "
    >
      <PlusIcon />
    </button>
  );
};

export default PlusButton;
