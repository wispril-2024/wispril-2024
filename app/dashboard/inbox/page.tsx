"use client"
import MenfessInbox from "./menfessInbox";
import Image from "next/image";
import  MenfessPagination  from "./menfessPagination";
import { useState } from "react";

const data = [
  { name: "Anonymous 1", message: "Lorem ipsum dolor sit amet consectetur" },
  { name: "Anonymous 2", message: "Lorem ipsum dolor sit amet consectetur" },
  {
    name: "Anonymous 3",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim lectus mi, nisl ut. Neque augue dui habitant leo. Sed et dolor eget ipsum convallis pharetra. Maecenas vestibulum quam vel neque aliquam, at luctus turpis malesuada. Proin tristique enim eu dui efficitur, nec dictum libero fringilla. Vestibulum ante ipsum primis in faucibus orci ",
  },
  { name: "Anonymous 4", message: "Lorem ipsum dolor sit amet consectetur" },
  { name: "Anonymous 5", message: "Lorem ipsum dolor sit amet consectetur" },
  { name: "Anonymous 6", message: "Lorem ipsum dolor sit amet consectetur" },
  { name: "Anonymous 7", message: "Lorem ipsum dolor sit amet consectetur" },
  {
    name: "Anonymous 8",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim lectus mi, nisl ut. Neque augue dui habitant leo. Sed et dolor eget ipsum convallis pharetra. Maecenas vestibulum quam vel neque aliquam, at luctus turpis malesuada. Proin tristique enim eu dui efficitur, nec dictum libero fringilla. Vestibulum ante ipsum primis in faucibus orci ",
  },
  { name: "Anonymous 9", message: "Lorem ipsum dolor sit amet consectetur" },
  { name: "Anonymous 10", message: "Lorem ipsum dolor sit amet consectetur" },
  { name: "Anonymous 11", message: "Lorem ipsum dolor sit amet consectetur" },
  { name: "Anonymous 12", message: "Lorem ipsum dolor sit amet consectetur" },
];
const Page = () => {
  const [menfessItr, setMenfessItr] = useState<number>(0)
  return (
    <main className="flex flex-col items-center justify-center bg-[#2d0505] px-7 py-12 sm:p-12 lg:p-16">
      <Image
        src="/dashboard/light-background.png"
        alt="light-background"
        className="fixed bg-gradient-to-br from-[#510007]  to-[#181715] w-full h-full object-cover scale-[1.2] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        draggable={false}
        width={1000}
        height={1000}
      />

      <div className="relative z-10">
        <Image
          src="/dashboard/banner.png"
          draggable={false}
          alt="banner"
          width={700}
          height={700}
          className="w-80 lg:w-[512px]"
        />
        <div className="absolute left-1/2 top-[22%] -translate-x-1/2">
          <h1 className="inline-block bg-gradient-to-r from-[#510007] to-[#B70010] bg-clip-text font-westmeath text-3xl text-transparent lg:text-5xl">
            INBOX
          </h1>
        </div>
      </div>
      {data.length !== 0 && data.slice(menfessItr*5,menfessItr*5 + 5).map((idx) => (
          <MenfessInbox
          name={idx.name}
          pp="/dashboard/placeholder.png"
          message={idx.message}
          />
        
      ))}
      <MenfessPagination length={data.length} onChangeIdx={(i) => setMenfessItr(i)} itr={menfessItr}/>
    </main>
  );
};
export default Page;
