import React from "react";
import EditIcon from "@/assets/icons/button/edit-icon.svg";

interface Props {
  onClick?: () => void;
}

/**
 * 이미지 수정 버튼
 * @param onClick
 */
const EditButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[64px] h-[64px] flex items-center justify-center border-2 border-slate-900 rounded-full bg-slate-900/50"
    >
      <EditIcon />
    </button>
  );
};

export default EditButton;
