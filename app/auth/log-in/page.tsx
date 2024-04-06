import LogInForm from "./log-in-form";
import { type Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Log In | Wispril 2024",
};

const LogInPage = async () => {
  return (
    <main className="relative flex h-full min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-gradient-to-r from-[#510007] to-[#330004] px-4 py-16 md:py-32 lg:min-h-[calc(100vh-96px)]">
      {/* Background */}

      {/* Arch */}
      <Image
        className="absolute inset-0 w-full"
        src="/auth/log-in/arch.png"
        alt="arch"
        height={1928}
        width={1928}
      />

      {/* Siluet 1*/}
      <div className="absolute bottom-0 flex items-center justify-center">
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
      <div className="absolute bottom-0 flex items-center justify-center">
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
      <div className="relative mx-6 flex flex-col items-center justify-center rounded-lg bg-[#FEB446] bg-opacity-10 backdrop-blur-sm lg:rounded-2xl">
        <div className="relative flex w-full items-center justify-center">
          <h1 className="translate-1/2 right-1/2 z-20 -mt-16 bg-gradient-to-r from-red-800 to-red-600 bg-clip-text font-westmeath text-4xl font-bold text-transparent md:text-6xl">
            LOG IN
          </h1>
          <Image
            className="absolute inset-0 z-10 mx-auto -mt-20 w-full md:-mt-28"
            src="/auth/log-in/title-login.png"
            alt="title"
            width={640}
            height={640}
          />
        </div>
        <div className="z-30 w-full px-6 md:px-12 lg:px-10 xl:px-20">
          <LogInForm />
        </div>
      </div>
    </main>
  );
};

export default LogInPage;
