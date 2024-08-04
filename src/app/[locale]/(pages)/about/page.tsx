import initTranslations, { LocaleParam } from "@/app/i18n";
import { TypingText } from "@/components/TypingText";
import { buttonVariants } from "@/components/ui/button";
import { ASSETS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

// FIX: namespace
const i18nNamespaces = ["home", "common"];

export default async function AboutPage({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <main className='px-20 lg:px-0'>
      <div className=''>
        <div className='flex flex-row'>
          <div className='w-[50%] p-3 lg:p-20'>
            <Image
              src='/images/venla2.png'
              alt='Pic of me'
              width={6969}
              height={0}
            />
          </div>
          <div className='w-[50%] py-20'>
            <div className='pb-28 text-5xl font-babas-neue h-0'>
              I AM <TypingText />
            </div>
            <div className='flex flex-row text-4xl text-[#454545] font-babas-neue uppercase pt-10 items-center'>
              Based in Helsinki, Lahti, and Mikkeli
            </div>
            <div className='flex flex-row text-2xl text-[#454545] font-babas-neue uppercase text items-center'>
              but happy to travel anywhere
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-7'>
        <Paragraph>Hi, Venla here.</Paragraph>
        <Paragraph>
          I picked up the camera in 2022, and since then I have been
          shooting professionally for both individuals and companies.
        </Paragraph>
        <Paragraph>
          My expertise lies in lifestyle, portrait, and brand
          photography, but you can also contact me for other
          photography projects.
        </Paragraph>
        <Paragraph>
          I believe that the best images are created when you can
          forget that the camera even exists. That is why creating a
          relaxed and comfortable atmosphere in the shooting
          situations is my priority.
        </Paragraph>
        <Paragraph>
          Continuous learning and development are important, and I
          enjoy experimenting with new techniques and approaches; so
          I&apos;m thrilled to hear about your vision and create the
          images you need!
        </Paragraph>
        <Paragraph>
          So lets have chat of your wishes and needs!
        </Paragraph>
      </div>
      <div className='flex flex-row justify-between items-center py-5'>
        <Link
          className={buttonVariants({
            variant: "call-to-action",
            size: "lg",
            className: "",
          })}
          href={"/contact"}>
          Get in touch!
        </Link>
        <div className=''>
          <ASSETS.signature />
        </div>
      </div>
    </main>
  );
}

function Paragraph({ children }: PropsWithChildren) {
  return <div className='font-ibarra text-2xl'>{children}</div>;
}
