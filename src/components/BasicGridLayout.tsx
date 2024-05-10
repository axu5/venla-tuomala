"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

type BasicGridLayoutType = {
  images: {
    url: string;
  }[];
};

export function BasicGridLayout({ images }: BasicGridLayoutType) {
  return (
    <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10'>
      {images.map(image => {
        return (
          <Image
            key={image.url}
            className='col-span-1 w-full object-cover object-center rounded'
            alt=''
            src={image.url}
            width={6969}
            quality={100}
            height={0}
          />
        );
      })}
    </div>
  );
}
