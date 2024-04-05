import Description from "./description";
import Faq from "./faq";
import Graduationparade from "./graduationparade";
import MainSection from "./mainSection";
import Sponsors from "./sponsors";
import Tanggallokasi from "./tanggallokasi";
import Timeline from "./timeline";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="relative">
          <Image
            src="/home/BackgroundWeb.png"
            alt="backgroundweb"
            layout="fill"
          />
          <MainSection />
          <Description />
          <Tanggallokasi />
        </div>
        <Graduationparade />
        <Timeline />
        <Sponsors />
        <Faq />
      </div>
    </div>
  );
}
