"use client";
import Image from "next/image";

type BasicGridLayoutType = {
  images: {
    url: string;
  }[];
};

export function BasicGridLayout({ images }: BasicGridLayoutType) {
  return (
    // <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10'>
    <div className='flex flex-row items flex-wrap'>
      {images.map(image => {
        return (
          <Image
            key={image.url}
            className='col-span-1 mx-auto w-[95%] md:w-[50%] lg:w-[33.333%] p-3 object-cover object-center rounded'
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
