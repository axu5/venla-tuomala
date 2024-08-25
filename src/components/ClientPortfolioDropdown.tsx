"use client";

import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";
import { ChevronDown } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { useEffect, useState } from "react";

type ClientPortfolioDropdownProps = {
  t: Record<string, string>;
};

export function ClientPortfolioDropdown({
  t,
}: ClientPortfolioDropdownProps) {
  // workaround to hydration error
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return (
      <div className='flex flex-row items-center'>
        <Link
          href='/portfolio'
          className='capitalize font-ibarra flex flex-row justify-center items-center'>
          {t["PortfolioPage"]}
        </Link>
        <ChevronDown className='w-4 h-4 ml-4' />
      </div>
    );
  }

  return (
    <HoverCard openDelay={0} closeDelay={1000}>
      <HoverCardTrigger className='flex flex-row items-center'>
        <Link
          href='/portfolio'
          className='capitalize font-ibarra flex flex-row justify-center items-center'>
          {t["PortfolioPage"]}
        </Link>
        <ChevronDown className='w-4 h-4 ml-4' />
      </HoverCardTrigger>
      <Links t={t} />
    </HoverCard>
  );
}

function Links({ t }: ClientPortfolioDropdownProps) {
  return (
    <HoverCardContent className='flex flex-col font-ibarra'>
      <Link
        href='/portfolio/lifestyle'
        className={buttonVariants({
          variant: "link",
        })}>
        {t["Lifestyle"]}
      </Link>
      <Link
        href='/portfolio/portraits'
        className={buttonVariants({
          variant: "link",
        })}>
        {t["Portraits"]}
      </Link>
      <Link
        href='/portfolio/brands'
        className={buttonVariants({
          variant: "link",
        })}>
        {t["Brands"]}
      </Link>
    </HoverCardContent>
  );
}
