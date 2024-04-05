import Image from "next/image";

export default function MainSection() {
  return (
    <section>
      <div
        className="relative flex min-h-screen items-center justify-center"
        style={{ height: "100%" }}
      >
        <div className="absolute left-0 top-0 w-1/4 max-w-xs">
          <Image
            src="/home/LeftOrnamen.png"
            alt="LeftOrnamen"
            width={280}
            height={280}
            layout="responsive"
          />
        </div>
        <div className="absolute right-0 top-0 w-1/4 max-w-xs">
          <Image
            src="/home/RightOrnamen.png"
            alt="RightOrnamen"
            width={280}
            height={280}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src="/home/LogoWispril.png"
            alt="LogoWispril"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}
