import Image from "next/image";

export default function Timeline() {
  return (
    <section>
      <h1 className="mt-20 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent sm:text-4xl md:text-6xl xl:text-8xl">
        TIMELINE
      </h1>
      <div className="relative mt-8 w-full">
        <Image
          src="/home/ticket.png"
          alt="ticket"
          layout="responsive"
          width={500}
          height={400}
          className="w-full"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <Image
            src="/home/timeline.png"
            alt="timeline"
            layout="contain"
            width={1000}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
