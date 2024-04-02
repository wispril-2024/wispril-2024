import yellowFrame from "../../../public/about-us/bgCardKuning.png";
import redFrame from "../../../public/about-us/bgCardMerah.png";
import Image from "next/image";

type CardProps = {
  frameColor: string; // "yellow" or "red"
  photo: string; // URL of the photo
  name: string; // Name of the person
  title: string; // Title, such as "KETUA BIDANG"
  batch: string; // Batch, such as "ME'22"
};

const CardComponent: React.FC<CardProps> = ({
  frameColor,
  photo,
  name,
  title,
  batch,
}) => {
  const frameSrc = frameColor === "red" ? redFrame : yellowFrame;

  const textColor = frameColor === "red" ? "text-[#ECCC9B]" : "text-[#A01B14]";
  const gradientColor =
    frameColor === "red"
      ? "bg-gradient-to-r  from-[#F4D38E] to-[#EAC050] bg-clip-text text-transparent  "
      : "bg-gradient-to-r  from-[#A70002] to-[#A01B14] bg-clip-text text-transparent ";

  return (
    <div className=" relative h-[275px] w-[200px]  overflow-hidden align-middle md:h-[350px] md:w-[275px]">
      <Image
        src={frameSrc}
        alt="Card Frame"
        layout="fill"
        className="absolute z-30 "
      />
      <div className="absolute flex h-full w-full flex-col items-center justify-center">
        <div className="absolute -top-3 z-20  flex h-[200px] w-[180px] items-center overflow-hidden  md:left-1 md:h-[275px] md:w-full">
          <Image
            src={photo}
            alt={name}
            width={260}
            height={200}
            className="object-cover"
          />
        </div>

        <div className="absolute bottom-10 z-30 w-full  max-w-40 overflow-hidden text-center   sm:bottom-10 md:bottom-12 lg:max-w-56">
          <p
            className={` ${gradientColor}   overflow-hidden text-nowrap    text-center font-westmeath text-base font-normal  md:text-2xl`}
          >
            {title}
          </p>
          <p
            className={`${textColor}  overflow-hidden  text-nowrap   font-cgp text-xs  font-normal md:text-xl`}
          >
            {name}
          </p>

          <p className={`${textColor} font-cgp text-xs font-normal md:text-xl`}>
            {batch}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
