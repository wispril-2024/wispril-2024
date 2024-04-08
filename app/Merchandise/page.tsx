import Title from "./title";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const bgImageSrc = "/Merchandise/Bg.png";
const MobilebgImageSrc = "/Merchandise/BgMobile.png";

interface Item {
  image: string;
  price: string;
  name: string;
}

const items: Item[] = [
  { image: "/Merchandise/Merch.png", price: "$10", name: "Item 1" },
  { image: "/Merchandise/Merch.png", price: "$20", name: "Item 2" },
  { image: "/Merchandise/Merch.png", price: "$20", name: "Item 3" },
  { image: "/Merchandise/Merch.png", price: "$20", name: "Item 4" },
  { image: "/Merchandise/Merch.png", price: "$20", name: "Item 5" },
  { image: "/Merchandise/Merch.png", price: "$20", name: "Item 6" },
];

const ItemsList = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#510007]">
      <div className="h-full w-full object-cover">
        <Image
          src={MobilebgImageSrc}
          alt="Background"
          quality={100}
          className="mt-2 object-center sm:hidden md:hidden lg:hidden xl:mt-0 xl:hidden"
          layout="fill"
        />
        <Image
          src={bgImageSrc}
          alt="Background"
          quality={100}
          className="mt-2 hidden object-center opacity-80 sm:block md:block lg:block xl:block"
          layout="fill"
        />
      </div>
      <div className="z-20 pb-32 pt-0 sm:pb-0 lg:pt-20">
        <Title />
      </div>
      <div className="z-10 p-10">
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:gap-24 lg:mt-60">
          {items.map((item, index) => (
            <div key={index} className="mb-5 flex flex-col items-center">
              <div className="w-full sm:w-48 md:w-72 xl:w-96">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={198}
                  height={265}
                  layout="responsive"
                />
              </div>
              <h2
                style={{ color: "rgba(244, 211, 142, 1)" }}
                className="font-westmeath text-3xl font-normal lg:text-4xl"
              >
                Price: {item.price}
              </h2>
              <h3 className="font-westmeath text-3xl text-white lg:text-4xl ">
                Name: {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <Link href="https://docs.google.com/forms/your-form-id" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" className="z-10 mb-10 rounded-xl border-[4px] border-[#B87D12] bg-[#FFDFA4] px-5 py-1.5 font-westmeath text-sm text-white lg:rounded-2xl xl:rounded-2xl xl:px-10 xl:py-5 xl:text-4xl">
          <p className="text-[#B87D12]">Order Now</p>
        </a>
      </Link>
    </main>
  );
};

export default ItemsList;
