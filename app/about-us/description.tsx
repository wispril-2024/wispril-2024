import Image from "next/image";

export default function Description() {
  return (
    <section className="z-10 flex flex-col items-center gap-16 lg:gap-24">
      {/* Title */}
      <div className="flex flex-row items-center justify-center">
        {/* Star decoration */}
        <Image
          src="/about-us/sparkle.png"
          alt="Sparkle"
          width={100}
          height={100}
          className="drop-shadow-[0px_0px_20px_#F4D38E]"
        />

        {/*  Title */}
        <h1 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-5xl font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)]  lg:text-7xl">
          About Us
        </h1>

        {/* Star decoration */}
        <Image
          src="/about-us/sparkle.png"
          alt="Sparkle"
          width={100}
          height={100}
          className="drop-shadow-[0px_0px_20px_#F4D38E] "
        />
      </div>

      {/* Short Description */}
      <div className="relative w-full max-w-2xl px-12 sm:px-16 lg:max-w-4xl">
        {/* Top left banner */}
        <Image
          src="/about-us/bannerUp.png"
          alt="Banner"
          width={150}
          height={144}
          className="absolute -left-4 -top-16 aspect-square h-auto w-36 sm:-left-0 lg:-left-8 lg:-top-24 lg:w-48"
        />

        {/* Text */}
        <p className="text-justify font-cgp text-base font-normal text-[#ECCC9B] lg:text-2xl">
          Parade Wisuda April 2024 adalah kegiatan yang ditujukan untuk
          memaksimalkan hak dan kesempatan dalam mengapresiasi wisudawan dan
          sebagai wahana integrasi apresiasi massa kampus.
        </p>

        {/* Bottom Right */}
        <Image
          src="/about-us/bannerDown.png"
          alt="Banner"
          width={150}
          height={144}
          className="absolute -bottom-16 -right-4 aspect-square h-auto w-36 sm:-right-0 lg:-bottom-24 lg:-right-8 lg:w-48"
        />
      </div>
    </section>
  );
}
