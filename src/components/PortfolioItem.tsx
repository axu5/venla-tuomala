import Image, { StaticImageData } from "next/image";

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
  return (
    <div className='flex flex-col gap-x-20'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        {images.map((image, i) => {
          const position = `${image.center?.x ?? 50}% ${
            image.center?.y ?? 50
          }%`;
          return (
            <Image
              className='object-cover h-full'
              style={{
                objectPosition: position,
              }}
              key={i}
              src={image.src}
              alt={image.alt}
              sizes='100w'
              placeholder={
                image.src.src.endsWith(".JPG") ? "empty" : "blur"
              }
            />
          );
        })}
      </div>
    </div>
  );
}
