import Image from "next/image";

export default function Title() {
  return (
    <div className="z-10 flex flex-row items-center gap-1 lg:gap-6">
      {/* Lampu Kiri */}
      <Image
        src="/merchandise/Lampu.png"
        alt="Lampu"
        width={200}
        height={200}
        className="h-12 w-auto lg:h-[72px]"
      />

      {/* Title */}
      <h1 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-5xl font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-7xl">
        Merchandise
      </h1>

      {/* Lampu Kanan */}
      <Image
        src="/merchandise/Lampu.png"
        alt="Lampu"
        width={200}
        height={200}
        className="h-12 w-auto lg:h-[72px]"
      />
    </div>
  );
}
