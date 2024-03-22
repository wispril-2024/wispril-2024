import Image from "next/image";

export default function Description() {
  return (
    <section>
      <div className=" flex flex-row items-center justify-center">
        <Image
          src="/about-us/sparkle.png"
          alt="Sparkle"
          width={100}
          height={100}
          className=" drop-shadow-[0px_0px_20px_#F4D38E]"
        />
        <h1 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-5xl font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)]  lg:text-8xl  ">
          About Us
        </h1>

        <Image
          src="/about-us/sparkle.png"
          alt="Sparkle"
          width={100}
          height={100}
          className="drop-shadow-[0px_0px_20px_#F4D38E] "
        />
      </div>
      <div className="max-w-8xl relative mt-24  md:mt-40 ">
        <Image
          src="/about-us/bannerUp.png"
          alt="Banner"
          width={284}
          height={271}
          className=" absolute -top-36  left-0   hidden md:flex lg:left-36"
        />

        <Image
          src="/about-us/bannerUp.png"
          alt="Banner"
          width={150}
          height={144}
          className="absolute  -top-20  left-3 md:hidden "
        />
        <p className="  px-20  text-justify font-cgp text-base font-normal text-[#ECCC9B]  md:px-28 md:text-xl lg:px-80 lg:text-2xl    ">
          Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </p>
        <Image
          src="/about-us/bannerDown.png"
          alt="Banner"
          width={284}
          height={271}
          className="absolute -bottom-36  right-0 hidden md:flex lg:right-36"
        />
        <Image
          src="/about-us/bannerDown.png"
          alt="Banner"
          width={150}
          height={144}
          className="absolute  -bottom-16  right-3  md:hidden"
        />
      </div>
    </section>
  );
}
