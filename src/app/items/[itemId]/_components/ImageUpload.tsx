"use client";

import React, { useRef, useState } from "react";
import ImageIcon from "@/assets/icons/img-icon.svg";
import PlusButton from "@/app/_components/buttons/PlusButton";
import Image from "next/image";
import EditButton from "@/app/_components/buttons/EditButton";
import { postData } from "@/app/_api/api";
import useUpdateItemStore from "@/app/_store/updateItemStore";

interface Props {
  imageUrl: string;
}

const MAX_SIZE = 5 * 1024 * 1024; // 5MB

const ImageUpload: React.FC<Props> = ({ imageUrl }) => {
  const [image, setImage] = useState<string>(imageUrl);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { updateItem, setUpdateItem } = useUpdateItemStore();

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const isEnglishName = /^[a-zA-Z0-9._-]+$/.test(file.name);

      if (isEnglishName && file.size <= MAX_SIZE) {
        const formData = new FormData();
        formData.append("image", file);

        try {
          const response = await postData("images/upload", formData);
          setImage(response.url); // 서버 응답에 따라 URL 저장
          setUpdateItem({ ...updateItem, imageUrl: response.url });
          if (fileInputRef.current) {
            fileInputRef.current.value = ""; // 입력 필드 리셋
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error(
          "파일 이름이 영어로 되어 있지 않거나, 파일 크기가 너무 큽니다."
        );
      }
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`flex relative items-center justify-center md:w-[384px] w-full h-[311px] ${
        !image && "border-2 border-dashed border-slate-300 bg-slate-50"
      } rounded-3xl`}
    >
      {image ? (
        <Image
          src={image}
          alt="todo image"
          className="w-full h-full rounded-3xl object-cover"
          fill
        />
      ) : (
        <ImageIcon />
      )}
      <div className="absolute bottom-4 right-4">
        {image ? (
          <EditButton onClick={handleUploadClick} />
        ) : (
          <PlusButton onClick={handleUploadClick} />
        )}
        <input
          type="file"
          name="image"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept=".jpg,.jpeg,.png"
        />
      </div>
    </div>
  );
};

export default ImageUpload;
