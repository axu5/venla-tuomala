"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const events = [
  {
    name: "Birthday",
    slug: "birthday",
    thumbnail: "/images/events/birthday/IMG_0931.JPG",
  },
  {
    name: "Graduation",
    slug: "graduation",
    thumbnail: "/images/events/graduation/HNRI4251.jpg",
  },
  {
    name: "MRT",
    slug: "mrt",
    thumbnail: "/images/events/mrt/FC5A4397.jpg",
  },
  {
    name: "Sillis",
    slug: "sillis",
    thumbnail: "/images/events/sillis/IMG_2714.jpg",
  },
  {
    name: "Sitsit",
    slug: "sitsit",
    thumbnail: "/images/events/sitsit/FC5A5428.jpg",
  },
  {
    name: "Summer Festival",
    slug: "summer-festival",
    thumbnail: "/images/events/summer-festival/IMG_0908.JPG",
  },
  {
    name: "Venue",
    slug: "venue",
    thumbnail: "/images/events/venue/IMG_0893.JPG",
  },
  {
    name: "Wappu",
    slug: "wappu",
    thumbnail: "/images/events/wappu/Vappu.jpg",
  },
];

export default function Events() {
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

  return (
    <Carousel
      className='h-full md:w-full'
      opts={{
        loop: true,
      }}
      setApi={setApi}>
      <CarouselContent className='-ml-1'>
        {events.map((eventData, i) => (
          <CarouselItem
            key={eventData.slug}
            className='pl-1 basis-1/3'
            onClick={() => {
              if (!api) return;
              if (i === current) return;
              api.scrollTo(i);
            }}>
            <div className='px-10 grid grid-flow-row items-center grid-rows-[max-content_1fr] min-h-full'>
              <Image
                className={cn(
                  "transition-all shadow-sm rounded row-span-5",
                  {
                    "scale-90": i !== current,
                    "shadow-md": i === current,
                  }
                )}
                alt=''
                src={eventData.thumbnail}
                width={6969}
                height={0}
              />
              <a
                className='group align-bottom flex flex-row justify-center items-center'
                href={"/events/" + eventData.slug}>
                <span className='text-2xl font-semibold'>
                  {eventData.name}
                </span>
                <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-2 transition' />
              </a>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
