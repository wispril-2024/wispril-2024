import ketua from "../../public/about-us/Kesekjenan/Ketua_Pelaksana-Yosua_Zendrato.jpg";
import sekreJendral from "../../public/about-us/Kesekjenan/Sekretaris_Jenderal-Maidina_Zevi_Putri.jpg";
import kabidAcara from "../../public/about-us/acara/Kabid_Acara-Patricia_Devynna.jpg";
import sekbenBidangAcara from "../../public/about-us/acara/SekBenBid_Acara-Shofie_Aliya_Marwah.jpg";
import wakabidAcara from "../../public/about-us/acara/Wakabid_Acara-Edwina_Tanisha_Kristanty.jpg";
import kabidFundraising from "../../public/about-us/fundraising/Kabid_Fundraising-Tahta_Farid_Walidain.jpg";
import sekbenBidangFundraising from "../../public/about-us/fundraising/SekBenBid_Fundraising-Alicia_Zalfaa_Jatnika.jpg";
import wakabidFundraising from "../../public/about-us/fundraising/Wakabid_Fundraising-Karen_Jane.jpg";
import kabidKreatif from "../../public/about-us/kreatif/Kabid_Kreatif-Chelsea_Andrea_Rakian.jpg";
import sekbenBidangKreatif from "../../public/about-us/kreatif/SekBenBid_Kreatif-Azza_Maretha_Nigandiva.jpg";
import wakabidKreatif from "../../public/about-us/kreatif/Wakabid_Kreatif-Evelyn_Natalia_Bastian.jpg";
import koordinatorlap from "../../public/about-us/lapangan/Koordinator_Lapangan-Irsan_Indra_Kusuma.jpg";
import seklap1 from "../../public/about-us/lapangan/Seklap_1-Kamilia_Tazkia_Rahma_Andini.jpg";
import seklap2 from "../../public/about-us/lapangan/Seklap_2-Putri_Dzakiyah_Suharyono.jpg";
import kabidMP from "../../public/about-us/mp/Kabid_Manajemen_Personalia-Zefanya_Cecillia_Tumewu.jpg";
import sekbenBidangMP from "../../public/about-us/mp/SekBenBid_MP-Julia Tiffany Eliza.jpg";
import wakabidMP from "../../public/about-us/mp/Wakabid_MP-Shafira_Dwi_Pinandhita.jpg";
import bendaharaOperasional from "../../public/about-us/operasional/Benbid_Operasional-Adiba_Diva_Diandra.jpg";
import kabidOperasional from "../../public/about-us/operasional/Kabid_Operasional-Aryo_Bagus_S.jpg";
import sekretarisOperasional from "../../public/about-us/operasional/Sekbid_Operasional-Najwa_Maharani.jpg";
import wakabidOperasional from "../../public/about-us/operasional/Wakabid_Operasional-Andrew_William_Sitanggang.jpg";
import kabidRelasi from "../../public/about-us/relasi/Kepala_Bidang_Relasi-Aniz_Amanulloh.jpg";
import sekbenBidangRelasi from "../../public/about-us/relasi/Sekretaris_Bendahara_Relasi-Mia.jpg";
import wakabidRelasi from "../../public/about-us/relasi/Wakabid_Relasi-Mochamad_Nur_Fajri.jpg";
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
import Image from "next/image";

const OrganogramPage = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center gap-16 lg:gap-28">
      {/* Organogram Title */}
      <div className="relative flex h-24 w-96 items-center justify-center lg:h-36 lg:w-[640px]">
        <Image
          src="/about-us/headerorganogramLarge.png"
          alt="Organogram Title Frame"
          fill={true}
          sizes="(max-width: 1024px): 384px, "
        />
        <h1 className="relative bottom-1 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-4xl font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-6xl">
          Organogram
        </h1>
      </div>

      {/* Ketua */}
      <CardComponent
        frameColor="red"
        photo={ketua.src}
        name="Yosua Zendrato "
        title="KETUA PELAKSANA"
        batch="TM'22"
      />

      {/* Manajemen Personalia */}
      <div className="relative flex flex-col items-center gap-6 lg:gap-12">
        {/* Lamp Decoration */}
        <Image
          className="absolute top-0 z-0 h-auto w-[576px] max-w-none sm:w-[512px] lg:w-[672px]"
          src="/about-us/lampu.png"
          alt="Lamp Decoration"
          width={900}
          height={1865}
        />

        {/* Content */}
        <h2 className="z-10 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-5xl">
          Manajemen Personalia
        </h2>
        <div className="z-10 flex flex-col items-center gap-8 lg:gap-16">
          <CardComponent
            frameColor="red"
            photo={kabidMP.src}
            name="Zefanya Cecilia T"
            title="KETUA BIDANG"
            batch="ME'22"
          />
          <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16">
            <CardComponent
              frameColor="red"
              photo={wakabidMP.src}
              name="Shafira Dwi P.P."
              title="WAKIL KETUA"
              batch="ME'22"
            />
            <CardComponent
              frameColor="red"
              photo={sekbenBidangMP.src}
              name="Julia Tiffany Eliza"
              title="SEKBEN BIDANG"
              batch="OS'22"
            />
          </div>
          <CarouselSpacing cardsData={cardDataPersonalia} />
        </div>
      </div>

      {/* Sekretariat */}
      <div className="relative flex flex-col items-center gap-6 lg:gap-12">
        {/* Lamp Decoration */}
        <Image
          className="absolute top-0 z-0 h-auto w-[576px] max-w-none sm:w-[512px] lg:w-[672px]"
          src="/about-us/lampu.png"
          alt="Lamp Decoration"
          width={900}
          height={1865}
        />

        {/* Content */}
        <h2 className="z-10 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-5xl">
          Sekretariat
        </h2>
        <div className="z-10 flex flex-col items-center gap-8 lg:gap-16">
          <CardComponent
            frameColor="red"
            photo={sekreJendral.src}
            name="Maidina Zevi Putri"
            title="SEKRETARIS JENDERAL"
            batch="OS'22"
          />
          <CarouselSpacing cardsData={cardDataSekretariat} />
        </div>
      </div>

      {/* FUNDRAISING */}
      <div className="relative flex flex-col items-center gap-6 lg:gap-12">
        {/* Lamp Decoration */}
        <Image
          className="absolute top-0 z-0 h-auto w-[576px] max-w-none sm:hidden sm:w-[512px] lg:absolute lg:w-[672px]"
          src="/about-us/lampu.png"
          alt="Lamp Decoration"
          width={900}
          height={1865}
        />

        {/* Content */}
        <h2 className="z-10 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-5xl">
          FUNDRAISING
        </h2>
        <div className="z-10 flex flex-col items-center gap-8 lg:gap-16">
          <CardComponent
            frameColor="red"
            photo={kabidFundraising.src}
            name="Tahta Farid Walidain"
            title="KETUA BIDANG"
            batch="ME'22"
          />
          <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16">
            <CardComponent
              frameColor="red"
              photo={wakabidFundraising.src}
              name="Karen Jane"
              title="WAKIL KETUA"
              batch="BW'22"
            />
            <CardComponent
              frameColor="red"
              photo={sekbenBidangFundraising.src}
              name="Alicia Zalfaa Jatnika"
              title="SEKBEN BIDANG"
              batch="OS'22"
            />
          </div>
          <CarouselSpacing cardsData={cardDataFundraising} />
        </div>
      </div>

      {/* RELASI */}
      <div className="relative flex flex-col items-center gap-6 lg:gap-12">
        {/* Lamp Decoration */}
        <Image
          className="absolute top-0 z-0 h-auto w-[576px] max-w-none sm:w-[512px] lg:w-[672px]"
          src="/about-us/lampu.png"
          alt="Lamp Decoration"
          width={900}
          height={1865}
        />

        {/* Content */}
        <h2 className="z-10 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-5xl">
          RELASI
        </h2>
        <div className="z-10 flex flex-col items-center gap-8 lg:gap-16">
          <CardComponent
            frameColor="red"
            photo={kabidRelasi.src}
            name="aniz Amanulloh"
            title="KETUA BIDANG"
            batch="TA'22"
          />
          <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16">
            <CardComponent
              frameColor="red"
              photo={wakabidRelasi.src}
              name="Mochamad Nur Fajri"
              title="WAKIL KETUA"
              batch="OS'22"
            />
            <CardComponent
              frameColor="red"
              photo={sekbenBidangRelasi.src}
              name="Mia"
              title="SEKBEN BIDANG"
              batch="FKK'22"
            />
          </div>
          <CarouselSpacing cardsData={cardDataRelasi} />
        </div>
      </div>

      {/* ACARA */}
      <div className="relative flex flex-col items-center gap-6 lg:gap-12">
        {/* Lamp Decoration */}
        <Image
          className="absolute top-0 z-0 h-auto w-[576px] max-w-none sm:w-[512px] lg:w-[672px]"
          src="/about-us/lampu.png"
          alt="Lamp Decoration"
          width={900}
          height={1865}
        />

        {/* Content */}
        <h2 className="z-10 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-5xl">
          ACARA
        </h2>
        <div className="z-10 flex flex-col items-center gap-8 lg:gap-16">
          <CardComponent
            frameColor="red"
            photo={kabidAcara.src}
            name="Patricia Devynna"
            title="KETUA BIDANG"
            batch="MB'22"
          />
          <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16">
            <CardComponent
              frameColor="red"
              photo={wakabidAcara.src}
              name="Edwina Tanisha K"
              title="WAKIL KETUA"
              batch="MS'22"
            />
            <CardComponent
              frameColor="red"
              photo={sekbenBidangAcara.src}
              name="Shofie Aliya Marwah"
              title="SEKBEN BIDANG"
              batch="TG'22"
            />
          </div>
          <CarouselSpacing cardsData={cardDataAcara} />
        </div>
      </div>

      {/* KREATIF */}
      <div className="relative flex flex-col items-center gap-6 lg:gap-12">
        {/* Lamp Decoration */}
        <Image
          className="absolute top-0 z-0 h-auto w-[576px] max-w-none sm:w-[512px] lg:w-[672px]"
          src="/about-us/lampu.png"
          alt="Lamp Decoration"
          width={900}
          height={1865}
        />

        {/* Content */}
        <h2 className="z-10 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-5xl">
          KREATIF
        </h2>
        <div className="z-10 flex flex-col items-center gap-8 lg:gap-16">
          <CardComponent
            frameColor="red"
            photo={kabidKreatif.src}
            name="Chelsea Andrea R"
            title="KETUA BIDANG"
            batch="DKV'22"
          />
          <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16">
            <CardComponent
              frameColor="red"
              photo={wakabidKreatif.src}
              name="Evelyn Natalia Bastian"
              title="WAKIL KETUA"
              batch="DKV'22"
            />
            <CardComponent
              frameColor="red"
              photo={sekbenBidangKreatif.src}
              name="Azza Maretha"
              title="SEKBEN BIDANG"
              batch="DP'22"
            />
          </div>

          <CarouselSpacing cardsData={cardDataKreatif} />
        </div>
      </div>

      {/* OPERASIONAL */}
      <div className="relative flex flex-col items-center gap-6 lg:gap-12">
        {/* Lamp Decoration */}
        <Image
          className="absolute top-0 z-0 h-auto w-[576px] max-w-none sm:w-[512px] lg:w-[672px]"
          src="/about-us/lampu.png"
          alt="Lamp Decoration"
          width={900}
          height={1865}
        />

        <h2 className="z-10 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-5xl">
          OPERASIONAL
        </h2>
        <div className="z-10 flex flex-col items-center gap-8 lg:gap-16">
          <CardComponent
            frameColor="red"
            photo={kabidOperasional.src}
            name="Aryo Bagus S"
            title="KETUA BIDANG"
            batch="GL'22"
          />
          <CardComponent
            frameColor="red"
            photo={wakabidOperasional.src}
            name="Andrew William S"
            title="WAKIL KETUA"
            batch="EP'22"
          />
          <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16">
            <CardComponent
              frameColor="red"
              photo={sekretarisOperasional.src}
              name="Najwa Maharani"
              title="SEKRETARIS BIDANG"
              batch="GD'22"
            />
            <CardComponent
              frameColor="red"
              photo={bendaharaOperasional.src}
              name="Adiba Diva Diandra"
              title="BENDAHARA BIDANG"
              batch="GL'22"
            />
          </div>
          <CarouselSpacing cardsData={cardDataOperasional} />
        </div>
      </div>

      {/* LAPANGAN */}
      <div className="flex flex-col items-center gap-6 lg:gap-12">
        {/* Content */}
        <h2 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent  shadow-[#F4D38E]  [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-5xl">
          KOORDINATOR LAPANGAN
        </h2>
        <div className="flex flex-col items-center gap-8 lg:gap-16">
          <CardComponent
            frameColor="red"
            photo={koordinatorlap.src}
            name="Irsan Indra Kusuma"
            title="KOORDINATOR"
            batch="MB'22"
          />
          <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16">
            <CardComponent
              frameColor="red"
              photo={seklap1.src}
              name="Kamilia Tazkia R.A."
              title="SEKLAP"
              batch="FI'22"
            />
            <CardComponent
              frameColor="red"
              photo={seklap2.src}
              name="Putri Dzakiyah S"
              title="SEKLAP"
              batch="MK'22"
            />
          </div>

          <CarouselSpacing cardsData={cardDataLapangan} />
        </div>
      </div>
    </section>
  );
};

export default OrganogramPage;
