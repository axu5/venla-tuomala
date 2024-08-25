"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Circle } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";

const MAX_DOTS_PER_ROW = 7;

type ImageCarouselProps = {
  images: {
    data: StaticImageData;
  }[];
  alt?: string;
  className?: string;
};

export function ImageCarousel({
  images,
  className,
  alt,
}: ImageCarouselProps) {
  if (!alt) {
    alt = "";
  }
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
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const rows = useCallback(
    () => ((total / MAX_DOTS_PER_ROW) | 0) + 1,
    [total]
  );

  return (
    <Carousel
      className={cn(className)}
      // TODO: add trackpad scrolling for laptops
      opts={{
        loop: true,
      }}
      setApi={setApi}>
      <CarouselContent
        className={cn("content-center shadow-sm", className)}>
        {images.map((image, i) => {
          return (
            <CarouselItem key={i} className='p-0'>
              <Image
                className='min-w-0 w-full h-full max-h-full object-cover object-center'
                src={image.data}
                alt={alt}
                width={6969}
                height={0}
                placeholder='blur'
                priority={i === 0}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {/* Controls */}
      <div className='flex flex-row items-center justify-between px-5 -translate-y-10 h-0'>
        <button
          className='group cursor-pointer w-10 h-10 flex items-center justify-center'
          onClick={() => {
            api?.scrollPrev();
          }}>
          <ArrowLeft className='w-8 h-8 rounded-full p-1 bg-gray-300 bg-opacity-70 group-hover:bg-opacity-100 transition-all group-hover:-translate-x-2' />
        </button>
        <div className='flex flex-col gap-y-1 w-[50%]'>
          {new Array(rows()).fill(null).map((_, i) => {
            const cols = Math.min(
              total - i * MAX_DOTS_PER_ROW,
              MAX_DOTS_PER_ROW
            );
            return (
              <div
                key={i}
                className='flex flex-row gap-x-3 justify-center'>
                {new Array(cols).fill(null).map((_, j) => {
                  const imageIndex = i * MAX_DOTS_PER_ROW + j;
                  return (
                    <Circle
                      key={`${i}-${j}`}
                      className={cn(
                        "cursor-pointer w-2 h-2 transition-all fill-[#ccc7] stroke-none",
                        {
                          "fill-white": imageIndex === current,
                          "hover:fill-[#fff5]":
                            imageIndex !== current,
                        }
                      )}
                      onClick={() => {
                        api?.scrollTo(imageIndex);
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        <button
          className='group w-10 h-10 flex items-center justify-center'
          onClick={() => {
            api?.scrollNext();
          }}>
          <ArrowRight className='w-8 h-8 rounded-full p-1 bg-gray-300 bg-opacity-70 group-hover:bg-opacity-100 transition-all group-hover:translate-x-2' />
        </button>
      </div>
    </Carousel>
  );
}
