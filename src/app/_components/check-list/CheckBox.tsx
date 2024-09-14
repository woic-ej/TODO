import React from "react";
import DefaultCheckBox from "@/assets/icons/checkbox/checkbox-default.svg";
import ActiveCheckBox from "@/assets/icons/checkbox/checkbox-active.svg";

interface Props {
  isChecked: boolean;
  onClick: () => void;
}

const CheckBox: React.FC<Props> = ({ isChecked, onClick }) => {
  return (
    <button onClick={onClick}>
      {isChecked ? <ActiveCheckBox /> : <DefaultCheckBox />}
    </button>
  );
};

export default CheckBox;
