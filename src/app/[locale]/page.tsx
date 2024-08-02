import { Title } from "@/components/Title";
import { LocaleParam } from "../i18n";
import Image from "next/image";
import { SubTitle } from "@/components/SubTitle";
import { ASSETS } from "@/constants";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { CircleArrowDown } from "lucide-react";

export default async function LandingPage({
  params: { locale },
}: LocaleParam) {
  return (
    <main className='flex flex-col max-w-5xl mx-auto'>
      <Hero />
      <Overlay />
      <HiThere />
      <PreviousWork />
      <Testimonials />
    </main>
  );
}

function Overlay() {
  return (
    <>
      <CircleArrowDown className='animate-bounce text-goldenisher w-16 h-16 stroke-[1px] m-10 absolute bottom-5 left-10' />
    </>
  );
}

function Signature() {
  return <ASSETS.signature />;
}

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 pb-20 md:gap-4 pt-10'>
      <div className='flex flex-col'>
        <div className='flex flex-col px-10 md:pb-64 justify-center items-center md:items-start'>
          <Title className='py-10'>Venla Tuomala</Title>
          <SubTitle className='flex justify-center items-center text-center md:text-left py-10 md:py-0'>
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
          className='p-3'
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
      <div className='flex justify-center align-center pb-20'>
        <Title id='hi-there'>Hi There!</Title>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 px-12 md:px-0 gap-y-10'>
        <div className='flex flex-col gap-y-9'>
          <div className='text-2xl font-serif'>
            <Balancer>So, you need visuals?</Balancer>
          </div>
          <div className='text-2xl font-serif'>
            <Balancer>You need to bring your brand to life?</Balancer>
          </div>
          <div className='text-2xl font-serif'>
            <Balancer>
              Whether its for professional or personal needs, I&apos;m
              excited to transform ordinary moments into unforgettable
              memories.
            </Balancer>
          </div>
          <div className='text-2xl font-serif'>
            <Balancer>
              Lets create souvenirs for the most memorable events of
              your life!
            </Balancer>
          </div>
        </div>
        <div className='flex flex-col'>
          <Image
            src='/collage/collage-two.png'
            alt='ANOTHER AMAZING PHOTO VENLA IS SO TALENTED'
            width={6969}
            height={0}
          />
        </div>
      </div>
    </>
  );
}

// TODO: fix order on mobile
function PreviousWork() {
  return (
    <>
      <div className='flex justify-center items-center py-20'>
        <Title id='previous-work'>Previous Work</Title>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20'>
        <>
          <Image
            className='px-12 md:px-0'
            src='/collage/collage-two.png'
            alt='ANOTHER AMAZING PHOTO VENLA IS SO TALENTED'
            width={6969}
            height={0}
          />
          <div className='px-12 md:px-0 flex flex-col justify-between align-left'>
            <div>
              <Title>Lifestyle</Title>
              <SubTitle>Weddings, Birthdays & Other events</SubTitle>
              <div className='text-muted-gray text-2xl font-serif py-7'>
                <Balancer>
                  Some yappa dappa about maybe a testimonial
                </Balancer>
              </div>
            </div>
            <div>
              <Link
                className={buttonVariants({
                  variant: "link",
                  className: "pl-0",
                })}
                href='/lifestyle'>
                More about this shit
              </Link>
            </div>
          </div>
        </>
        <>
          <div className='px-12 md:px-0 flex flex-col justify-between align-left'>
            <div>
              <Title>Portraits</Title>
              <SubTitle>Graduations, CV Photos, Family</SubTitle>
              <div className='text-muted-gray text-2xl font-serif py-7'>
                <Balancer>...</Balancer>
              </div>
            </div>
            <div>
              <Link
                className={buttonVariants({
                  variant: "link",
                  className: "pl-0",
                })}
                href='/portraits'>
                More about this shit
              </Link>
            </div>
          </div>
          <Image
            className='px-12 md:px-0'
            src='/collage/collage-two.png'
            alt='ANOTHER AMAZING PHOTO VENLA IS SO TALENTED'
            width={6969}
            height={0}
          />
        </>
        <>
          <Image
            className='px-12 md:px-0'
            src='/collage/collage-two.png'
            alt='ANOTHER AMAZING PHOTO VENLA IS SO TALENTED'
            width={6969}
            height={0}
          />
          <div className='px-12 md:px-0 flex flex-col justify-between align-left'>
            <div>
              <Title>Brands</Title>
              <SubTitle>
                Advertising, Personal Branding & Personnel
              </SubTitle>
              <div className='text-muted-gray text-2xl font-serif py-7'>
                <Balancer>Bränding yaadi yaada.</Balancer>
              </div>
            </div>
            <div>
              <Link
                className={buttonVariants({
                  variant: "link",
                  className: "pl-0",
                })}
                href='/brands'>
                More about this shit
              </Link>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

function Testimonials() {
  return (
    <>
      <div className='flex justify-center align-center py-20'>
        <Title>Testimonials</Title>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-12 md:px-0'>
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
          className: "py-32",
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
        <div className='text-3xl font-semibold text-muted-gray'>
          {name}
        </div>
      </div>
      <div className='border border-transparent border-l-muted-gray px-5 py-2 mx-5 text-muted-gray text-xl'>
        <Balancer>{testimonial}</Balancer>
      </div>
    </div>
  );
}
