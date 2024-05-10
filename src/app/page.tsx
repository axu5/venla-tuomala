import { ImageCarousel } from "@/components/ImageCarousel";
import { BACKGROUND } from "@/icons/background";
import { cn } from "@/lib/utils";
import { ArrowRight, Dot } from "lucide-react";
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
      <main className='max-w-7xl'>
        {/* Hero */}
        <div className='flex flex-col justify-center items-center py-10 px-40 h-screen md:h-[66vh]'>
          <BACKGROUND.GOLDEN_RATIO className='invisible sm:visible md:absolute -z-10 top-[225px] rotate-0 w-[calc(60vh*1.618)] h-[60vh]' />
          <div className='absolute top-[225px] lg:w-[calc(60vh*1.618)] lg:h-[60vh] grid grid-rows-11 lg:grid-rows-1 grid-cols-1 lg:grid-cols-11 px-6 py-4 lg:rotate-0'>
            <div className='md:col-span-7 p-5'>
              <h1 className='font-semibold uppercase tracking-tight text-6xl'>
                Venla Tuomala
              </h1>
              <h2 className='pt-serif-regular-italic text-5xl'>
                Photographer
              </h2>
            </div>
            <div className='md:col-span-4'>
              <Image
                src='/images/venla.png'
                alt='venla'
                className='p-10'
                width={420}
                height={420}
              />
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-bold w-full text-center uppercase font-sans border border-transparent border-y-black my-10 py-2'>
            Portfolio
          </h2>
        </div>
        <AccordionList />

        {/* Said about me */}
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-bold w-full text-center uppercase font-sans border border-transparent border-y-black my-10 py-2'>
            Testimonials
          </h2>
        </div>
        <div className='flex flex-col md:grid md:grid-cols-3 px-10 md:px-20 gap-8 grid-rows-[max-content_1fr]'>
          {/* Events */}
          <div className='grid grid-cols-subgrid col-span-2'>
            <div className='col-span-1'>
              <ImageCarousel
                images={[
                  { url: "/images/events/sitsit/FC5A5428.jpg" },
                  { url: "/images/events/sitsit/FC5A5714.jpg" },
                  { url: "/images/events/sitsit/FC5A5787.jpg" },
                  { url: "/images/events/sitsit/FC5A5789.jpg" },
                  { url: "/images/events/sitsit/FC5A5932.jpg" },
                ]}
              />
            </div>
            <div>
              <h3 className='pt-serif-bold text-2xl pt-5 pb-1 md:py-1'>
                Events
              </h3>
              <div className='pt-serif-regular-italic flex flex-row'>
                18.03.2024 <Dot /> Helsinki, Finland
              </div>
              <div>
                “Venla is amazing hire her hire her hire her hire her
                hire her hire her hire her hire her hire her hire her
                hire her hire her hire her hire her hire her hire her
                hire her”
              </div>
              <a
                href='/events'
                className='pt-serif-regular-italic hover:underline text-blue-600'>
                see more...
              </a>
            </div>
          </div>

          {/* Graduations */}
          <div className='grid grid-rows-subgrid col-span-1 row-span-3'>
            <div className='col-span-1 row-span-2 grid grid-rows-subgrid'>
              <ImageCarousel
                className='row-span-2'
                images={[
                  { url: "/images/portraits/HNRI4240.jpg" },
                  { url: "/images/events/graduation/HNRI4251.jpg" },
                  { url: "/images/events/graduation/HNRI4565.jpg" },
                  { url: "/images/events/graduation/HNRI4573.jpg" },
                ]}
              />
            </div>
            <div>
              <h3 className='pt-serif-bold text-2xl pt-5 pb-1 md:py-1'>
                Graduations
              </h3>
              <div className='pt-serif-regular-italic flex flex-row'>
                18.03.2024 <Dot /> Lahti, Finland
              </div>
              <div>
                “Venla is a baddie. If I didn’t have a bf I would date
                her”
              </div>
              <a
                href='/events/graduations'
                className='pt-serif-regular-italic hover:underline text-blue-600'>
                see more...
              </a>
            </div>
          </div>

          {/* Couples Photography */}
          <div className='grid grid-cols-subgrid col-span-2 row-span-5'>
            <div className='col-span-1 row-span-2 grid grid-rows-subgrid'>
              <ImageCarousel
                images={[
                  { url: "/images/couples/couple1/VEN11.jpg" },
                  { url: "/images/couples/couple1/VEN02299.jpg" },
                ]}
              />
            </div>
            <div className='col-span-1'>
              <h3 className='pt-serif-bold text-2xl pt-5 pb-1 md:py-1'>
                Couple's Photography
              </h3>
              <div className='pt-serif-regular-italic flex flex-row'>
                18.03.2024 <Dot /> Mikkeli, Finland
              </div>
              <div>
                “Hello this is a very good and skilled and talented
                photographer, Venla is also very fun to hang out with
                she’s cool like that” - Axu
              </div>
              <a
                href='/couples'
                className='pt-serif-regular-italic hover:underline text-blue-600'>
                see more...
              </a>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <div className='p-12 m-12'>FOOTER GOES HERE</div>
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
      text: "Couples",
      link: "/couples",
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
      text: "Weddings",
      link: "/weddings",
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
              "transition-all border border-x-0 md:border-x-2 border-black hover:bg-goldenisher hover:shadow-xl from-60% hover:to-goldenish motion-reduce:transition-none motion-reduce:hover:transform-none",
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
