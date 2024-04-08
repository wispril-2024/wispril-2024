import Image from "next/image";

export default function Description() {
  return (
    <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-4 lg:h-[calc(100vh-96px)]">
      <div className="relative z-10">
        {/* Left Ornamen */}
        <Image
          width={100}
          height={100}
          src="/home/LeftOrnamenDesc.png"
          alt="LeftOrnamentDesc"
          className="absolute -left-12 z-10 w-[36px] sm:-left-24 sm:w-[65px] xl:-left-36 xl:w-[100px]"
        />

        {/* Right Ornamen */}
        <Image
          width={100}
          height={100}
          src="/home/RightOrnamenDesc.png"
          alt="RightOrnamentDesc"
          className="absolute -right-12 z-10 w-[36px] sm:-right-24 sm:w-[65px] xl:-right-36 xl:w-[100px]"
        />

        <h1 className="min-w-xs w-fit overflow-hidden bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent sm:text-6xl xl:text-8xl">
          WELCOME TO
        </h1>
      </div>

      <div className="z-10 flex flex-col items-center justify-center gap-4 pb-12">
        <h1 className="w-fit bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent sm:text-6xl xl:text-8xl">
          WISUDA APRIL 2024
        </h1>
        <p className="px-12 text-center font-cgp text-sm font-bold text-[#ECCC9B] sm:text-xl md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nobis?
        </p>
      </div>

      <div className="z-10 mx-12 flex h-fit max-w-[800px] flex-col gap-2 overflow-y-auto rounded-xl bg-[rgba(254,180,70,0.12)] p-6 text-center backdrop-blur-sm md:h-[200px]">
        <p className="font-cgp text-base font-normal text-[#ECCC9B] sm:text-2xl">
          Terciptanya Parade Wisuda April ITB 2024 yang berlangsung dengan
          inovatif, bermakna, sistematis, serta bersinergi dalam mengapresiasi
          wisudawan
        </p>
      </div>
    </div>
  );
}
