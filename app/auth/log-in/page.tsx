import LogInForm from "./log-in-form";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Log In | Wispril 2024",
  openGraph: {
    ...openGraphTemplate,
    title: "Log In | Wispril 2024",
  },
  twitter: {
    ...twitterTemplate,
    title: "Log In | Wispril 2024",
  },
};

const LogInPage = async () => {
  const session = await getServerSession(authOptions);

  // Redirect if already logged in
  if (session) {
    redirect("/");
  }

  return (
    <main className="relative flex h-full min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-gradient-to-r from-[#510007] to-[#330004] px-6 pb-12 pt-16 sm:pb-16 sm:pt-32 lg:min-h-[calc(100vh-96px)] ">
      {/* Arch */}
      <Image
        className="absolute inset-0 z-20 w-full"
        src="/auth/log-in/arch.png"
        alt="arch"
        height={1928}
        width={1928}
      />

      {/* Siluet 1*/}
      <div className="absolute bottom-0 z-10 flex items-center justify-center">
        {[1, 2, 3, 4].map((index) => (
          <Image
            key={`siluet-${index}`}
            className=""
            src="/auth/log-in/siluet-burung-1.png"
            alt="siluet"
            width={289}
            height={514}
          />
        ))}
      </div>

      {/* Siluet 2*/}
      <div className="absolute bottom-0 z-10 flex items-center justify-center">
        {[1, 2, 3].map((index) => (
          <Image
            key={`siluet-${index}`}
            className=""
            src="/auth/log-in/siluet-burung-2.png"
            alt="siluet"
            width={287}
            height={658}
          />
        ))}
      </div>

      {/* Content */}
      <section className="relative z-40 flex w-full max-w-xs justify-center rounded-xl bg-[#FEB446] bg-opacity-10 px-4 pb-6 pt-20 backdrop-blur-sm lg:max-w-lg lg:px-8 lg:pb-8">
        {/* Title */}
        <div className="absolute -top-16 flex aspect-[5/2] w-full items-center justify-center lg:-top-24 lg:w-4/5">
          <Image
            src="/auth/log-in/title-login.png"
            alt="Title Banner"
            draggable={false}
            fill={true}
            sizes="(max-width: 1024px) 320px, 512px"
            className="z-0"
          />
          <h1 className="relative bottom-6 z-10 bg-gradient-to-r from-[#510007] to-[#B70010] bg-clip-text font-westmeath text-3xl text-transparent lg:bottom-7 lg:text-5xl">
            LOGIN
          </h1>
        </div>

        {/* Form */}
        <LogInForm />
      </section>
    </main>
  );
};

export default LogInPage;
