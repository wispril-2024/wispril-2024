import Image from "next/image";

function Merchandise({ item, ...props }: { item: Merch }) {
  return (
    <div
      className="z-10 flex flex-col items-center text-center lg:gap-2"
      {...props}
    >
      {/* Image */}
      <Image
        src={item.image}
        alt={item.name}
        width={256}
        height={256}
        className="size-48 object-contain lg:size-64"
        sizes="(max-width: 1024px) 192px, 256px"
      />

      {/* Name */}
      <p className="font-westmeath text-2xl font-normal text-[#F4D38E] lg:text-3xl">
        {item.name}
      </p>

      {/* Price */}
      <p className="font-westmeath text-xl text-white lg:text-2xl">
        {item.price}
      </p>
    </div>
  );
}

export default Merchandise;
