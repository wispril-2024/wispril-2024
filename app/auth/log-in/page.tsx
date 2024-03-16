import LogInForm from "./log-in-form";
import { type Metadata } from "next";
import Image from "next/image";

const metadata: Metadata = {
  title: "Log In | Wispril 2024",
};

const LogInPage = async () => {
  return (
    <main className="relative flex h-full min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-4 py-12 md:py-32 lg:min-h-[calc(100vh-96px)]">
      {/* Background */}
      {/* Rectangle */}
      <Image
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/auth/log-in/rectangle-1.jpg"
        alt="Background Image"
        fill={true}
        sizes="100vw"
        priority
      />

      {/* Arch */}
      <Image
        className="absolute inset-0 w-full"
        src="/auth/log-in/arch.png"
        alt="arch"
        height={484}
        width={360}
      />

      {/* Siluet 1*/}
      <div className="absolute inset-20 -bottom-64 flex items-center justify-center md:-bottom-60 xl:-bottom-24">
        {[1, 2, 3, 4].map((index) => (
          <Image
            key={`siluet-${index}`}
            className="mx-16"
            src="/auth/log-in/siluet.svg"
            alt="siluet"
            width={400}
            height={400}
          />
        ))}
      </div>

      {/* Siluet 2*/}
      <div className="absolute inset-20 -bottom-72 flex items-center justify-center md:-bottom-80 xl:-bottom-32">
        {[1, 2, 3].map((index) => (
          <Image
            key={`siluet-${index}`}
            className="mx-36"
            src="/auth/log-in/siluet-2.svg"
            alt="siluet"
            width={400}
            height={400}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative mx-6 flex flex-col items-center justify-center rounded-lg bg-[#FEB446] bg-opacity-10 backdrop-blur-sm lg:rounded-2xl">
        <div className="relative flex w-full items-center justify-center">
          <h1 className="translate-1/2 right-1/2 z-20 -mt-16 bg-gradient-to-r from-red-800 to-red-600 bg-clip-text font-westmeath text-4xl font-bold text-transparent md:text-6xl xl:text-7xl">
            LOG IN
          </h1>
          <Image
            className="absolute inset-0 z-10 mx-auto -mt-20 w-full md:-mt-28"
            src="/auth/log-in/title-login.svg"
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
