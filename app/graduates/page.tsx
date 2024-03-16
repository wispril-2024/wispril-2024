"use server";

import { GraduateView } from "./graduatesView";
import "./style.css";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center px-16 py-12">
      <img src="/graduates/banner.svg" />
      <p className="font-westmeath text-3xl">
        Jangan Lupa Kirimkan WisprillFess kepada Temanmu!
      </p>
      <GraduateView />
    </div>
  );
};

export default Page;
