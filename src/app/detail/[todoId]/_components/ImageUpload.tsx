import React from "react";
import ImageIcon from "@/assets/icons/img-icon.svg";
import PlusButton from "@/app/_components/buttons/PlusButton";

const ImageUpload: React.FC = () => {
  return (
    <div className="flex relative items-center justify-center custom-md:w-[384px] w-full h-[311px] border-2 border-dashed border-slate-300 bg-slate-50 rounded-3xl">
      <ImageIcon />
      <div className="absolute bottom-4 right-4">
        <PlusButton />
      </div>
    </div>
  );
};

export default ImageUpload;
