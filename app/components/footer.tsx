import Image from "next/image";
import Link from "next/link";

function Footer(){

    const paths = [
        {
            imagepath : "/navbarAssets/youtube.svg",
            url : "/",
        },
        {
            imagepath : "/navbarAssets/tiktok.svg",
            url : "/",
        },
        {
            imagepath : "/navbarAssets/twit.svg",
            url : "/",
        },
        {
            imagepath : "/navbarAssets/ig.svg",
            url : "/",
        },
    ]
    return (
        <footer className="w-full h-40 md:h-64 lg:h-80 xl:h-96 bg-[url('/navbarAssets/footerbg.png')] bg-cover flex items-center ">
            <div className="flex flex-row mx-auto items-center gap-4 md:gap-10 lg:gap-16 xl:gap-20">
                <div className="w-20 h-20  sm:w-32 sm:h-32  md:w-40 md:h-40 lg:w-60 lg:h-60 xl:w-80 xl:h-80 flex items-center">
                    <Image 
                        src={"/navbarAssets/logo4.png"}
                        alt = "logo"
                        width={315}
                        height={315}
                        className="object-contain"
                        ></Image>
                </div>
                

                <div className="flex flex-col gap-2 lg:gap-10 items-center">
                    <div className="text-[7.5px] sm:text-base md:text-xl lg:2xl xl:text-3xl font-centuryGothicBold text-gold">
                        Copyright © PARADE WISUDA APRIL 2024
                    </div>
                    <div>
                        <ul className="flex flex-row gap-[7.5px] sm:gap-2 md:gap-3 lg:gap-8 items-center">
                        {paths.map((path) => {
                            return (
                            <li key={path.imagepath} className="hover:opacity-70">
                                <Link href={path.url}>
                                <Image 
                                    src={path.imagepath}
                                    alt = "logo"
                                    width={58}
                                    height={53}
                                    className="w-3 h-3 sm:w-5 sm:h-5 md:w-8 md:h-8 lg:w-12 xl:w-16 lg:h-16 object-contain"
                                ></Image>
                                </Link>
                            </li>
                            );
                        })}
                        </ul>
                    </div>
                </div>
                <div className="w-20 h-20  sm:w-32 sm:h-32  md:w-40 md:h-40 lg:w-60 lg:h-60 xl:w-80 xl:h-80 flex items-center p-1 lg:p-3">
                    <Image 
                        src={"/navbarAssets/logo-itb.png"}
                        alt = "logo-itb"
                        width={249}
                        height={249}
                        className="object-contain"
                        ></Image>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;