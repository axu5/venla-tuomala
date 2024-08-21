import { cn } from "@/lib/utils";
import { SubTitle } from "./SubTitle";
import Image from "next/image";

type PortfolioItemProps = {
  name: string;
  images: {
    src: string;
    alt: string;
    center?: {
      x: number;
      y: number;
    };
  }[];
};

export function PortfolioItem({ name, images }: PortfolioItemProps) {
  return (
    <div className='flex flex-col gap-x-20'>
      <SubTitle className='py-10'>{name}</SubTitle>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        {images.map(image => {
          const position = `${image.center?.x ?? 50}% ${
            image.center?.y ?? 50
          }%`;
          return (
            <Image
              className='object-cover h-full'
              style={{
                objectPosition: position,
              }}
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={6969}
              height={0}
            />
          );
        })}
      </div>
    </div>
  );
}
