"use server";

import { GraduateView } from "./graduatesView";
import "./style.css";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center px-16 py-12">
      <Image
        src="/graduates/banner.svg"
        alt="banner"
        width={1000}
        height={1000}
      />
      <p className="font-westmeath text-3xl">
        Jangan Lupa Kirimkan WisprillFess kepada Temanmu!
      </p>
      <GraduateView />
    </div>
  );
};

export default Page;
