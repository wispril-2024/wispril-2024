import organogramTitleFrame from "../../public/about-us/headerorganogram.png";
import organogramTitleFrameLarge from "../../public/about-us/headerorganogramLarge.png";
import ketua from "../../public/about-us/ketua/ketua.jpg";
import { CarouselSpacing } from "./carouselaboutus";
import CardComponent from "./component/card";
import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";

const cardDataPSDM = [
  {
    frameColor: "yellow",
    photo: ketua.src,
    name: "Grace Evangeline Anastasia",
    title: "KETUA DIVISI",
    batch: "OS'22",
    division: "MSDM",
  },
  {
    frameColor: "yellow",
    photo: ketua.src,
    name: "Prasetio Hidayat",
    title: "WAKIL KETUA DIVISI",
    batch: "KI'22",
    division: "MSDM",
  },
  {
    frameColor: "yellow",
    photo: ketua.src,
    name: "Person Two",
    title: "POSITION TITLE",
    batch: "Batch Info",
    division: "pro",
  },
  {
    frameColor: "yellow",
    photo: ketua.src,
    name: "Person Two",
    title: "POSITION TITLE",
    batch: "Batch Info",
    division: "pro",
  },
  {
    frameColor: "yellow",
    photo: ketua.src,
    name: "Person Two",
    title: "POSITION TITLE",
    batch: "Batch Info",
    division: "tes",
  },
  {
    frameColor: "yellow",
    photo: ketua.src,
    name: "Person Two",
    title: "POSITION TITLE",
    batch: "Batch Info",
    division: "tes",
  },
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
          frameColor="red"
          photo={ketua.src}
          name="Zefanya Cecilia Tumewu "
          title="KETUA BIDANG"
          batch="ME'22"
        />
      </div>
      <div className=" mb-24 flex w-full flex-col items-center justify-center gap-16 md:flex-row ">
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Shafira Dwi Pinandhita Putri"
          title="WAKIL KETUA"
          batch="ME'22"
        />
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Julia Tiffany Eliza"
          title="SEKBEN BIDANG"
          batch="OS'22"
        />
      </div>

      {/* PSDM */}
      <h1 className=" mb-12   bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        PSDM
      </h1>
      <CarouselSpacing cardsData={cardDataPSDM} />

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
      <CarouselSpacing cardsData={cardDataPSDM} />

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
      {/* <h1 className=" mb-12   bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        SPONSORSHIP
      </h1> */}
      <CarouselSpacing cardsData={cardDataPSDM} />

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
      <CarouselSpacing cardsData={cardDataPSDM} />

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
      <CarouselSpacing cardsData={cardDataPSDM} />

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
      <CarouselSpacing cardsData={cardDataPSDM} />

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
      <CarouselSpacing cardsData={cardDataPSDM} />

      {/* LAPANGAN */}
      <h1 className="mb-12 mt-32   bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        LAPANGAN
      </h1>
      <CarouselSpacing cardsData={cardDataPSDM} />

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

      <CarouselSpacing cardsData={cardDataPSDM} />
    </div>
  );
};

export default OrganogramPage;
