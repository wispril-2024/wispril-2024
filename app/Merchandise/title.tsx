import lampu from "../../public/Merchandise/Lampu.png";
import Image from "next/image";

export default function Title() {
  return (
    <section className="z-10 mt-10 md:mt-20 lg:mt-2 xl:mt-10">
      <div className=" flex flex-row items-center justify-center">
        <Image
          src={lampu}
          alt="lampu"
          width={100}
          height={100}
          className=" drop-shadow-[0px_0px_20px_#F4D38E]"
        />
        <h1 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text font-westmeath text-[46px] font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)]  md:text-8xl  ">
          Merchandise
        </h1>

        <Image
          src={lampu}
          alt="lampu"
          width={100}
          height={100}
          className="drop-shadow-[0px_0px_20px_#F4D38E] "
        />
      </div>
    </section>
  );
}
