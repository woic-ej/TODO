import React from "react";
import DefaultCheckBox from "@/assets/icons/checkbox/checkbox-default.svg";
import ActiveCheckBox from "@/assets/icons/checkbox/checkbox-active.svg";

interface Props {
  isChecked: boolean;
  onClick: (e: React.MouseEvent) => void;
}

/**
 * 할 일 목록 체크박스 컴포넌트
 * @param isChecked : 체크 여부
 * @param onClick
 */
const CheckBox: React.FC<Props> = ({ isChecked, onClick }) => {
  return (
    <button onClick={onClick}>
      {isChecked ? <ActiveCheckBox /> : <DefaultCheckBox />}
    </button>
  );
};

export default CheckBox;
