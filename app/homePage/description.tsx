import Image from "next/image";

export default function Description() {
  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-20">
      <div className="relative flex w-full items-center justify-center">
        {/* Left ornament */}

        <Image
          width={100}
          height={100}
          src="/home/LeftOrnamenDesc.png"
          alt="LeftOrnamentDesc"
          className="hidden max-w-xs pr-1 sm:block"
        />
        <Image
          width={40}
          height={40}
          src="/home/LeftOrnamenDesc.png"
          alt="LeftOrnamentDesc"
          className="block max-w-xs pr-1 sm:hidden"
        />

        {/* Text */}
        <div className="min-w-xs overflow-hidden bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent sm:text-6xl xl:text-8xl">
          <h1>Welcome To</h1>
        </div>

        {/* Right ornament */}
        <Image
          width={100}
          height={100}
          src="/home/RightOrnamenDesc.png"
          alt="RightOrnamentDesc"
          className="hidden max-w-xs pl-1 sm:block xl:pl-0"
        />
        <Image
          width={40}
          height={40}
          src="/home/RightOrnamenDesc.png"
          alt="RightOrnamentDesc"
          className="block max-w-xs pl-1 sm:hidden"
        />
      </div>
      <div className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent sm:text-6xl xl:text-8xl">
        <h1>Wisuda April 2024</h1>
      </div>

      <h2 className="mt-4 text-center font-cgp text-sm font-bold text-[#ECCC9B] sm:text-xl md:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nobis?
      </h2>

      <div className="mt-4 flex max-w-full flex-col gap-2 overflow-y-auto rounded-xl bg-[rgba(254,180,70,0.12)] p-6 text-center backdrop-blur-sm md:h-[400px]">
        <p className="text-justify font-cgp text-base font-normal text-[#ECCC9B] sm:text-2xl">
          Terciptanya Parade Wisuda April ITB 2024 yang berlangsung dengan
          inovatif, bermakna, sistematis, serta bersinergi dalam mengapresiasi
          wisudawan
        </p>
      </div>
    </section>
  );
}
