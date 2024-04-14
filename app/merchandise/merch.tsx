import Image from "next/image";

interface Merch {
  image: string;
  price: string;
  name: string;
}

function Merchandise({ item }: { item: Merch }) {
  return (
    <div className="z-10 flex flex-col items-center">
      <Image
        src={item.image}
        alt={item.name}
        width={720}
        height={658}
        className="h-48 w-auto md:h-64 lg:h-96"
      />

      <p className="font-westmeath text-2xl font-normal text-[#F4D38E] lg:text-4xl">
        {item.name}
      </p>
      <p className="font-westmeath text-xl text-white lg:text-3xl ">
        {item.price}
      </p>
    </div>
  );
}

export default Merchandise;
