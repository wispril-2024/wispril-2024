import Image from "next/image";
import MenfessInbox from "./menfessInbox";
const data = [
  { name: "Anonymous", message: "Lorem ipsum dolor sit amet consectetur" },
  { name: "Anonymous", message: "Lorem ipsum dolor sit amet consectetur" },
  { name: "Anonymous", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim lectus mi, nisl ut. Neque augue dui habitant leo. Sed et dolor eget ipsum convallis pharetra. Maecenas vestibulum quam vel neque aliquam, at luctus turpis malesuada. Proin tristique enim eu dui efficitur, nec dictum libero fringilla. Vestibulum ante ipsum primis in faucibus orci " },
  { name: "Anonymous", message: "Lorem ipsum dolor sit amet consectetur" },
  { name: "Anonymous", message: "Lorem ipsum dolor sit amet consectetur" },
];
const Page = async () => {
    return (
        <main className="flex flex-col items-center justify-center bg-[#2d0505] px-7 py-12 sm:p-12 lg:p-16">
            <Image 
                src="/dashboard/light-background.png" 
                alt="light-background" 
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40"
                draggable={false}
                width={1000}
                height={1000} 
            />
            
            <div className="relative z-10">
              <Image
                src="/dashboard/banner.png"
                draggable={false}
                alt="banner"
                width={700}
                height={700}
                className="w-80 lg:w-[512px]"
              />
              <div className="absolute left-1/2 top-[22%] -translate-x-1/2">
                <h1 className="inline-block bg-gradient-to-r from-[#510007] to-[#B70010] bg-clip-text font-westmeath text-3xl text-transparent lg:text-5xl">
                  INBOX
                </h1>
              </div>
            </div>

            {data.map( (idx) => (
                <MenfessInbox name={idx.name} pp="/dashboard/placeholder.png" message={idx.message}/>
            ))}



        </main>
    )
}
export default Page;
