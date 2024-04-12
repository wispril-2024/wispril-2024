import { Loader2 } from "lucide-react";
import Image from "next/image";

const LoginLoadingPage = () => {
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
      <section className="z-10 flex flex-row items-center gap-2 lg:gap-4">
        <Loader2 className="size-8 animate-spin text-[#ECC786] lg:size-10" />
        <h1 className="font-westmeath text-3xl text-[#ECC786] lg:text-5xl">
          Loading...
        </h1>
      </section>
    </main>
  );
};

export default LoginLoadingPage;
