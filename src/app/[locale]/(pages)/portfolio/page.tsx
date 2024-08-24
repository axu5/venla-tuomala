import initTranslations, { LocaleParam } from "@/app/i18n";
import { SubTitle } from "@/components/SubTitle";
import { Title } from "@/components/Title";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import mikkeliGraduationPic from "@/../public/lifestyle/Mikkeli_Graduation.jpg";
import saara6 from "@/../public/portraits/Saara6.jpg";
import yoga1 from "@/../public/brands/Yoga.1.jpg";

export default async function Portfolio({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, ["portfolio"]);
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
          title={t("Lifestyle")}
          subtitle={t("LifestyleExplanation")}
        />
        <Category
          href='/portfolio/portraits'
          src={saara6}
          alt='Saaran Ylioppilaskuvaus'
          title={t("Portraits")}
          subtitle={t("PortraitsExplanation")}
        />
        <Category
          href='/portfolio/brands'
          src={yoga1}
          alt='Elämäntapavalmentaja tapaamisessa asiakkaansa kanssa'
          title={t("Brands")}
          subtitle={t("BrandsExplanation")}
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
};

function Category({
  href,
  src,
  alt,
  title,
  subtitle,
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
      </div>
    </Link>
  );
}
