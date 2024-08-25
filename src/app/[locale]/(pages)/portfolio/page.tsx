import initTranslations, { LocaleParam } from "@/app/i18n";
import { SubTitle } from "@/components/SubTitle";
import { Title } from "@/components/Title";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import mikkeliGraduationPic from "@/../public/lifestyle/Mikkeli_Graduation.webp";
import saara6 from "@/../public/portraits/Saara6.webp";
import yoga1 from "@/../public/brands/Yoga.1.webp";

const i18nNamespaces = [
  "portfolio",
  "lifestyle",
  "portraits",
  "brands",
];

export default async function Portfolio({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <div className='flex justify-center items-center py-20'>
        <Title id='portfolio'>{t("PortfolioPage")}</Title>
      </div>
      <div className='flex flex-col gap-y-16'>
        <Category
          href='/portfolio/lifestyle'
          src={mikkeliGraduationPic}
          alt='Valmistujaiset Aalto Yliopiston Mikkeli kampuksella 2024'
          title={t("lifestyle:Lifestyle")}
          subtitle={t("lifestyle:LifestyleExplanation")}
          body={t("lifestyle:LifestyleIntro")}
        />
        <Category
          href='/portfolio/portraits'
          src={saara6}
          alt='Saaran Ylioppilaskuvaus'
          title={t("portraits:Portraits")}
          subtitle={t("portraits:PortraitsExplanation")}
          body={t("portraits:PortraitsIntro")}
        />
        <Category
          href='/portfolio/brands'
          src={yoga1}
          alt='Elämäntapavalmentaja tapaamisessa asiakkaansa kanssa'
          title={t("brands:Brands")}
          subtitle={t("brands:BrandsExplanation")}
          body={t("brands:BrandsIntro")}
        />
      </div>
    </>
  );
}

type CategoryProps = {
  href: string;
  src: StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
  body: string;
};

function Category({
  href,
  src,
  alt,
  title,
  subtitle,
  body,
}: CategoryProps) {
  return (
    <Link
      href={href}
      className='grid grid-cols-1 md:grid-cols-2 gap-x-10 md:max-h-[500px] min-w-0 overflow-hidden shadow-sm rounded-lg hover:shadow-xl'>
      <Image
        src={src}
        alt={alt}
        placeholder='blur'
        className='object-cover object-center overflow-hidden min-h-0 md:max-h-[500px]'
      />
      <div className='flex flex-col justify-between md:justify-start align-left p-10'>
        <Title className='text-4xl md:text-6xl'>{title}</Title>
        <SubTitle className='text-3xl md:text-4xl'>
          {subtitle}
        </SubTitle>
        <div className='font-ibarra text-xl pt-5'>{body}</div>
      </div>
    </Link>
  );
}
