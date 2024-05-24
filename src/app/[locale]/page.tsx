import { ImageCarousel } from "@/components/ImageCarousel";
import { TypingText } from "@/components/TypingText";
import { BACKGROUND } from "@/icons/background";
import { ArrowRight, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import initTranslations, { LocaleParam } from "../i18n";

const i18nNamespaces = ["home", "common"];

export default async function LandingPage({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      {/* TODO scroll bar animation thing */}
      <main className='max-w-7xl'>
        <div className='w-full'>
          <Image
            className='w-full'
            src='/images/events/birthday/HNRI9011.png'
            alt=''
            width={6969}
            height={0}
          />
        </div>

        {/* Accordion */}
        <SubTitle title={t("About")} id='about' />
        <div className='relative max-w-5xl mx-auto h-[calc(min(1024px,100vw)/1.618)]'>
          <div className='absolute grid top-0 left-0 w-full p-[3px] h-full grid-cols-[61.80%_38.20%]'>
            <div className=''>
              <h1 className='text-5xl p-10 uppercase font-semibold'>
                Venla Tuomala
              </h1>
              <span className='p-10 text-3xl font-semibold'>
                I am <TypingText />
              </span>
            </div>
            <div className='flex flex-col justify-end w-full h-full'>
              <Image
                src='/images/venla2.png'
                alt='Pic of me'
                width={6969}
                height={0}
              />
            </div>
          </div>
          <BACKGROUND.GOLDEN_RATIO className='w-full h-full' />
        </div>

        <SubTitle title={t("Portfolio")} id='portfolio' />
        <div className='grid px-5 grid-cols-1 md:grid-cols-2 grid-rows-2 gap-2'>
          <PortfolioItem
            src={"/images/weddings/HNRI9681.jpg"}
            alt={"A bride holding a bouquet in the air."}
            href={"/couples"}
            title={"Couples"}
          />
          <PortfolioItem
            src={"/images/events/summer-festival/IMG_0921.JPG"}
            alt={"Two sirpa fans"}
            href={"/events/"}
            title={"Events"}
          />
          <PortfolioItem
            src={"/images/portraits/Screenshot.png"}
            alt={"An amazing portrait"}
            href={"/portraits/"}
            title={"Portraits"}
          />
          <PortfolioItem
            src={"/images/companies/companies.png"}
            alt={"An amazing office space and working environment"}
            href={"/companies/"}
            title={"Companies"}
          />
        </div>

        <SubTitle title={t("What to expect")} id='what-to-expect' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 px-5'>
          <Link
            href='/customer/private'
            className='flex items-center justify-center h-48 bg-goldenisher rounded-md hover:drop-shadow-lg'>
            Private Customers
          </Link>
          <Link
            href='/customer/corporate'
            className='flex items-center justify-center h-48 bg-goldenisher rounded-md hover:drop-shadow-lg'>
            Corporate Customers
          </Link>
        </div>

        {/* Said about me */}
        <SubTitle title={t("Testimonials")} id='testimonials' />
        <Testimonials t={t} />
      </main>
    </>
  );
}

type SubTitleProps = {
  title: string;
  id: string;
};

function SubTitle({ title, id }: SubTitleProps) {
  return (
    <div className='scroll-m-16 flex flex-col items-center' id={id}>
      <h2 className='text-3xl font-bold w-full text-center uppercase font-sans border border-transparent border-y-black my-10 py-2'>
        {title}
      </h2>
    </div>
  );
}

type PortfolioItemProps = {
  src: string;
  alt: string;
  href: string;
  title: string;
};

function PortfolioItem({
  src,
  alt,
  href,
  title,
}: PortfolioItemProps) {
  return (
    <Link
      href={href}
      className='group flex flex-col justify-center items-center hover:drop-shadow-lg'>
      <Image
        className='contrast-[90%] group-hover:contrast-100 transition rounded-md'
        src={src}
        alt={alt}
        width={6969}
        height={0}
      />
      <span className='text-white h-0 flex flex-row items-center pt-serif-regular text-3xl -translate-y-16 px-5 py-2 rounded-full'>
        {title}{" "}
        <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-4 transition' />
      </span>
    </Link>
  );
}

function Testimonials({ t }: { t: any }) {
  return (
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
            {t("Events")}
          </h3>
          <div className='pt-serif-regular-italic flex flex-row'>
            18.03.2024 <Dot /> Helsinki, {t("Finland")}
          </div>
          <div>
            “Venla is amazing hire her hire her hire her hire her hire
            her hire her hire her hire her hire her hire her hire her
            hire her hire her hire her hire her hire her hire her”
          </div>
          <Link
            href='/events'
            className='pt-serif-regular-italic hover:underline text-blue-600'>
            {t("see more")}...
          </Link>
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
            {t("Graduations")}
          </h3>
          <div className='pt-serif-regular-italic flex flex-row'>
            18.03.2024 <Dot /> Lahti, {t("Finland")}
          </div>
          <div>
            “Venla is a baddie. If I didn’t have a bf I would date
            her”
          </div>
          <Link
            href='/events/graduation'
            className='pt-serif-regular-italic hover:underline text-blue-600'>
            {t("see more")}...
          </Link>
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
            {t("Couple's Photography")}
          </h3>
          <div className='pt-serif-regular-italic flex flex-row'>
            18.03.2024 <Dot /> Mikkeli, {t("Finland")}
          </div>
          <div>
            “Hello this is a very good and skilled and talented
            photographer, Venla is also very fun to hang out with
            she’s cool like that” - Axu
          </div>
          <Link
            href='/couples'
            className='pt-serif-regular-italic hover:underline text-blue-600'>
            {t("see more")}...
          </Link>
        </div>
      </div>
    </div>
  );
}
