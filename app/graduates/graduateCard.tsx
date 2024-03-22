import { Graduate } from "./graduatesView";
import Image from "next/image";

type GraduateCardProps = {
  onClick?: () => void;
  data: Graduate;
};

export function GraduateCard({ onClick = () => {}, data }: GraduateCardProps) {
  return (
    <button className="relative" onClick={onClick}>
      <Image
        draggable={false}
        src={"/graduates/placeholder.png"}
        width={716}
        height={965}
        alt="card"
      />
      <Image
        width={716}
        height={965}
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
        src={"/graduates/card.png"}
        alt="photo profile"
      />
      <div className="absolute left-1/2 top-[63%] flex -translate-x-1/2 flex-col items-center font-westmeath text-[#F4D38E]">
        <p className="whitespace-nowrap text-lg">{data.name}</p>
        <p className="text-base">{data.program}</p>
      </div>
    </button>
  );
}
