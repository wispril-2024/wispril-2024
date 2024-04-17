import Image from "next/image";

export default function Tanggallokasi() {
  return (
    <div className="relative flex min-h-[700px] items-center justify-center sm:min-h-[800px] md:min-h-[1000px]">
      {/* Banner Up */}
      <Image
        src="/components/arch-top.png"
        alt="Banner"
        width={284}
        height={271}
        className="absolute left-0 top-0 z-10 w-[150px] md:w-[284px] lg:-top-4 lg:left-36"
        data-aos="fade-right"
      />

      {/* Banner Down */}
      <Image
        src="/components/arch-bottom.png"
        alt="Banner"
        width={284}
        height={271}
        className="absolute bottom-0 right-0 z-10 w-[150px] md:w-[284px] lg:-bottom-4 lg:right-36"
        data-aos="fade-left"
      />

      <div className="z-10 flex flex-col items-center gap-8 text-center md:gap-12">
        <p
          data-aos="fade-up"
          className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent sm:text-4xl md:text-5xl xl:text-7xl"
        >
          TANGGAL
        </p>
        <div data-aos="fade-up" className="flex flex-col gap-2">
          <p className="font-cgp text-3xl font-bold text-[#ECCC9B] sm:text-4xl md:text-5xl xl:text-7xl">
            Minggu,
          </p>
          <p className="font-cgp text-3xl font-bold text-[#ECCC9B] sm:text-4xl md:text-5xl xl:text-7xl">
            28 April 2024
          </p>
        </div>
        <p
          data-aos="fade-up"
          className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text font-westmeath text-3xl font-normal text-transparent sm:text-4xl md:text-5xl xl:text-7xl"
        >
          LOKASI
        </p>

        {/* Google Map Embed */}
        <iframe
          data-aos="fade-up"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0186405155055!2d107.607799975484!3d-6.888370293110628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6578d4253e7%3A0x136b7b51bcb1002d!2sSunken%20Court%2C%20ITB!5e0!3m2!1sen!2sid!4v1711824539380!5m2!1sen!2sid"
          width="450"
          height="300"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[220px] w-[220px] rounded-xl ring-4 ring-[#feb446] ring-offset-4 ring-offset-[#f5d48c] sm:h-[300px] sm:w-[300px]"
        ></iframe>
      </div>
    </div>
  );
}
