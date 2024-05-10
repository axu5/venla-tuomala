"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Circle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type ImageCarouselProps = {
  images: {
    url: string;
  }[];
};

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    setTotal(api.scrollSnapList().length);

    api.on("select", () => {
      // Do something on select.
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      setApi={setApi}>
      <CarouselContent className='content-center rounded'>
        {images.map(image => {
          return (
            <CarouselItem key={image.url}>
              <Image
                className='h-full object-cover object-center rounded'
                src={image.url}
                alt=''
                width={6969}
                height={0}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {/* Controls */}
      <div className='flex flex-row items-center gap-16 justify-center -translate-y-20'>
        <div
          className='group cursor-pointer w-10 h-10 flex items-center justify-center'
          onClick={() => {
            api?.scrollPrev();
          }}>
          <ArrowLeft className='w-8 h-8 rounded-full p-1 bg-gray-300 bg-opacity-70 group-hover:bg-opacity-100 transition-all group-hover:translate-x-2' />
        </div>
        <div className='flex flex-row gap-2'>
          {new Array(total).fill(null).map((_, i) => {
            return (
              <Circle
                className={cn(
                  "cursor-pointer w-4 h-4 transition-all fill-[#ccc5]",
                  {
                    "fill-black": i === current,
                    "hover:fill-[#fff5]": i !== current,
                  }
                )}
                onClick={() => {
                  api?.scrollTo(i);
                }}
              />
            );
          })}
        </div>
        <div
          className='group cursor-pointer w-10 h-10 flex items-center justify-center'
          onClick={() => {
            api?.scrollNext();
          }}>
          <ArrowRight className='w-8 h-8 rounded-full p-1 bg-gray-300 bg-opacity-70 group-hover:bg-opacity-100 transition-all group-hover:translate-x-2' />
        </div>
      </div>
    </Carousel>
  );
}
