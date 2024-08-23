import { SubTitle } from "@/components/SubTitle";
import { Title } from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { ASSETS } from "@/constants";
import { CircleArrowDown, Dot } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import initTranslations, { LocaleParam } from "../i18n";
import saaraImg from "@/../public/portraits/Saara.jpg";
import engagementImg from "@/../public/portraits/Engagement1.jpg";
import fcProbbaImg from "@/../public/brands/FC_Probba.2.jpg";
import xxlMosso5 from "@/../public/lifestyle/XXL_Mössö.5.JPG";
import xxlMosso6 from "@/../public/lifestyle/XXL_Mössö.6.JPG";
import graduation1 from "@/../public/lifestyle/Graduation_S.1.jpg";
import birthdayKK3 from "@/../public/lifestyle/Birthday_K&K.3.jpg";
import birthdayKK13 from "@/../public/lifestyle/Birthday_K&K.13.jpg";
import wedding8 from "@/../public/lifestyle/Wedding.8.jpg";
import riia from "@/../public/brands/PB_Riia.png";

export default async function LandingPage({
  params: { locale },
}: LocaleParam) {
  return (
    <main className='flex flex-col'>
      <div className='max-w-5xl px-10 md:mx-auto'>
        <Hero locale={locale} />
        <Overlay />
        <HiThere locale={locale} />
      </div>
      <WhatsIncluded locale={locale} />
      <div className='max-w-5xl px-10 md:mx-auto'>
        <Testimonials locale={locale} />
      </div>
    </main>
  );
}

function Overlay() {
  return (
    <>
      <CircleArrowDown className='animate-bounce text-goldenisher w-16 h-16 stroke-[1px] m-10 hidden md:block absolute bottom-5 left-10' />
    </>
  );
}

function Signature() {
  return <ASSETS.signature />;
}

async function Hero({ locale }: LocaleParam["params"]) {
  const { t } = await initTranslations(locale, ["landing_page"]);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-10 pb-5 md:pb-20 md:gap-4 pt-10 min-h-screen'>
      <div className='flex flex-col'>
        <div className='flex flex-col md:pb-64 justify-center items-center md:items-start'>
          <Title className='pt-5 text-7xl md:py-10'>
            Venla Tuomala
          </Title>
          <SubTitle className='flex justify-center items-center text-left pb-5 md:py-0'>
            {t("Description")}
          </SubTitle>
        </div>
      </div>
      <div className='flex flex-col max-h-[600px]'>
        <div className='grid grid-cols-[3fr_2fr] grid-rows-[2fr_3fr] w-full gap-3 min-h-0 min-w-0'>
          <div className='row-span-2 overflow-hidden'>
            <Image
              src={saaraImg}
              alt='Saaran ylioppilaskuvaus Lahden metsässä'
              className='object-cover overflow-hidden min-h-0 h-full'
            />
          </div>
          <div className='overflow-hidden'>
            <Image
              src={engagementImg}
              alt='Kihlajaiskuvaus Lahden järvessä'
              className='object-cover overflow-hidden min-h-0 h-full'
            />
          </div>
          <div className='overflow-hidden'>
            <Image
              src={fcProbbaImg}
              alt='Jalkapallotreenit Mikkelissä'
              className='object-cover overflow-hidden min-h-0 h-full'
            />
          </div>
        </div>
        <div className='flex-col justify-center items-center hidden md:flex'>
          <Signature />
        </div>
      </div>
    </div>
  );
}

async function HiThere({ locale }: LocaleParam["params"]) {
  const { t } = await initTranslations(locale, ["landing_page"]);
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
          <Title id='hi-there' className='pb-5 md:pb-20 mx-5 md:mx-0'>
            {t("Hi there!")}
          </Title>
          <div className='flex flex-col gap-y-5 max-w-full xl:pl-0 mx-5 md:mx-0'>
            <div className='text-2xl md:text-3xl font-ibarra'>
              <Balancer>{t("So, you need visuals?")}</Balancer>
            </div>
            <div className='text-2xl md:text-3xl font-ibarra'>
              {t("Whether its for professional or personal needs")}
            </div>
            <div className='text-2xl md:text-3xl font-ibarra'>
              <Balancer>
                {t("Let’s connect, plan, and create!")}
              </Balancer>
            </div>
            <div className='items-center md:items-start max-w-3xl pt-5'>
              <Link
                className={buttonVariants({
                  variant: "call-to-action",
                  size: "lg",
                })}
                href='/contact'>
                {t("Get in touch!")}
              </Link>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-[repeat(10,1fr)] gap-3 max-w-full md:max-w-[75%] mx-auto max-h-[80vh] pt-5 md:pt-0'>
          <div className='row-span-4 w-full h-full overflow-hidden row-start-2'>
            <Image
              src={xxlMosso5}
              alt=''
              className='object-cover overflow-hidden min-h-0 h-full'
            />
          </div>
          <div className='row-span-4 w-full h-full overflow-hidden'>
            <Image
              src={graduation1}
              alt=''
              className='object-cover overflow-hidden min-h-0 h-full'
            />
          </div>
          <div className='row-span-2 w-full h-full overflow-hidden'>
            <Image
              src={birthdayKK3}
              alt=''
              className='object-cover object-[50%_70%] overflow-hidden min-h-0 h-full'
            />
          </div>
          <div className='row-span-3 w-full h-full overflow-hidden'>
            <Image
              src={wedding8}
              alt=''
              className='object-cover overflow-hidden min-h-0 h-full'
            />
          </div>
          <div className='row-span-3 w-full h-full overflow-hidden'>
            <Image
              src={xxlMosso6}
              alt=''
              className='object-cover overflow-hidden min-h-0 h-full'
            />
          </div>
        </div>
      </div>
    </>
  );
}

async function WhatsIncluded({ locale }: LocaleParam["params"]) {
  const { t } = await initTranslations(locale, ["landing_page"]);
  return (
    <section className='bg-[#232323] w-screen py-28 my-20 px-10'>
      <div className='max-w-5xl mx-auto flex flex-col justify-center align-center w-full md:gap-20'>
        <Title className='text-white mx-auto'>
          {t("What’s included")}
        </Title>
        <div className='flex flex-col gap-3 text-2xl font-ibarra border border-l-2 border-y-0 border-r-0 border-l-goldenisher pl-10 py-5 text-offwhite'>
          <div className='text-3xl capitalize flex flex-row items-center'>
            • {t("Consultation")}
          </div>
          <div className='text-3xl capitalize'>
            • {t("Edited high resolution images")}
          </div>
          <div className='text-3xl capitalize'>
            • {t("Location ideas")}
          </div>
          <div className='text-3xl capitalize'>
            • {t("Sneak peek photos within 48h")}
          </div>
          <div className='text-3xl capitalize'>
            • {t("Personal printing rights")}
          </div>
          <div className='text-3xl capitalize'>
            • {t("Creative portraits")}
          </div>
        </div>
      </div>
    </section>
  );
}

async function Testimonials({ locale }: LocaleParam["params"]) {
  const { t } = await initTranslations(locale, [
    "landing_page",
    "testimonials",
  ]);
  return (
    <>
      <div className='flex flex-col justify-center text-center py-20'>
        <Title>{t("Testimonials")}</Title>
        <h2 className='text-4xl font-babas-neue uppercase text-[#454545]'>
          {t("What my previous clients have said about me")}
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <TestimonialCard
          src={saaraImg}
          alt='Saara'
          name={t("testimonials:Testimonial1Title")}
          testimonial={t("testimonials:Testimonial1")}
        />
        <TestimonialCard
          src={birthdayKK13}
          alt='Katja'
          name={t("testimonials:Testimonial2Title")}
          testimonial={t("testimonials:Testimonial2")}
        />
        <TestimonialCard
          src={riia}
          alt='Riia'
          name={t("testimonials:Testimonial3Title")}
          testimonial={t("testimonials:Testimonial3")}
        />
      </div>
      <Link
        className={buttonVariants({
          variant: "link",
          className: "py-16 w-full",
        })}
        href='/testimonials'>
        {t("Read the full Testimonials")}
      </Link>
    </>
  );
}

type TestimonialCardProps = {
  name: string;
  testimonial: string;
  src: StaticImageData;
  alt: string;
};

function TestimonialCard({
  name,
  testimonial,
  src,
  alt,
}: TestimonialCardProps) {
  return (
    <Link
      href={"/testimonials#" + name}
      className='flex flex-col gap-y-5 p-5 rounded-xl shadow-sm hover:shadow-xl'>
      <div className='flex flex-row items-center gap-x-5'>
        <Image
          className='w-16 h-16 rounded-full object-cover'
          width={64}
          height={64}
          src={src}
          alt={alt}
        />
        <div className='text-3xl tracking-wide font-babas-neue text-muted-gray'>
          {name}
        </div>
      </div>
      <div className='relative font-ibarra border border-transparent border-l-muted-gray px-5 py-2 mx-5 text-muted-gray text-xl text-pretty max-h-36 overflow-y-clip overflow-ellipsis'>
        {testimonial}
        <div className='absolute top-0 left-0 h-36 w-full bg-gradient-to-t from-offwhite to-transparent'></div>
      </div>
    </Link>
  );
}
