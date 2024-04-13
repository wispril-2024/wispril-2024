import Image from "next/image";

export default function MainSection() {
  return (
    <div className="relative flex min-h-[calc(100vh-80px)] items-center justify-center lg:min-h-[calc(100vh-96px)]">
      {/* Left Ornamen */}
      <Image
        src="/home/LeftOrnamen.png"
        alt="LeftOrnamen"
        width={280}
        height={280}
        className="absolute -top-4 left-0 z-10 w-28 sm:w-40 lg:-top-12 lg:w-72"
      />

      {/* Right Ornamen */}
      <Image
        src="/home/RightOrnamen.png"
        alt="RightOrnamen"
        width={280}
        height={280}
        className="absolute -top-4 right-0 z-10 w-28 sm:w-40 lg:-top-12 lg:w-72"
      />

      {/* Hero Logo */}
      <Image
        src="/home/LogoWispril.png"
        alt="LogoWispril"
        width={1200}
        height={300}
        className="absolute z-10 lg:w-[1000px] xl:w-[1300px]"
      />
    </div>
  );
}
