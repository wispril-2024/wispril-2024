import Image from "next/image";

interface Merch {
  image: string;
  price: string;
  name: string;
}

function Merchandise({ item }: { item: Merch }) {
  return (
    <div className="z-10 flex flex-col items-center">
      <div className="w-full md:w-48 lg:w-72 xl:w-96">
        <Image
          src={item.image}
          alt={item.name}
          width={198}
          height={265}
          layout="responsive"
        />
      </div>
      <p className="font-westmeath text-2xl font-normal text-[#F4D38E] lg:text-4xl">
        Name: {item.name}
      </p>
      <p className="font-westmeath text-2xl text-white lg:text-4xl ">
        Price: {item.price}
      </p>
    </div>
  );
}

export default Merchandise;
