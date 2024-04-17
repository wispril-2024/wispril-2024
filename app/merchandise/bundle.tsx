import Image from "next/image";

function Bundle({ item, index }: { item: Bundle; index: number }) {
  return (
    <div
      className="z-10 flex flex-col items-center lg:gap-2"
      // data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos="fade-up"
    >
      {/* Image */}
      <Image
        src={item.image}
        alt={item.name}
        width={720}
        height={658}
        className="h-64 w-auto lg:h-72"
      />

      {/* Name */}
      <div className="text-center">
        <p className="font-westmeath text-2xl font-normal text-[#F4D38E] lg:text-4xl">
          {item.name}
        </p>
        <p className="font-westmeath text-lg font-normal text-[#F4D38E]">
          {item.description}
        </p>
      </div>

      {/* Price */}
      <p className="font-westmeath text-xl text-white lg:text-3xl">
        {item.price}
      </p>
    </div>
  );
}

export default Bundle;
