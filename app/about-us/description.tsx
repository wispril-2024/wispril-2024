import Image from "next/image";

export default function Description() {
  return (
    <section className="z-10 flex flex-col items-center gap-20 lg:gap-28">
      {/* Title */}
      <div
        data-aos="fade-up"
        className="flex flex-row items-center justify-center gap-4 lg:gap-8"
      >
        {/* Star decoration */}
        <Image
          src="/about-us/sparkle.png"
          alt="Sparkle"
          width={50}
          height={50}
          className="aspect-square w-14 drop-shadow-[0px_0px_20px_#F4D38E] lg:w-16"
        />

        {/*  Title */}
        <h1 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-5xl font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-7xl">
          About Us
        </h1>

        {/* Star decoration */}
        <Image
          src="/about-us/sparkle.png"
          alt="Sparkle"
          width={50}
          height={50}
          className="aspect-square w-14 drop-shadow-[0px_0px_20px_#F4D38E] lg:w-16"
        />
      </div>

      {/* Short Description */}
      <div
        data-aos="fade-up"
        className="relative w-full max-w-2xl px-12 sm:px-16 lg:max-w-4xl"
      >
        {/* Top left banner */}
        <Image
          src="/about-us/bannerUp.png"
          alt="Banner"
          width={200}
          height={200}
          className="absolute -top-11 left-1 aspect-square h-auto w-28 sm:-top-12 sm:left-4 lg:-left-2 lg:-top-16 lg:w-32"
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
          width={200}
          height={200}
          className="absolute -bottom-11 right-1 aspect-square h-auto w-28 sm:-bottom-12 sm:right-4 lg:-bottom-16 lg:-right-2 lg:w-32"
        />
      </div>
    </section>
  );
}
