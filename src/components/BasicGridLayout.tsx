"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Image = {
  url: string;
};

type BasicGridLayoutType = {
  images: Image[];
};

export function BasicGridLayout({ images }: BasicGridLayoutType) {
  return (
    // <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10'>
    <div className='flex flex-row flex-wrap'>
      {images.map((image, i) => {
        return (
          <ImageWithSkeleton key={image.url} image={image} i={i} />
        );
      })}
    </div>
  );
}

function ImageWithSkeleton({
  image,
  i,
}: {
  image: Image;
  i: number;
}) {
  const [reveal, setReveal] = useState(false);

  return (
    <div className='relative mx-auto w-[95%] md:w-[50%] lg:w-[33.333%] p-3 flex'>
      <Image
        className={cn("object-cover object-center rounded", {
          invisible: !reveal,
          visible: reveal,
        })}
        alt=''
        src={image.url}
        width={6969}
        quality={100}
        height={604}
        onError={() => setReveal(true)}
        onLoad={() => setReveal(true)}
        priority={i < 3}
      />
      <div
        className={cn(
          "animate-pulse absolute top-[12px] left-[12px] transition bg-gradient-to-tr from-slate-300 via-slate-200 to-slate-300 rounded w-[calc(100%-24px)] h-[calc(100%-24px)]",
          {
            hidden: reveal,
          }
        )}></div>
    </div>
  );
}
