import { SubTitle } from "@/components/SubTitle";
import { Title } from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { ASSETS } from "@/constants";
import { CircleArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { LocaleParam } from "../i18n";

export default async function LandingPage({
  params: { locale },
}: LocaleParam) {
  return (
    <main className='flex flex-col'>
      <div className='max-w-5xl mx-10 md:mx-auto'>
        <Hero />
        <Overlay />
        <HiThere />
      </div>
      <WhatsIncluded />
      <div className='max-w-5xl mx-10 md:mx-auto'>
        <Testimonials />
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

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-10 pb-20 md:gap-4 pt-10'>
      <div className='flex flex-col'>
        <div className='flex flex-col md:pb-64 justify-center items-center md:items-start'>
          <Title className='pt-5 md:py-10'>Venla Tuomala</Title>
          <SubTitle className='flex justify-center items-center text-center md:text-left pb-5 md:py-0'>
            Lifestyle, portrait & brand photographer
          </SubTitle>
        </div>
        {/* <div className='flex flex-row items-center justify-center gap-x-10'>
          <Link
            className={buttonVariants({
              variant: "call-to-action",
            })}
            href={"/get-in-touch"}>
            Get in touch
          </Link>
          <Link
            className={buttonVariants({ variant: "link" })}
            href='/#previous-work'>
            Previous work
          </Link>
        </div> */}
      </div>
      <div className='flex flex-col'>
        <Image
          className='p-0 md:py-3'
          src='/collage/collage-one.png'
          alt='Gorgeous pictures'
          width={6969}
          height={300}
        />
        <div className='flex flex-col justify-center items-center'>
          <Signature />
        </div>
      </div>
    </div>
  );
}

function HiThere() {
  return (
    <>
      <Title id='hi-there' className='pb-10 md:pb-20'>
        Hi There!
      </Title>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10'>
        <div className='flex flex-col md:py-28 gap-y-9 max-w-full xl:pl-0'>
          <div className='text-3xl font-ibarra'>
            <Balancer>So, you need visuals?</Balancer>
          </div>
          <div className='text-3xl font-ibarra'>
            Whether its for professional or personal needs, I&apos;m
            excited to bring your vision to life.
          </div>
          <div className='text-3xl font-ibarra'>
            <Balancer>Let&apos;s connect, plan, and create!</Balancer>
          </div>
          <div className='items-center md:items-start max-w-3xl'>
            <Link
              className={buttonVariants({
                variant: "call-to-action",
                size: "lg",
              })}
              href={"/get-in-touch"}>
              Get in touch
            </Link>
          </div>
        </div>
        <div className='flex flex-col md:max-w-[70%] mx-auto'>
          <Image
            src='/collage.png'
            alt='ANOTHER AMAZING PHOTO VENLA IS SO TALENTED'
            width={6969}
            height={0}
          />
        </div>
      </div>
    </>
  );
}

function WhatsIncluded() {
  return (
    <section className='bg-[#232323] min-h-screen w-screen py-20 my-20 px-10'>
      <div className='max-w-5xl mx-auto flex flex-col justify-center align-center w-full gap-20'>
        <Title className='text-white mx-auto'>
          What&apos;s included
        </Title>
        <div className='flex flex-col md:grid md:grid-cols-3 gap-10'>
          <div className='text-white font-ibarra text-3xl mx-auto capitalize text-center'>
            Consultation
          </div>
          <div className='text-white font-ibarra text-3xl mx-auto capitalize text-center'>
            Editing high resolution images
          </div>
          <div className='text-white font-ibarra text-3xl mx-auto capitalize text-center'>
            Location ideas
          </div>
          <div className='text-white font-ibarra text-3xl mx-auto capitalize text-center'>
            Sneak peek photos within 48h
          </div>
          <div className='text-white font-ibarra text-3xl mx-auto capitalize text-center'>
            Personal printing rights
          </div>
          <div className='text-white font-ibarra text-3xl mx-auto capitalize text-center'>
            Creative portraits
          </div>
          <div className='text-white font-ibarra text-3xl mx-auto capitalize text-center col-start-2'>
            Custom online gallery
          </div>
        </div>
        <Link
          className={buttonVariants({
            variant: "link",
            className: "text-white w-full",
          })}
          href='/process'>
          Read more about the process here
        </Link>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <>
      <div className='flex flex-col justify-center text-center py-20'>
        <Title>Testimonials</Title>
        <h2 className='text-4xl font-babas-neue uppercase text-[#454545]'>
          Hear out others who have trusted my work
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 text-center'>
        <TestimonialCard
          name='Person 1'
          testimonial='Venla is a cool and awesome person and she made me feel so comfortable around the camera!'
        />
        <TestimonialCard
          name='Person 2'
          testimonial='Venla is a cool and awesome person and she made me feel so comfortable around the camera!'
        />
        <TestimonialCard
          name='Person 3'
          testimonial='Venla is a cool and awesome person and she made me feel so comfortable around the camera!'
        />
        <TestimonialCard
          name='Person 4'
          testimonial='Venla is a cool and awesome person and she made me feel so comfortable around the camera!'
        />
      </div>
      <Link
        className={buttonVariants({
          variant: "link",
          className: "py-32 w-full",
        })}
        href='/testimonials'>
        Read the full testimonials
      </Link>
    </>
  );
}

type TestimonialCardProps = {
  name: string;
  testimonial: string;
};

function TestimonialCard({
  name,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className='flex flex-col gap-y-5'>
      <div className='flex flex-row items-center gap-x-5'>
        <div className='bg-gray-300 animate-pulse w-16 h-16 rounded-full'></div>
        <div className='text-3xl tracking-wide font-babas-neue text-muted-gray'>
          {name}
        </div>
      </div>
      <div className='font-ibarra border border-transparent border-l-muted-gray px-5 py-2 mx-5 text-muted-gray text-xl'>
        <Balancer>{testimonial}</Balancer>
      </div>
    </div>
  );
}
