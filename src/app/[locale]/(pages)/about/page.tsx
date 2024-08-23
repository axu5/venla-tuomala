import initTranslations, { LocaleParam } from "@/app/i18n";
import { TypingText } from "@/components/TypingText";
import { buttonVariants } from "@/components/ui/button";
import { ASSETS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

import aboutImg from "@/../public/about/VT__1351.jpg";

// FIX: namespace
const i18nNamespaces = ["about", "common"];

export default async function AboutPage({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <main className=''>
      <div className=''>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='p-3 lg:p-20 md:max-w-[50%]'>
            <Image src={aboutImg} alt='Pic of me' />
          </div>
          <div className='py-10 md:py-20'>
            <div className='pb-36 md:pb-28 text-5xl font-babas-neue h-0'>
              {t("I am")} <TypingText locale={locale} />
            </div>
            <div className='flex flex-row text-4xl text-[#454545] font-babas-neue uppercase pt-10 items-center'>
              {t("Based in Helsinki, Lahti, and Mikkeli")}
            </div>
            <div className='flex flex-row text-2xl text-[#454545] font-babas-neue uppercase text items-center'>
              {t("will travel too.")}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-7'>
        <Paragraph>{t("Hi, Venla here")}</Paragraph>
        <Paragraph>{t("AboutStory1")}</Paragraph>
        <Paragraph>{t("AboutStory2")}</Paragraph>
        <Paragraph>{t("AboutStory3")}</Paragraph>
      </div>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center py-5'>
        <Link
          className={buttonVariants({
            variant: "call-to-action",
            size: "lg",
            className: "",
          })}
          href={"/contact"}>
          {t("Lets Get in touch!")}
        </Link>
        <div className=''>
          <ASSETS.signature />
        </div>
      </div>
    </main>
  );
}

function Paragraph({ children }: PropsWithChildren) {
  return (
    <div className='font-ibarra text-2xl w-full'>{children}</div>
  );
}
