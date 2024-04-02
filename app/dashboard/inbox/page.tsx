import Image from "next/image";
const data = [
    {name: "ayam", message: "mantap lek" },
    {name: "bebek", message: "menyala abangkuh" },
    {name: "ikan", message: "jangan kasih kendor" },
    {name: "burung", message: "gilak x kuliat kau bah" },
    {name: "sapi", message: "siap komandan" },
]

const Page = async () => {
    return (
        <main className="flex flex-col items-center justify-center bg-[#2d0505] px-7 py-12 sm:p-12 lg:p-16">
            <Image
              src="/dashboard/light-background.png"
              draggable={false}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="banner"
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
        </main>
    )
}
export default Page;