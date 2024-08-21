import initTranslations, { LocaleParam } from "@/app/i18n";
import { SubTitle } from "@/components/SubTitle";
import { Title } from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default async function Portfolio({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, ["portfolio"]);
  return (
    <>
      <div className='flex justify-center items-center py-20 px-10'>
        <Title id='portfolio'>{t("PortfolioPage")}</Title>
      </div>
      <div className='flex flex-col gap-y-20'>
        <Link
          href='/portfolio/lifestyle'
          className='grid grid-cols-1 md:grid-cols-2 gap-x-10 max-h-[600px]'>
          <Image
            className='px-12 md:px-0'
            src='/lifestyle/Mikkeli_Graduation.jpg'
            alt='Valmistujaiset Aalto Yliopiston Mikkeli kampuksella 2024'
            width={6969}
            height={0}
          />
          <div className='px-12 md:px-0 flex flex-col justify-between align-left'>
            <div>
              <Title>{t("Lifestyle")}</Title>
              <SubTitle>{t("LifestyleExplanation")}</SubTitle>
            </div>
          </div>
        </Link>
        <Link
          href='/portfolio/portraits'
          className='grid grid-cols-1 md:grid-cols-2 gap-x-10'>
          <Image
            className='px-12 md:px-0'
            src='/portraits/Saara6.jpg'
            alt='Saaran Ylioppilaskuvaus'
            width={6969}
            height={0}
          />
          <div className='px-12 md:px-0 flex flex-col justify-between align-left'>
            <div>
              <Title>{t("Portraits")}</Title>
              <SubTitle>{t("PortraitsExplanation")}</SubTitle>
            </div>
          </div>
        </Link>
        <Link
          href='/portfolio/brands'
          className='grid grid-cols-1 md:grid-cols-2 gap-x-10'>
          <Image
            className='px-12 md:px-0'
            src='/brands/Yoga.1.jpg'
            alt='Elämäntapavalmentaja tapaamisessa asiakkaansa kanssa'
            width={6969}
            height={0}
          />
          <div className='px-12 md:px-0 flex flex-col justify-between align-left'>
            <div>
              <Title>{t("Brands")}</Title>
              <SubTitle>{t("BrandsExplained")}</SubTitle>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
