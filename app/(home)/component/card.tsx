import Image from "next/image";

type CardProps = {
  frameSrc: string;
  photo: string; // URL of the photo
};

const CardComponent: React.FC<CardProps> = ({ frameSrc, photo }) => {
  return (
    <div className="relative mt-8 h-[125px] w-[200px] overflow-hidden align-middle md:h-[200px] md:w-[275px]">
      <Image src={frameSrc} alt="Card Frame" fill className="absolute z-30" />
      <div className="absolute flex h-full w-full flex-col items-center justify-center">
        <div className="absolute z-20 mt-8 flex h-[200px] w-[180px] items-center overflow-hidden md:left-1 md:h-full md:w-11/12">
          <Image
            src={photo}
            alt={photo}
            width={260}
            height={100}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
