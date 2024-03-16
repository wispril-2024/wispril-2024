"use client";

import { Dropdown } from "./dropdown";
import "./style.css";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Dropdown options={["Test"]} placeholder="Fakultas" />
      <img src="/graduates/banner.svg" />
      <p className="font-westmeath text-3xl">
        Jangan Lupa Kirimkan WisprillFess kepada Temanmu!
      </p>
    </div>
  );
};

export default Page;
