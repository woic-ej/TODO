import classNames from "classnames";
import React from "react";

interface Props {
  title: "TO DO" | "DONE";
}

const Label: React.FC<Props> = ({ title }) => {
  const labelClass = classNames(
    "w-[100px] h-[36px] rounded-[23px] flex items-center justify-center font-ssan-tokki text-lg ",
    {
      "bg-lime-300 text-green-700": title === "TO DO",
      "bg-green-700 text-amber-300": title === "DONE",
    }
  );
  return <div className={labelClass}>{title}</div>;
};

export default Label;
