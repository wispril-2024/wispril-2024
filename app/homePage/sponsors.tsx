import Image from "next/image";

export default function Sponsors() {
  return (
    <section>
      <div className="mt-20">
        <Image
          src="/home/bannerUp1.png"
          alt="bannerUp1"
          layout="contain"
          width={200}
          height={10}
          className="w-full"
        />
        <h1 className="font-wesmeath mt-8 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent sm:text-4xl md:text-6xl xl:text-8xl">
          {" "}
          SPONSORS
        </h1>
        <div className="mb-80"></div>
        <Image
          src="/home/bannerDown1.png"
          alt="bannerDown1"
          layout="contain"
          width={200}
          height={10}
          className="w-full"
        />
      </div>
    </section>
  );
}
