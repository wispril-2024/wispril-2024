import Image from "next/image";
import Link from "next/link";

function Footer() {
  const paths = [
    {
      imagepath: "/navbarAssets/youtube.svg",
      url: "/",
    },
    {
      imagepath: "/navbarAssets/tiktok.svg",
      url: "/",
    },
    {
      imagepath: "/navbarAssets/twit.svg",
      url: "/",
    },
    {
      imagepath: "/navbarAssets/ig.svg",
      url: "/",
    },
  ];
  return (
    <footer className="relative flex h-40 w-full items-center md:h-64 lg:h-80 xl:h-96">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/navbarAssets/footerbg.png"
          alt="footer background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="z-10 mx-auto flex flex-row items-center gap-4 md:gap-10 lg:gap-16 xl:gap-20">
        <div className="flex h-20  w-20 items-center  sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-60 lg:w-60 xl:h-80 xl:w-80">
          <Image
            src={"/navbarAssets/logo4.png"}
            alt="logo"
            width={315}
            height={315}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-2 lg:gap-10">
          <div className="lg:2xl font-centuryGothicBold text-[7.5px] text-gold sm:text-base md:text-xl xl:text-3xl">
            Copyright © PARADE WISUDA APRIL 2024
          </div>
          <div>
            <ul className="flex flex-row items-center gap-[7.5px] sm:gap-2 md:gap-3 lg:gap-8">
              {paths.map((path) => {
                return (
                  <li key={path.imagepath} className="hover:opacity-70">
                    <Link href={path.url}>
                      <Image
                        src={path.imagepath}
                        alt="logo"
                        width={58}
                        height={53}
                        className="h-3 w-3 object-contain sm:h-5 sm:w-5 md:h-8 md:w-8 lg:h-16 lg:w-12 xl:w-16"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex h-20  w-20 items-center  p-1 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-60 lg:w-60 lg:p-3 xl:h-80 xl:w-80">
          <Image
            src={"/navbarAssets/logo-itb.png"}
            alt="logo-itb"
            width={249}
            height={249}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
