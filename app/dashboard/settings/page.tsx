import { ProfileForm } from "./profile-form";
import { SecurityForm } from "./security-form";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Settings | Wispril 2024",
  openGraph: {
    ...openGraphTemplate,
    title: "Settings | Wispril 2024",
  },
  twitter: {
    ...twitterTemplate,
    title: "Settings | Wispril 2024",
  },
};

const Page = async () => {
  // Get & validate session
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/log-in");
  }

  return (
    <main className="relative flex min-h-[calc(100vh-80px)] justify-center bg-gradient-to-br from-[#5e0000] to-[#430000] px-6 py-12 sm:p-16 lg:min-h-[calc(100vh-96px)]">
      {/* Background Image */}
      <Image
        src="/dashboard/bebek-background.png"
        alt="Background Decoration"
        className="z-0 object-cover object-top opacity-20"
        draggable={false}
        fill={true}
        sizes="100vw"
      />

      <div className="z-10 flex w-full max-w-2xl flex-col items-center gap-6 lg:gap-8">
        {/* Title */}
        <div className="relative flex h-24 w-80 items-center justify-center lg:h-36 lg:w-[512px]">
          <Image
            src="/components/banner.png"
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
        <ProfileForm session={session} />

        {/* Security */}
        <SecurityForm />
      </div>
    </main>
  );
};
export default Page;
