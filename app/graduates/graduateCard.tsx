import Image from "next/image";

type GraduateCardProps = {
  onClick?: () => void;
};

export function GraduateCard({ onClick = () => {} }: GraduateCardProps) {
  return (
    <button className="relative" onClick={onClick}>
      <Image
        draggable={false}
        src={"/graduates/card.png"}
        width={716 / 3}
        height={965 / 3}
        alt="card"
      />
      <div className="absolute bottom-[20%] left-1/2 flex -translate-x-1/2 flex-col items-center font-westmeath text-[#F4D38E]">
        <p className="whitespace-nowrap text-[1rem]">Nama Wisudawan</p>
        <p className="text-[0.8rem]">Nama Jurusan</p>
      </div>
    </button>
  );
}
