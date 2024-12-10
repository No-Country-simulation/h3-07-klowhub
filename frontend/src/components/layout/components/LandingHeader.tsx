"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LandingHeader = () => {
  const pathname = usePathname();
  if (pathname !== "/") {
    return null;
  }
  return (
    <header className="min-h-20 bg-[url('/assets/backgrounds/headerBackground.png')] flex px-3 items-center gap-3 justify-between relative pt-5 w-full">
      <div className="absolute h-full w-full left-0 bg-[#1F202699]/40 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md"></div>
      <nav className="flex gap-2 xl:gap-6 items-center justify-between z-10 w-full">
        <Image
          src="/assets/icons/klowhub.png"
          alt="Klowhub logo"
          height={50}
          width={50}
          className="text-xs"
        />
        <Link href={"/login"}>
          <Button variant="solid" className="bg-primario300 text-white">
            Iniciar Sesión
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default LandingHeader;
