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
  // Get current path
  const currentPath = usePathname();

  // Get session
  const { data: session } = useSession();

  return (
    <header className="sticky left-0 right-0 top-0 z-50 flex h-20 w-full flex-row items-center justify-between bg-[#8c0c08] font-westmeath text-[#ECC786] lg:h-24 lg:px-14">
      {/* Bg Image */}
      <Image
        src="/navbar/bg-navbar.jpg"
        alt="background"
        fill={true}
        sizes="100vw"
        priority={true}
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
        aria-label="Open Menu"
        onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
      >
        <MenuIcon size={40} />
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
            src="/navbar/bg-sidebar.jpg"
            alt="Sidebar Background"
            width={272}
            height={800}
            className="absolute z-0 h-full w-full object-cover lg:hidden"
          />

          {/* Close Menu */}
          <button
            className="absolute right-5 top-6 z-50 flex aspect-square h-10 items-center justify-center lg:hidden"
            aria-label="Close Menu"
            onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
          >
            <X className="stroke z-50 size-full stroke-[#F4D38E]" />
          </button>

          {/* Menus */}
          <nav className="flex h-full w-full flex-col items-center gap-10 lg:flex-row lg:gap-12 xl:gap-16">
            <div className="z-20 h-full w-full overflow-hidden pb-12 pt-24 lg:py-0">
              <ul className="z-20 flex h-full w-full flex-col items-center gap-7 overflow-y-auto text-2xl lg:flex lg:flex-row lg:items-center lg:gap-14">
                {/* Basic Menus */}
                {paths.map((path) => {
                  return (
                    <li key={path.name} className="flex">
                      <Link
                        href={path.url}
                        className={`${
                          currentPath.startsWith(path.url)
                            ? "rounded-md bg-[#ECC786] px-4 py-2 text-[#A01B14]"
                            : "text-[#ECC786] hover:opacity-70"
                        }`}
                      >
                        {path.name}
                      </Link>
                    </li>
                  );
                })}

                {session ? (
                  <>
                    {/* DESKTOP DROPDOWN */}
                    <li className="hidden lg:flex lg:justify-center lg:p-1">
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          asChild
                          className="outline-2 outline-offset-2 outline-[#F4D38E] hover:outline focus:outline data-[state=open]:outline"
                        >
                          <button className="size-10 rounded-full">
                            <Avatar className="size-full border-transparent">
                              <AvatarImage
                                src={session.image ?? ""}
                                alt="Avatar"
                              />
                              <AvatarFallback>
                                <Image
                                  src="/components/default-avatar.png"
                                  alt="Default Avatar"
                                  className="size-full object-cover object-center"
                                  width={40}
                                  height={40}
                                />
                              </AvatarFallback>
                            </Avatar>
                          </button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                          sideOffset={12}
                          className="border border-[#ECC786] bg-[#A01B14] p-1 font-cgp font-semibold text-[#ECC786]"
                        >
                          <DropdownMenuLabel className="text-center font-bold">
                            My Account
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator className="bg-[#ECC786]" />
                          <Link href="/dashboard/settings">
                            <DropdownMenuItem className="px-2 py-1.5 focus:cursor-pointer focus:bg-[#801610] focus:text-[#ECC786]">
                              <Settings className="mr-2 h-5 w-5" />
                              <span>Settings</span>
                            </DropdownMenuItem>
                          </Link>
                          <Link href="/dashboard/inbox">
                            <DropdownMenuItem className="px-2 py-1.5 focus:cursor-pointer focus:bg-[#801610] focus:text-[#ECC786]">
                              <Mail className="mr-2 h-5 w-5" />
                              <span>Inbox</span>
                            </DropdownMenuItem>
                          </Link>
                          <DropdownMenuItem className="px-2 py-1.5 focus:cursor-pointer focus:bg-[#801610] focus:text-[#ECC786]">
                            <LogOut className="mr-2 h-5 w-5" />
                            <span
                              onClick={() =>
                                signOut({ callbackUrl: "/?phState=reset" })
                              }
                            >
                              Log Out
                            </span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>

                    {/* MOBILE LIST */}
                    <li className="block lg:hidden">
                      <Link
                        href="/dashboard/settings"
                        className={`${
                          currentPath.startsWith("/dashboard/settings")
                            ? "rounded-md bg-[#ECC786] px-4 py-2 text-[#A01B14]"
                            : "text-[#ECC786] hover:opacity-70"
                        }`}
                      >
                        Settings
                      </Link>
                    </li>
                    <li className="block lg:hidden">
                      <Link
                        href="/dashboard/inbox"
                        className={`${
                          currentPath.startsWith("/dashboard/inbox")
                            ? "rounded-md bg-[#ECC786] px-4 py-2 text-[#A01B14]"
                            : "text-[#ECC786] hover:opacity-70"
                        }`}
                      >
                        Inbox
                      </Link>
                    </li>
                    <li className="block lg:hidden">
                      <Button
                        onClick={() =>
                          signOut({ callbackUrl: "/?phState=reset" })
                        }
                        className="flex h-12 items-center justify-center rounded-md bg-[#A01B14] px-8 py-3 text-2xl text-[#ECC786] hover:bg-[#801610]"
                      >
                        Log Out
                      </Button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link href="/auth/log-in" className="z-20">
                      {/* Login Button */}
                      <Button className="flex h-12 items-center justify-center rounded-md bg-[#A01B14] px-8 py-3 text-2xl leading-none text-[#ECC786] hover:bg-[#801610]">
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
            className="absolute bottom-28 right-1/2 z-10 h-52 w-52 translate-x-1/2 object-contain sm:hidden"
          />

          {/* Theater Decoration */}
          <Image
            src={"/navbar/theater.png"}
            alt="Theater Decoration"
            width={272}
            height={461}
            className="absolute -bottom-4 h-auto w-full object-contain sm:hidden"
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
