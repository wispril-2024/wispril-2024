import React from "react";

const SettingsView = () => {
  return (
    <div className="z-10 flex w-4/5 flex-row gap-10">
      <div className="w-2/5">
        <img
          src="/dashboard/placeholder.png"
          alt="profile-picture"
          width={463}
          height={680}
          style={{ aspectRatio: "463/680" }}
        />
      </div>
      <div className="flex w-3/5 flex-col gap-[48px]">
        <div className="flex flex-col">
          <h1 className="bg-gradient-to-tr from-[#F4D38E] to-[#EAC050] bg-clip-text font-westmeath text-[64px] font-normal text-transparent">
            SETTINGS
          </h1>
          <h1 className="font-cgp text-[36px] font-bold text-[#F4D38E]">
            @rhleena
          </h1>
          <h1 className="font-westmeath text-[64px] font-normal text-[#F4D38E]">
            LINA AZIZAH RAMADHANI HARDYANTI
          </h1>
          <h1 className="font-cgp text-[36px] font-semibold text-[#F4D38E]">
            Sistem dan Teknologi Informasi
          </h1>
          <button className="h-[72px] w-[320px] rounded-3xl border-[6px] border-[#B87D12] bg-[#FFDFA4]">
            <p className="rounded-[0.5rem] font-westmeath text-[36px] font-normal text-[#B87D12]">
              CHANGE PHOTO
            </p>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text font-westmeath text-[64px] font-normal text-transparent">
            SECURITY
          </h1>
          <label className="font-cgp text-[20px] font-semibold text-[#ECC786] ">
            New Password
          </label>
          <input
            className="h-[60px] w-[665px] rounded-[0.5rem] border-[1px] bg-gradient-to-r from-[#F4D692] to-[#FCECAF] opacity-30"
            type="password"
          />
          <label className="font-cgp text-[20px] font-semibold text-[#ECC786]">
            Re-enter New Password
          </label>
          <input
            className="h-[60px] w-[665px] rounded-[0.5rem] border-[1px] bg-gradient-to-r from-[#F4D692] to-[#FCECAF] opacity-30"
            type="password"
          />
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
