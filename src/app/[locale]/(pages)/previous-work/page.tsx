import { SubTitle } from "@/components/SubTitle";
import { Title } from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function PreviousWork() {
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
          <Image
            className='px-12 md:px-0'
            src='/collage/collage-two.png'
            alt='ANOTHER AMAZING PHOTO VENLA IS SO TALENTED'
            width={6969}
            height={0}
          />
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
