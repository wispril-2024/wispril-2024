"use client";

import { MenuIcon } from "../icons/menu";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { X } from "lucide-react";
import { LogOut, Mail, Settings } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  isNavbarExpanded: boolean;
  setIsNavbarExpanded: (expanded: boolean) => void;
}

// Paths
const paths = [
  {
    name: "Ta Fair",
    url: "/ta-fair",
  },
  {
    name: "Graduates",
    url: "/graduates",
  },
  {
    name: "About Us",
    url: "/about-us",
  },
  {
    name: "Merchandise",
    url: "/merchandise",
  },
];

function Navbar({ isNavbarExpanded, setIsNavbarExpanded }: NavbarProps) {
  const currentPath = usePathname();
  const { data: session } = useSession();

  return (
    <header className="sticky left-0 right-0 top-0 z-50 flex h-20 w-full flex-row items-center justify-between font-westmeath text-[#ECC786] lg:h-24 lg:px-24">
      {/* Bg Image */}
      <Image
        src="/navbar/bg-navbar.png"
        alt="background"
        width={1440}
        height={100}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Logo */}
      <Link className="ml-5 flex flex-row items-center gap-3 lg:ml-0" href="/">
        <Image
          src="/logo/wispril.png"
          alt="logo"
          width={80}
          height={80}
          className="size-11 object-contain lg:size-14"
        />
        <span className="text-2xl lg:text-3xl">Wispril 2024</span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="flex aspect-square h-full items-center justify-center bg-[#A01B14] lg:hidden"
        onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
      >
        <MenuIcon />
      </button>

      {/* Side Bar */}
      <div
        className={`fixed right-0 top-0 z-10 flex h-full w-[272px] flex-col items-center justify-between gap-6 duration-300 ease-in-out lg:static lg:flex lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:items-center lg:gap-16 lg:bg-none ${
          isNavbarExpanded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full w-full">
          {/* Sidebar bg */}
          <Image
            src="/navbar/bg-sidebar.png"
            alt="Sidebar Background"
            width={272}
            height={800}
            className="absolute z-0 h-full w-full object-cover lg:hidden"
          />

          {/* Close Menu */}
          <button
            className="absolute right-5 top-5 z-50 flex aspect-square h-12 items-center justify-center lg:hidden"
            onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
          >
            <X className="stroke z-50 size-full stroke-[#F4D38E]" />
          </button>

          {/* Menus */}
          <nav className="flex h-full w-full flex-col items-center gap-10 lg:flex-row lg:gap-12 xl:gap-16">
            <div className="z-20 h-full w-full overflow-hidden pb-12 pt-24 lg:py-0">
              <ul className="z-20 flex h-full w-full flex-col items-center gap-8 overflow-y-scroll text-2xl lg:flex lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
                {paths.map((path) => {
                  return (
                    <li key={path.name} className="hover:opacity-70">
                      <Link
                        href={path.url}
                        className={`${
                          currentPath.startsWith(path.url)
                            ? "text-[#EAC050]"
                            : "text-[#ECC786]"
                        }`}
                      >
                        {path.name}
                      </Link>
                    </li>
                  );
                })}

                {/* Check Session */}
                {session && session.user ? (
                  <>
                    <li className="hidden lg:block">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Avatar>
                            <AvatarImage
                              src={session.user.image as string}
                              alt="Avatar"
                            />
                            <AvatarFallback>
                              {session.user.name?.slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="bg-[#A01B14] font-westmeath text-[#ECC786]">
                          <DropdownMenuLabel className="text-center text-xl">
                            My Account
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator className="bg-[#ECC786]" />
                          <div className="flex w-full flex-col gap-1 px-2 pb-2">
                            <DropdownMenuItem className="p-1 text-lg focus:cursor-pointer focus:bg-[#801610] focus:text-[#ECC786]">
                              <Settings className="mr-2 h-5 w-5" />
                              <Link href="/dashboard/settings">Settings</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="p-1 text-lg focus:cursor-pointer focus:bg-[#801610] focus:text-[#ECC786]">
                              <Mail className="mr-2 h-5 w-5" />
                              <Link href="/dashboard/inbox">Inbox</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="p-1 text-lg focus:cursor-pointer focus:bg-[#801610] focus:text-[#ECC786]">
                              <LogOut className="mr-2 h-5 w-5" />
                              <span
                                onClick={() =>
                                  signOut({ callbackUrl: "/?phState=reset" })
                                }
                              >
                                Sign Out
                              </span>
                            </DropdownMenuItem>
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>

                    <li className="block lg:hidden">
                      <Link
                        href="/dashboard/settings"
                        className="hover:opacity-70"
                      >
                        Settings
                      </Link>
                    </li>
                    <li className="block lg:hidden">
                      <Link
                        href="/dashboard/inbox"
                        className="hover:opacity-70"
                      >
                        Inbox
                      </Link>
                    </li>
                    <li className="block lg:hidden">
                      <Button
                        onClick={() =>
                          signOut({ callbackUrl: "/?phState=reset" })
                        }
                        className="flex h-12 items-center justify-center rounded-none bg-[#A01B14] px-8 py-3 text-2xl text-[#ECC786] hover:bg-[#801610]"
                      >
                        Sign Out
                      </Button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link href="/auth/log-in" className="z-20">
                      {/* Login Button */}
                      <Button className="flex h-12 items-center justify-center rounded-none bg-[#A01B14] px-8 py-3 text-2xl text-[#ECC786] hover:bg-[#801610]">
                        Log In
                      </Button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </nav>

          {/* Logo */}
          <Image
            src={"/logo/wispril.png"}
            alt="Logo Wispril ITB 2024"
            width={203}
            height={203}
            className="absolute bottom-32 right-1/2 z-10 h-52 w-52 translate-x-1/2 object-contain lg:hidden"
          />

          {/* Theater Decoration */}
          <Image
            src={"/navbar/theater.png"}
            alt="Theater Decoration"
            width={272}
            height={461}
            className="absolute bottom-0 h-auto w-full object-contain lg:hidden"
          />
        </div>
      </div>

      {/* Blur background */}
      {isNavbarExpanded && (
        <div
          className="fixed inset-0 z-0 h-full w-full bg-opacity-80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsNavbarExpanded(false)}
        />
      )}
    </header>
  );
}

export default Navbar;
