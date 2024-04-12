import { ProfileForm } from "./profile-form";
import { SecurityForm } from "./security-form";
import { mockSession } from "@/lib/mocks/session";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Settings | Wispril 2024",
};

const Page = async () => {
  // Get session

  // Get session data

  return (
    <main className="relative flex min-h-[calc(100vh-80px)] justify-center bg-gradient-to-br from-[#5e0000] to-[#430000] px-6 py-12 sm:p-16 lg:min-h-[calc(100vh-96px)]">
      <div className="flex w-full max-w-2xl flex-col items-center gap-6 lg:gap-8">
        {/* Title */}
        <div className="relative flex h-24 w-80 items-center justify-center lg:h-36 lg:w-[512px]">
          <Image
            src="/dashboard/banner.png"
            alt="Title Banner"
            draggable={false}
            fill={true}
            sizes="(max-width: 640px) vw, 640px"
            className="z-0"
          />
          <h1 className="relative bottom-5 z-10 inline-block bg-gradient-to-r from-[#510007] to-[#B70010] bg-clip-text font-westmeath text-3xl text-transparent lg:bottom-7 lg:text-5xl">
            SETTINGS
          </h1>
        </div>

        {/* Profile */}
        <ProfileForm session={mockSession} />

        {/* Security */}
        <SecurityForm />
      </div>
    </main>
  );
};
export default Page;
