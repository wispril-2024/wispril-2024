import ketua from "../../public/about-us/ketua-wispril/ketua.jpg";
import { CarouselSpacing } from "./carouselaboutus";
import CardComponent from "./component/card";
import {
  cardDataPersonalia,
  cardDataSekretariat,
  cardDataAcara,
  cardDataFundraising,
  cardDataKreatif,
  cardDataLapangan,
  cardDataOperasional,
  cardDataRelasi,
} from "./data_panitia";
import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";

const OrganogramPage = () => {
  return (
    <section className="  min-h-screen  ">
      {/* Organogram Title */}
      <div className="relative  flex  items-center justify-center ">
        <Image
          src="/about-us/headerorganogramLarge.png"
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
          frameColor="red"
          photo={ketua.src}
          name="Yosua Zendrato "
          title="KETUA PELAKSANA"
          batch="TM'22"
        />
      </div>

      {/* Manajemen Personalia */}
      <div className="absolute  w-full">
        <Image
          className="w-full "
          src="/about-us/lampu.png "
          alt="Background Image"
          width="500"
          height="500"
          sizes="50vw"
        />
      </div>
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
      <CarouselSpacing cardsData={cardDataPersonalia} />

      {/* Sekretariat */}
      <div className="absolute  w-full lg:hidden">
        <Image
          className=" w-full"
          src="/about-us/lampu.png "
          alt="Background Image"
          width="500"
          height="500"
          sizes="50vw"
        />
      </div>
      <h1 className=" mb-12 mt-60  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        Sekretariat
      </h1>
      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Maidina Zevi Putri"
          title="SEKRETARIS JENDERAL"
          batch="OS'22"
        />
      </div>
      <CarouselSpacing cardsData={cardDataSekretariat} />

      {/* FUNDRAISING */}
      <h1 className=" mb-12 mt-60  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        FUNDRAISING
      </h1>
      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Tahta Farid Walidain"
          title="KETUA BIDANG"
          batch="ME'22"
        />
      </div>
      <div className=" mb-24 flex w-full flex-col items-center justify-center gap-16 md:flex-row">
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Karen Jane"
          title="WAKIL KETUA"
          batch="BW'22"
        />
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Alicia Zalfaa Jatnika"
          title="SEKBEN BIDANG"
          batch="OS'22"
        />
      </div>
      <CarouselSpacing cardsData={cardDataFundraising} />

      {/* RELASI */}
      <div className="absolute  w-full">
        <Image
          className=" w-full"
          src="/about-us/lampu.png "
          alt="Background Image"
          width="500"
          height="500"
          sizes="50vw"
        />
      </div>
      <h1 className=" mb-12 mt-60  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        RELASI
      </h1>
      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="aniz Amanulloh"
          title="KETUA BIDANG"
          batch="TA'22"
        />
      </div>
      <div className=" mb-24 flex w-full flex-col items-center justify-center gap-16 md:flex-row">
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Mochamad Nur Fajri"
          title="WAKIL KETUA"
          batch="OS'22"
        />
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Mia"
          title="SEKBEN BIDANG"
          batch="FKK'22"
        />
      </div>
      <CarouselSpacing cardsData={cardDataRelasi} />

      {/* ACARA */}
      <div className="absolute  w-full lg:hidden">
        <Image
          className="w-full "
          src="/about-us/lampu.png "
          alt="Background Image"
          width="500"
          height="500"
          sizes="50vw"
        />
      </div>
      <h1 className=" mb-12 mt-60  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        ACARA
      </h1>
      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Patricia Devynna"
          title="KETUA BIDANG"
          batch="MB'22"
        />
      </div>
      <div className=" mb-24 flex w-full flex-col items-center justify-center gap-16 md:flex-row">
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Edwina Tanisha Kristanty"
          title="WAKIL KETUA"
          batch="MS'22"
        />
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Shofie Aliya Marwah"
          title="SEKBEN BIDANG"
          batch="TG'22"
        />
      </div>
      <CarouselSpacing cardsData={cardDataAcara} />

      {/* KREATIF */}
      <div className="absolute  w-full">
        <Image
          className=" w-full"
          src="/about-us/lampu.png "
          alt="Background Image"
          width="500"
          height="500"
          sizes="50vw"
        />
      </div>
      <h1 className=" mb-12 mt-60  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        KREATIF
      </h1>
      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Chelsea Andrea Rakian"
          title="KETUA BIDANG"
          batch="DKV'22"
        />
      </div>
      <div className=" mb-24 flex w-full flex-col items-center justify-center gap-16 md:flex-row">
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Evelyn Natalia Bastian"
          title="WAKIL KETUA"
          batch="DKV'22"
        />
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Azza Maretha"
          title="SEKBEN BIDANG"
          batch="DP'22"
        />
      </div>
      {/* <div className="absolute  w-full lg:hidden">
        <Image
          className="w-full "
          src="/about-us/lampu.png "
          alt="Background Image"
          width="500"
          height="500"
          sizes="50vw"
        />
      </div> */}
      <CarouselSpacing cardsData={cardDataKreatif} />

      {/* OPERASIONAL */}
      <div className="absolute   w-full lg:hidden">
        <Image
          className="w-full "
          src="/about-us/lampu.png "
          alt="Background Image"
          width="500"
          height="500"
          sizes="50vw"
        />
      </div>
      <h1 className=" mb-12 mt-60  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
        OPERASIONAL
      </h1>

      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Aryo Bagus S"
          title="KETUA BIDANG"
          batch="GL'22"
        />
      </div>
      <div className="mb-12 flex flex-col items-center  justify-center">
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Andrew William Sitanggang "
          title="WAKIL KETUA"
          batch="EP'22"
        />
      </div>
      <div className=" mb-24 flex w-full flex-col items-center justify-center gap-16 md:flex-row">
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Najwa Maharani"
          title="SEKRETARIS BIDANG"
          batch="GD'22"
        />
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Adiba Diva Diandra"
          title="BENDAHARA BIDANG"
          batch="GL'22"
        />
      </div>
      <CarouselSpacing cardsData={cardDataOperasional} />

      {/* LAPANGAN */}
      <div className="absolute   w-full md:hidden ">
        <Image
          className="w-full "
          src="/about-us/lampu.png "
          alt="Background Image"
          width="500"
          height="500"
          sizes="100vw"
        />
      </div>

      <div className="mb-12 flex flex-col items-center  justify-center">
        <h1 className="z-[900] mb-12 mt-32  bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl  lg:bottom-44 lg:text-6xl">
          LAPANGAN
        </h1>
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Irsan Indra Kusuma"
          title="KOORDINATOR"
          batch="MB'22"
        />
      </div>
      <div className=" mb-24 flex w-full flex-col items-center justify-center gap-16 md:flex-row">
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Kamilia Tazkia Rahma Andini"
          title="SEKLAP 1"
          batch="FI'22"
        />
        <CardComponent
          frameColor="red"
          photo={ketua.src}
          name="Putri Dzakiyah Suharyono"
          title="SEKLAP 2"
          batch="MK'22"
        />
      </div>

      <CarouselSpacing cardsData={cardDataLapangan} />

      <div className=" absolute -bottom-5 z-0 w-full  shrink-0 object-center">
        <Image
          className=" w-full"
          src="/about-us/teater.png"
          alt="Background Image"
          width="500"
          height="1000"
        />
      </div>

      {/* <div className="absolute bottom-0 z-[-10] w-full">
        <Image
          className="w-full "
          src="/about-us/lampu.png "
          alt="Background Image"
          width="500"
          height="500"
          sizes="50vw"
        />
      </div> */}
    </section>
  );
};

export default OrganogramPage;
