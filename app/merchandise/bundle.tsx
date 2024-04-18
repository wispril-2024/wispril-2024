import Image from "next/image";

function Bundle({ item, ...props }: { item: Bundle }) {
  return (
    <div
      className="z-10 flex flex-col items-center gap-1 text-center"
      {...props}
    >
      {/* Image */}
      <Image
        src={item.image}
        alt={item.name}
        width={350}
        height={350}
        className="size-48 object-contain lg:size-64"
      />

      {/* Name */}
      <p className="font-westmeath text-2xl font-normal text-[#F4D38E] lg:text-3xl">
        {item.name}
      </p>
      <p className="font-westmeath text-lg font-normal text-[#F4D38E] lg:text-xl">
        {item.description}
      </p>

      {/* Price */}
      <p className="font-westmeath text-xl text-white lg:text-2xl">
        {item.price}
      </p>
    </div>
  );
}

export default Bundle;
