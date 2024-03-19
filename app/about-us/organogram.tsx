import ketua from "../../public/about-us/Ketua/Ketua.jpg";
import organogramTitleFrame from "../../public/about-us/headerorganogram.png";
import organogramTitleFrameLarge from "../../public/about-us/headerorganogramLarge.png";
import { CarouselSpacing } from "./carouselaboutus";
import CardComponent from "./component/card";
import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";

const cardData = [
  {
    frameColor: "yellow",
    photo: ketua.src,
    name: "Person One",
    title: "POSITION TITLE",
    batch: "Batch Info",
  },
  {
    frameColor: "red",
    photo: ketua.src,
    name: "Person Two",
    title: "POSITION TITLE",
    batch: "Batch Info",
  },
  {
    frameColor: "yellow",
    photo: ketua.src,
    name: "Person Two",
    title: "POSITION TITLE",
    batch: "Batch Info",
  },
  {
    frameColor: "red",
    photo: ketua.src,
    name: "Person Two",
    title: "POSITION TITLE",
    batch: "Batch Info",
  },
  {
    frameColor: "yellow",
    photo: ketua.src,
    name: "Person Two",
    title: "POSITION TITLE",
    batch: "Batch Info",
  },

  // Add more card objects as needed...
];

const OrganogramPage = () => {
  return (
    <div className="organogram-page  min-h-screen  ">
      {/* Organogram Title */}
      <div className="relative  flex  items-center justify-center ">
        <Image
          src={organogramTitleFrameLarge}
          alt="Organogram Title Frame"
          width={1127}
          height={310}
          className="relative "
        />
        <h1 className="absolute bg-gradient-to-r from-[#F4D38E]  to-[#EAC050] bg-clip-text text-center font-westmeath text-2xl font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)] sm:text-5xl md:bottom-32  md:text-7xl lg:bottom-44 lg:text-8xl ">
          Organogram
        </h1>
      </div>

      {/* Content section */}

      {/* Ketua */}
      <div className="relative flex flex-col items-center justify-center ">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>

      {/* Manajemen Personalia */}
      <h1 className=" mb-12 mt-24  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        Manajemen Personalia
      </h1>
      <div className="mb-12 flex flex-col items-center justify-center ">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>
      <div className=" mb-24 flex w-full flex-col items-center justify-center gap-16 md:flex-row ">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>

      {/* PSDM */}
      <h1 className=" mb-12   bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        PSDM
      </h1>
      <CarouselSpacing cardsData={cardData} />

      {/* Sekretariat */}
      <h1 className=" mb-12 mt-60  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        Sekretariat
      </h1>
      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>
      <CarouselSpacing cardsData={cardData} />

      {/* FUNDRAISING */}
      <h1 className=" mb-12 mt-60  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        FUNDRAISING
      </h1>
      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>
      <div className=" mb-24 flex w-full flex-col items-center justify-center gap-16 md:flex-row">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>

      {/* SPONSORSHIP */}
      <h1 className=" mb-12   bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        SPONSORSHIP
      </h1>
      <CarouselSpacing cardsData={cardData} />

      {/* RELASI */}
      <h1 className=" mb-12 mt-60  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        RELASI
      </h1>
      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>
      <div className=" mb-24 flex w-full flex-col items-center justify-center gap-16 md:flex-row">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>

      {/* EKSTRAKAMPUS */}
      <h1 className=" mb-12   bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        EKSTRAKAMPUS
      </h1>
      <CarouselSpacing cardsData={cardData} />

      {/* ACARA */}
      <h1 className=" mb-12 mt-60  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        ACARA
      </h1>
      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>
      <div className=" mb-24 flex w-full flex-col items-center justify-center gap-16 md:flex-row">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>

      {/* APPRECIATION */}
      <h1 className=" mb-12   bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        APPRECIATION
      </h1>
      <CarouselSpacing cardsData={cardData} />

      {/* KREATIF */}
      <h1 className=" mb-12 mt-60  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        KREATIF
      </h1>
      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>
      <div className=" mb-24 flex w-full flex-col items-center justify-center gap-16 md:flex-row">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>

      {/* PROPPAGANDA */}
      <h1 className=" mb-12   bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        PROPPAGANDA
      </h1>
      <CarouselSpacing cardsData={cardData} />

      {/* OPERASIONAL */}
      <h1 className=" mb-12 mt-60  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        OPERASIONAL
      </h1>
      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>
      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>
      <div className=" mb-24 flex w-full flex-col items-center justify-center gap-16 md:flex-row">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>

      {/* LOGISTIK */}
      <h1 className=" mb-12   bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        LOGISTIK
      </h1>
      <CarouselSpacing cardsData={cardData} />

      {/* LAPANGAN */}
      <h1 className="mb-12 mt-32   bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        LAPANGAN
      </h1>
      <CarouselSpacing cardsData={cardData} />

      {/* OPERASIONAL */}
      <h1 className=" mb-12 mt-60  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        OPERASIONAL
      </h1>

      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>
      <div className=" mb-24 flex w-full flex-col items-center justify-center gap-16 md:flex-row">
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
        <CardComponent
          frameColor="yellow"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>

      <CarouselSpacing cardsData={cardData} />
    </div>
  );
};

export default OrganogramPage;
