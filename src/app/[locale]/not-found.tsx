import initTranslations from "@/app/i18n";
import { serverGetLocale } from "@/utils/server-get-locale";
import Link from "next/link";
import Image from "next/image";
import { Title } from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";

import img404 from "@/../public/404.webp";

export default async function NotFound() {
  const locale = serverGetLocale();

  const { t } = await initTranslations(locale, [
    "not-found",
    "common",
  ]);
  return (
    <div className='flex flex-col justify-center items-center md:flex-row max-w-5xl mx-auto gap-20 py-20'>
      <div className='flex flex-col justify-center items-center w-[60%]'>
        <Title className='text-center'>
          {t("404 What are you looking for?")}
        </Title>
        <Link
          href='/'
          className={buttonVariants({ variant: "link" })}>
          {t("Main page")}
        </Link>
        <Link
          href='/portfolio'
          className={buttonVariants({ variant: "link" })}>
          {t("common:Portfolio")}
        </Link>
        <Link
          href='/testimonials'
          className={buttonVariants({ variant: "link" })}>
          {t("common:Testimonials")}
        </Link>
        <Link
          href='/about'
          className={buttonVariants({ variant: "link" })}>
          {t("common:About")}
        </Link>
        <Link
          href='/contact'
          className={buttonVariants({ variant: "link" })}>
          {t("common:Contact")}
        </Link>
      </div>
      <div className='w-[40%] min-h-0 overflow-hidden'>
        <Image
          className='object-cover min-h-0 object-bottom'
          src={img404}
          alt='Venla on eksynyt'
        />
      </div>
    </div>
  );
}
