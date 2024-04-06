import Title from "./title";
import Image from "next/image";
import React from "react";

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
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#510007]">
      <div className="mt-[0px] h-full w-full object-cover">
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
        <div className="grid grid-cols-1 gap-[100px] sm:grid-cols-2 sm:gap-[30px] md:mt-40 lg:mt-60">
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
              <div
                style={{ color: "rgba(244, 211, 142, 1)" }}
                className="font-westmeath text-[28px] font-normal md:text-[32px] lg:text-[40px] xl:text-[40px]"
              >
                Price: {item.price}
              </div>
              <div className="font-westmeath text-[28px] text-sm text-white md:text-[32px] md:text-base lg:text-[40px] xl:text-[40px]">
                Name: {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="z-10 mb-[40px] rounded-xl border-[4px] border-[#B87D12] bg-[#FFDFA4] px-[20px] py-[5px] font-westmeath text-sm text-white md:text-base lg:rounded-2xl xl:rounded-2xl xl:px-[40px] xl:py-[20px] xl:text-[36px]">
        <p className="text-[#B87D12]">Order Now</p>
      </button>
    </div>
  );
};

export default ItemsList;
