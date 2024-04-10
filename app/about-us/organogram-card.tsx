import { cn } from "@/lib/utils";
import type { OrganogramData } from "@/types/organogram";
import Image from "next/image";

type OrganogramCardProps = Omit<OrganogramData, "division">;

const OrganogramCard: React.FC<OrganogramCardProps> = ({
  frameColor,
  photo,
  name,
  title,
  batch,
}) => {
  const frameSrc =
    frameColor === "red"
      ? "/about-us/bgCardMerah.png"
      : "/about-us/bgCardKuning.png";

  const textColor = frameColor === "red" ? "text-[#ECCC9B]" : "text-[#A01B14]";
  const gradientColor =
    frameColor === "red"
      ? "bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-transparent  "
      : "bg-gradient-to-r from-[#A70002] to-[#A01B14] bg-clip-text text-transparent ";

  return (
    <div className="relative h-[275px] w-[200px] overflow-hidden align-middle lg:h-[350px] lg:w-[275px]">
      <Image
        src={frameSrc}
        alt="Card Frame"
        layout="fill"
        sizes="(max-width: 1024px) 200px, 275px"
        className="absolute z-30"
      />
      <div className="absolute flex h-full w-full flex-col items-center justify-center">
        <div className="absolute -top-4 left-0.5 z-20 flex  h-[225px] w-[195px] items-center overflow-hidden object-fill lg:left-1 lg:h-[275px] lg:w-full">
          <Image src={photo} alt={name} width={260} height={240} className="" />
        </div>

        <div className="absolute bottom-10 z-30 w-full  max-w-40 overflow-hidden text-center sm:bottom-10 lg:bottom-12 lg:max-w-56">
          <p
            className={cn(
              "overflow-hidden text-nowrap text-center font-westmeath text-base font-normal lg:text-2xl",
              gradientColor
            )}
          >
            {title}
          </p>
          <p
            className={cn(
              "overflow-hidden text-nowrap font-cgp text-sm font-normal lg:text-xl",
              textColor
            )}
          >
            {name}
          </p>

          <p
            className={cn("font-cgp text-xs font-normal lg:text-lg", textColor)}
          >
            {batch}
          </p>
        </div>
      </div>
    </div>
  );
};
export default OrganogramCard;
