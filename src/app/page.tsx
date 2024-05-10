import { BACKGROUND } from "@/icons/background";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      {/* Nav */}
      <div className='sticky top-5 bg-goldenish z-10'>
        <nav className='border-t-2 border-b-2 py-2 border-black'>
          <ul className='flex flex-row justify-around'>
            <li className='uppercase text-2xl font-bold'>About</li>
            <li className='uppercase text-2xl font-bold'>
              Portfolio
            </li>
            <li className='uppercase text-2xl font-bold'>Contact</li>
          </ul>
        </nav>
      </div>
      {/* TODO scroll bar animation thing */}
      <div className='max-w-7xl'>
        {/* Hero */}
        <div className='flex flex-col justify-center items-center py-10 px-40 h-screen lg:h-[66vh]'>
          <BACKGROUND.GOLDEN_RATIO className='absolute -z-10 top-[225px] rotate-90 w-screen h-screen lg:rotate-0 lg:w-[calc(60vh*1.618)] lg:h-[60vh]' />
          <div className='absolute top-[225px] lg:w-[calc(60vh*1.618)] lg:h-[60vh] grid grid-rows-11 lg:grid-rows-1 grid-cols-1 lg:grid-cols-11 px-6 py-4 lg:rotate-0'>
            <div className='col-span-7 p-5'>
              <h1 className='font-semibold uppercase tracking-tight text-6xl'>
                Venla Tuomala
              </h1>
              <h2 className='pt-serif-regular-italic text-5xl'>
                Photographer
              </h2>
            </div>
            <div className='col-span-4'>
              <Image
                src='/venla.png'
                alt='venla'
                className='p-10'
                width={420}
                height={420}
              />
            </div>
          </div>
        </div>

        {/* Accordion */}
        <AccordionList />

        {/* Said about me
          <div className='flex flex-col items-center'>
            <h2 className='text-3xl font-bold w-full text-center uppercase font-sans border border-transparent border-y-black my-10 py-2'>
              Said about me
            </h2>

            <div className='grid grid-cols-3 grid-flow-row'>
              <div className='flex flex-col'>
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        className='w-full max-h-96'
                        src='/images/couples/couple1/VEN11.jpg'
                        alt=''
                        fill={true}
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        className='w-full'
                        src='/images/couples/couple1/VEN02299.jpg'
                        alt=''
                        width={400}
                        height={600}
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        className='w-full'
                        src='/images/couples/couple1/VEN02523.jpg'
                        alt=''
                        width={400}
                        height={600}
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div> */}
      </div>
    </>
  );
}

type AccordionItemType = {
  text: string;
  link: string;
};

function AccordionList() {
  const links: AccordionItemType[] = [
    {
      text: "Weddings",
      link: "/weddings",
    },
    {
      text: "Events",
      link: "/events",
    },
    {
      text: "Portraits",
      link: "/portraits",
    },
    {
      text: "Couples",
      link: "/couples",
    },
    {
      text: "Other work",
      link: "/other-work",
    },
  ];

  return (
    <>
      {links.map((link, i) => {
        return (
          <AccordionItem
            className={cn(
              "transition-all border border-black hover:bg-goldenisher hover:shadow-xl from-60% hover:to-goldenish motion-reduce:transition-none motion-reduce:hover:transform-none",
              {
                "border-t-transparent": i !== 0,
              }
            )}
            text={link.text}
            link={link.link}
            key={link.text}
          />
        );
      })}
    </>
  );
}

type AccordionItemComponentType = AccordionItemType & {
  className: string;
};

function AccordionItem({
  className,
  text,
  link,
}: AccordionItemComponentType) {
  return (
    <div className={cn(className, "flex flex-col group")}>
      <a
        className='w-full p-5 pt-serif-regular text-2xl flex flex-row items-center content-center'
        href={link}>
        {text}
        <ArrowRight className='pl-2 w-8 h-4 transition-all group-hover:pl-4' />
      </a>
    </div>
  );
}
