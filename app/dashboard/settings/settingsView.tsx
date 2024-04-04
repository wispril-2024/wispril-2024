"use client";

import ImageUploadButton from "./ImageUploadButton";
import placeholder from "@/public/dashboard/placeholder.png";
import Image from "next/image";
import React, { useState } from "react";

const SettingsView = () => {
  const [onImage, setOnImage] = useState<string | null>(null);
  const handleImageUpload = (image: string | null) => {
    setOnImage(image);
  };
  return (
    <div className="z-10 flex w-4/5 flex-row gap-10">
      <div className="w-2/5">
        <Image
          src={onImage ? onImage : placeholder}
          alt="profile-picture"
          width={463}
          height={680}
          className="w-full"
        />
      </div>
      <div className="flex w-3/5 flex-col gap-[32px]">
        <div className="flex flex-col gap-[36px]">
          <div className="gap-[30px]">
            <div>
              <h1 className="absolute bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text font-westmeath text-[64px] font-normal text-transparent blur-sm">
                SETTINGS
              </h1>
              <h1 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text font-westmeath text-[64px] font-normal text-transparent">
                SETTINGS
              </h1>
            </div>
            <h1 className="font-cgp text-[36px] font-bold text-[#F4D38E]">
              @rhleena
            </h1>
            <h1 className="font-westmeath text-[64px] font-normal text-[#F4D38E]">
              LINA AZIZAH RAMADHANI HARDYANTI
            </h1>
            <h1 className="font-cgp text-[36px] font-semibold text-[#F4D38E]">
              Sistem dan Teknologi Informasi
            </h1>
          </div>
          <ImageUploadButton
            onImage={handleImageUpload}
            className="h-[72px] w-[320px] rounded-3xl border-[6px] border-[#B87D12] bg-[#FFDFA4]"
          >
            <p className="rounded-[0.5rem] font-westmeath text-[36px] font-normal text-[#B87D12]">
              CHANGE PHOTO
            </p>
          </ImageUploadButton>
        </div>
        <div className="flex flex-col gap-[36px]">
          <div className="flex flex-col gap-[24px]">
            <div>
              <h1 className="absolute bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text font-westmeath text-[64px] font-normal text-transparent blur-sm">
                SECURITY
              </h1>
              <h1 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text font-westmeath text-[64px] font-normal text-transparent">
                SECURITY
              </h1>
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col">
                <label className="font-cgp text-[20px] font-semibold text-[#ECC786] ">
                  Old Password
                </label>
                <input
                  className="h-[60px] w-full rounded-[0.5rem] border-[1px] border-[#ECC786] bg-gradient-to-r from-[#F4D692] to-[#FCECAF] opacity-30"
                  type="password"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-cgp text-[20px] font-semibold text-[#ECC786] ">
                  New Password
                </label>
                <input
                  className="h-[60px] w-full rounded-[0.5rem] border-[1px] border-[#ECC786] bg-gradient-to-r from-[#F4D692] to-[#FCECAF] opacity-30"
                  type="password"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-cgp text-[20px] font-semibold text-[#ECC786]">
                  Re-enter New Password
                </label>
                <input
                  className="z-10 h-[60px] w-full rounded-[0.5rem] bg-gradient-to-r from-[#F4D692] to-[#FCECAF] opacity-30"
                  type="password"
                />
              </div>
            </div>
          </div>
          <button className="h-[72px] w-[320px] rounded-3xl border-[6px] border-[#B87D12] bg-[#FFDFA4]">
            <p className="rounded-[0.5rem] font-westmeath text-[36px] font-normal text-[#B87D12]">
              FORGET PASSWORD
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
