import Image from "next/image";

export default function Timeline() {
  return (
    <section className="flex h-full w-full flex-col pb-12 sm:pt-24 md:pt-48 lg:py-64 xl:gap-12">
      <h1
        data-aos="fade-up"
        className="z-10 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent sm:text-4xl md:text-5xl xl:text-7xl"
      >
        TIMELINE
      </h1>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden p-14 sm:p-32 md:p-48">
        <Image
          src="/home/ticket.jpg"
          alt="Background Ticket"
          width={720}
          height={610}
          className="absolute z-10 w-full object-cover"
          sizes="(max-width: 1024px) 250px, 360px"
        />

        <div className="z-10">
          <Image
            src="/home/timeline.jpg"
            alt="Timeline"
            width={720}
            height={720}
            className="z-10 w-[800px]"
            data-aos="fade-up"
            sizes="(max-width: 1024px) 300px, 800px"
          />
        </div>
      </div>
    </section>
  );
}
