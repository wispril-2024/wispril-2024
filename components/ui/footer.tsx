import { InstagramIcon } from "../icons/instagram";
import { TikTokIcon } from "../icons/tiktok";
import { TwitterIcon } from "../icons/twitter";
import { YoutubeIcon } from "../icons/youtube";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const paths = [
  {
    url: "https://www.youtube.com/@ParadeWisudaAprilITB-rt2ss",
    icon: <YoutubeIcon fill="#ECC786" className="h-10 lg:h-12" />,
    ariaLabel: "Youtube Channel Parade Wisuda April ITB 2024",
  },
  {
    url: "https://www.tiktok.com/@paradewisudaitb",
    icon: <TikTokIcon fill="#ECC786" className="h-10 lg:h-12" />,
    ariaLabel: "TikTok Parade Wisuda April ITB 2024",
  },
  {
    url: "https://twitter.com/paradewisudaitb",
    icon: <TwitterIcon fill="#ECC786" className="h-10 lg:h-12" />,
    ariaLabel: "Twitter Parade Wisuda April ITB 2024",
  },
  {
    url: "https://www.instagram.com/paradewisudaitb",
    icon: <InstagramIcon fill="#ECC786" className="h-10 lg:h-12" />,
    ariaLabel: "Instagram Parade Wisuda April ITB 2024",
  },
];

function FooterText({ className, ...props }: { className?: string }) {
  return (
    <div
      className={cn("flex flex-col items-center gap-4 lg:gap-8", className)}
      {...props}
    >
      {/* Center Text */}
      <p className="text-center font-cgp text-lg font-bold text-[#F4D38E] lg:text-2xl">
        Copyright © PARADE WISUDA APRIL 2024
      </p>

      {/* Social Medias */}
      <ul className="flex flex-row items-center gap-2 lg:gap-8">
        {paths.map((path) => {
          return (
            <li key={path.url} className="hover:opacity-80">
              <Link href={path.url} aria-label={path.ariaLabel}>
                {path.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative z-40 flex w-full items-center justify-center px-4 pb-16 pt-20 sm:py-16 lg:py-24 2xl:py-32">
      {/* Bg Image */}
      <Image
        src="/footer/bg-footer.jpg"
        alt="footer background"
        fill={true}
        className="absolute inset-0 -z-10 h-full max-h-[416px] w-full object-cover object-top"
        sizes="100vw"
      />

      {/* Content */}
      <div className="z-10 flex flex-col items-center gap-4 lg:gap-16">
        <div className="flex flex-row items-center gap-8 lg:gap-16">
          {/* Logo Wispril */}
          <Image
            src={"/logo/wispril.png"}
            alt="Logo Wispril ITB 2024"
            width={250}
            height={250}
            className="size-24 lg:size-40"
          />

          {/* sm: Footer Text */}
          <FooterText className="hidden sm:flex" />

          {/* Logo ITB */}
          <Image
            src={"/logo/itb.png"}
            alt="Logo ITB"
            width={250}
            height={250}
            className="size-24 lg:size-40"
          />
        </div>

        {/* Mobile Footer Text */}
        <FooterText className="flex sm:hidden" />
      </div>
    </footer>
  );
}

export default Footer;
