"use client";

import Image, { StaticImageData } from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

type PortfolioItemProps = {
  images: {
    src: StaticImageData;
    alt: string;
    center?: {
      x: number;
      y: number;
    };
  }[];
};

export function PortfolioItem({ images }: PortfolioItemProps) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className='flex flex-col gap-x-20'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        {images.map((image, i) => {
          const position = `${image.center?.x ?? 50}% ${
            image.center?.y ?? 50
          }%`;

          const dialogImage = images[imageIndex % images.length];
          return (
            <Dialog
              key={image.src.src}
              onOpenChange={open => {
                if (open) {
                  setImageIndex(i);
                }
              }}>
              <DialogTrigger>
                <Image
                  className='object-cover h-full'
                  style={{
                    objectPosition: position,
                  }}
                  src={image.src}
                  alt={image.alt}
                  placeholder='blur'
                />
              </DialogTrigger>
              <DialogContent className='h-[85vh] overflow-y-scroll'>
                <DialogTitle className='text-muted-gray py-5'>
                  {image.alt}
                </DialogTitle>
                <DialogDescription
                  onKeyDown={event => {
                    if (
                      (event.key === "ArrowRight" ||
                        event.key === "ArrowUp") &&
                      imageIndex < images.length - 1
                    ) {
                      event.preventDefault();
                      setImageIndex(old => old + 1);
                    } else if (
                      (event.key === "ArrowLeft" ||
                        event.key === "ArrowDown") &&
                      imageIndex > 0
                    ) {
                      event.preventDefault();
                      setImageIndex(old => old - 1);
                    }
                  }}
                  className='flex flex-col gap-5 justify-between'>
                  <div>
                    <Image
                      className='object-cover'
                      style={{
                        objectPosition: position,
                      }}
                      src={dialogImage.src}
                      alt={dialogImage.alt}
                      placeholder='blur'
                    />
                  </div>
                  <div className='flex flex-row justify-between px-10'>
                    <Button
                      variant='outline'
                      disabled={imageIndex === 0}
                      onClick={() => {
                        setImageIndex(old => old - 1);
                      }}>
                      <ChevronLeft />
                    </Button>
                    <Button
                      variant='outline'
                      disabled={imageIndex === images.length - 1}
                      onClick={() => {
                        setImageIndex(old => old + 1);
                      }}>
                      <ChevronRight />
                    </Button>
                  </div>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
}
