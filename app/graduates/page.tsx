import { GraduateView } from "./graduates-view";
import { db } from "@/db/drizzle";
import { UserPublic } from "@/types/user";
import type { Metadata } from "next";
import Image from "next/image";
import * as React from "react";

export const metadata: Metadata = {
  title: "Graduates",
};

// static route
export const dynamic = "force-static";

// Page
const Page = async () => {
  // Get all graduates from db
  const graduates = await db.query.users.findMany({
    columns: {
      id: true,
      nim: true,
      name: true,
      username: true,
      image: true,
      faculty: true,
      major: true,
    },
    limit: 1, // REMOVE
  });
  // const graduates: UserPublic[] = [];

  return (
    <main className="flex flex-col items-center justify-center bg-[#2d0505] px-7 py-12 sm:p-12 lg:p-16">
      {/* Lamp Background */}
      {/* <Image
        src="/graduates/lamp-background.png"
        draggable={false}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        alt="banner"
        width={1000}
        height={1000}
      /> */}

      {/* Title */}
      <div className="relative z-10">
        <Image
          src="/graduates/banner.png"
          draggable={false}
          alt="banner"
          width={700}
          height={700}
          className="w-80 lg:w-[512px]"
        />
        <div className="absolute left-1/2 top-[22%] -translate-x-1/2">
          <h1 className="inline-block bg-gradient-to-r from-[#510007] to-[#B70010] bg-clip-text font-westmeath text-3xl text-transparent lg:text-5xl">
            GRADUATES
          </h1>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-center font-westmeath text-xl text-[#F4D38E] lg:text-3xl">
        Jangan Lupa Kirimkan WisprilFess kepada Temanmu!
      </p>

      {/* Graduates Filters and Views */}
      <React.Suspense fallback={null}>
        <GraduateView graduates={graduates} />
      </React.Suspense>
    </main>
  );
};

export default Page;
