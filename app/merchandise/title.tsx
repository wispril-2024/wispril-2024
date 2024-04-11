import Image from "next/image";

export default function Title() {
  return (
    <section className="relative z-10 flex h-full w-fit flex-col items-center justify-center py-6 sm:py-28">
      {/* Lampu Kiri */}
      <Image
        src="/merchandise/Lampu.png"
        alt="Lampu"
        width={200}
        height={200}
        className="absolute -left-16 w-[50px] sm:-left-32 sm:w-[100px] xl:-left-64 xl:w-[150px]"
      />

      {/* Lampu Kanan */}
      <Image
        src="/merchandise/Lampu.png"
        alt="Lampu"
        width={200}
        height={200}
        className="absolute -right-16 w-[50px] sm:-right-32 sm:w-[100px] xl:-right-64 xl:w-[150px]"
      />

      <div className="z-10">
        <h1 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text font-westmeath text-3xl font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)] sm:text-6xl xl:text-8xl">
          Merchandise
        </h1>
      </div>
    </section>
  );
}
