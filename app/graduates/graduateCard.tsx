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
        src={"/graduates/card.png"}
        width={716}
        height={965}
        alt="card"
      />
      <Image
        width={100}
        height={100}
        className="absolute bottom-0 left-0 right-0 top-0  -z-10 h-full w-full"
        src={"/graduates/placeholder.png"}
        alt="photo profile"
      />
      <div className="absolute bottom-[20%] left-1/2 flex -translate-x-1/2 flex-col items-center font-westmeath text-[#F4D38E]">
        <p className="whitespace-nowrap text-[1rem]">{data.name}</p>
        <p className="text-[0.8rem]">{data.program}</p>
      </div>
    </button>
  );
}
