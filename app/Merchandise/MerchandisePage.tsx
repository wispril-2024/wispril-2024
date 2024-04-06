import React from 'react';
import Image from 'next/image';
import Title from "./title"

const bgImageSrc = '/Merchandise/Bg.png';
const MobilebgImageSrc = '/Merchandise/BgMobile.png';

interface Item {
  image: string;
  price: string;
  name: string;
}

const items: Item[] = [
  { image: '/Merchandise/Merch.png', price: '$10', name: 'Item 1' },
  { image: '/Merchandise/Merch.png', price: '$20', name: 'Item 2' },
  { image: '/Merchandise/Merch.png', price: '$20', name: 'Item 3' },
  { image: '/Merchandise/Merch.png', price: '$20', name: 'Item 4' },
  { image: '/Merchandise/Merch.png', price: '$20', name: 'Item 5' },
  { image: '/Merchandise/Merch.png', price: '$20', name: 'Item 6' },
];

const ItemsList = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center flex-col bg-[#510007]">
      <div className="w-full h-full mt-[0px] object-cover">
        <Image src={MobilebgImageSrc} alt="Background" quality={100} className='object-center mt-2 xl:hidden xl:mt-0 md:hidden lg:hidden sm:hidden' layout='fill'/>
        <Image src={bgImageSrc} alt="Background" quality={100} className='object-center mt-2 hidden xl:block md:block lg:block sm:block opacity-80' layout='fill'/>
      </div>
      <div className='pt-0 lg:pt-20 z-20 sm:pb-0 pb-32'>

      <Title />
      </div>
      <div className="z-10 p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[100px] lg:mt-60 md:mt-40 sm:gap-[30px]">
          {items.map((item, index) => (
            <div key={index} className="mb-5 flex flex-col items-center">
              <div className="w-full sm:w-48 md:w-72 xl:w-96">
                <Image src={item.image} alt={item.name} width={198} height={265} layout='responsive'/>
              </div>
              <div style={{ color: 'rgba(244, 211, 142, 1)'}} className="font-normal text-[28px] font-westmeath xl:text-[40px] lg:text-[40px] md:text-[32px]">
                Price: {item.price}
              </div>
              <div className="text-sm md:text-base text-white font-westmeath xl:text-[40px] text-[28px] lg:text-[40px] md:text-[32px]">
                Name: {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className='text-sm md:text-base xl:text-[36px] xl:px-[40px] xl:py-[20px] text-white font-westmeath z-10 bg-[#FFDFA4] px-[20px] border-[#B87D12] border-[4px] rounded-xl xl:rounded-2xl lg:rounded-2xl py-[5px] mb-[40px]'><p className='text-[#B87D12]'>Order Now</p></button>
    </div>
  );
};

export default ItemsList;
