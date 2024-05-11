"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ArrowRight, Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Events() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);
  const { t } = useTranslation();

  const events = [
    {
      name: t("Birthday"),
      slug: "birthday",
      thumbnail: "/images/events/birthday/IMG_0931.JPG",
    },
    {
      name: t("Graduation"),
      slug: "graduation",
      thumbnail: "/images/events/graduation/HNRI4251.jpg",
    },
    {
      name: t("MRT"),
      slug: "mrt",
      thumbnail: "/images/events/mrt/FC5A4397.jpg",
    },
    {
      name: t("Sillis"),
      slug: "sillis",
      thumbnail: "/images/events/sillis/IMG_2714.jpg",
    },
    {
      name: t("Sitsit"),
      slug: "sitsit",
      thumbnail: "/images/events/sitsit/FC5A5428.jpg",
    },
    {
      name: t("Summer Festival"),
      slug: "summer-festival",
      thumbnail: "/images/events/summer-festival/IMG_0908.JPG",
    },
    {
      name: t("Venue"),
      slug: "venue",
      thumbnail: "/images/events/venue/IMG_0893.JPG",
    },
    {
      name: t("Wappu"),
      slug: "wappu",
      thumbnail: "/images/events/wappu/Vappu.jpg",
    },
  ];

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
              <Link
                className='group align-bottom flex flex-row justify-center items-center py-5'
                href={"/events/" + eventData.slug}>
                <span className='text-2xl font-semibold'>
                  {eventData.name}
                </span>
                <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-2 transition' />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Controls */}
      <div className='flex justify-center items-center'>
        <div className='flex flex-row items-center gap-16 justify-center backdrop-blur-lg rounded-md px-5 py-1'>
          <div className='flex flex-row gap-2'>
            {new Array(total).fill(null).map((_, i) => {
              return (
                <Circle
                  key={i}
                  className={cn(
                    "cursor-pointer w-2 h-2 transition-all fill-gray-400 stroke-none",
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
        </div>
      </div>
    </Carousel>
  );
}
