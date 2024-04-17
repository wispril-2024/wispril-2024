import Image from "next/image";

export default function MainSection() {
  return (
    <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center lg:min-h-[calc(100vh-96px)]">
      {/* Left Ornamen */}
      <Image
        src="/home/LeftOrnamen.png"
        alt="LeftOrnamen"
        width={280}
        height={280}
        className="absolute left-2 top-0 z-10 w-28 sm:w-32 lg:w-52"
      />

      {/* Right Ornamen */}
      <Image
        src="/home/RightOrnamen.png"
        alt="RightOrnamen"
        width={280}
        height={280}
        className="absolute right-5 top-0 z-10 w-28 sm:w-32 lg:w-52"
      />

      {/* Hero Logo */}
      <Image
        src="/home/LogoWispril.png"
        alt="LogoWispril"
        width={1200}
        height={300}
        className="absolute z-10 sm:w-[600px] lg:w-[800px] xl:w-[1100px]"
        data-aos="fade-up"
      />
    </div>
  );
}
