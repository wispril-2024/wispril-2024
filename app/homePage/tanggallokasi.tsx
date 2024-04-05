import Image from "next/image";

export default function Tanggallokasi() {
  return (
    <section>
      <div className="max-w-8xl relative mb-40 mt-24 md:mt-40 ">
        <Image
          src="/home/bannerUp.png"
          alt="Banner"
          width={284}
          height={271}
          className="absolute -top-36 left-0 hidden md:flex lg:left-36"
        />

        <Image
          src="/home/bannerUp.png"
          alt="Banner"
          width={150}
          height={144}
          className="absolute -top-20 left-0 md:hidden "
        />
        <div className="flex flex-col items-center text-center">
          <h1 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-4xl font-normal text-transparent sm:text-5xl md:text-6xl xl:text-8xl">
            TANGGAL
          </h1>
          <h2 className="mt-12 font-cgp text-3xl font-bold text-[#ECCC9B] sm:text-5xl">
            Minggu,
          </h2>
          <h2 className="mt-4 font-cgp text-3xl font-bold text-[#ECCC9B] sm:text-5xl">
            28 April 2024
          </h2>
          <h1 className="mt-20 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text font-westmeath text-4xl font-normal text-transparent md:text-6xl xl:text-8xl">
            LOKASI
          </h1>
          <div
            className="mt-4 hidden sm:block"
            dangerouslySetInnerHTML={{
              __html:
                '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0186405155055!2d107.607799975484!3d-6.888370293110628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6578d4253e7%3A0x136b7b51bcb1002d!2sSunken%20Court%2C%20ITB!5e0!3m2!1sen!2sid!4v1711824539380!5m2!1sen!2sid" width="580" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            }}
          />
          <div
            className="mt-4 block sm:hidden"
            dangerouslySetInnerHTML={{
              __html:
                '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0186405155055!2d107.607799975484!3d-6.888370293110628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6578d4253e7%3A0x136b7b51bcb1002d!2sSunken%20Court%2C%20ITB!5e0!3m2!1sen!2sid!4v1711824539380!5m2!1sen!2sid" width="200" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            }}
          />
        </div>
        <Image
          src="/home/bannerDown.png"
          alt="Banner"
          width={284}
          height={271}
          className="absolute -bottom-36 right-0 hidden md:flex lg:right-36"
        />
        <Image
          src="/home/bannerDown.png"
          alt="Banner"
          width={150}
          height={144}
          className="absolute -bottom-36 right-0 md:hidden"
        />
      </div>
    </section>
  );
}
