import sparkle from "../../public/about-us/Sparkle.png";
import Image from "next/image";

export default function Title() {
  return (
    <section className="">
      <div className=" flex flex-row items-center justify-center">
        <Image
          src={sparkle}
          alt="Sparkle"
          width={100}
          height={100}
          className=" drop-shadow-[0px_0px_20px_#F4D38E]"
        />
        <h1 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text font-westmeath text-5xl font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)]  md:text-8xl  ">
          About Us
        </h1>

        <Image
          src={sparkle}
          alt="Sparkle"
          width={100}
          height={100}
          className="drop-shadow-[0px_0px_20px_#F4D38E] "
        />
      </div>
    </section>
  );
}
