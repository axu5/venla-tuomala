import initTranslations, { LocaleParam } from "@/app/i18n";
import { PortfolioItem } from "@/components/PortfolioItem";
import { PortfolioTitle } from "@/components/PortfolioTitle";

import redbull1 from "@/../public/brands/RedBull.1.webp";
import redbull2 from "@/../public/brands/RedBull.2.webp";
import redbull3 from "@/../public/brands/RedBull.3.webp";
import redbull4 from "@/../public/brands/RedBull.4..webp";
import beautySalon1 from "@/../public/brands/Beauty_Salon.1.webp";
import beautySalon2 from "@/../public/brands/Beauty_Salon.2.webp";
import beautySalon3 from "@/../public/brands/Beauty_Salon.3.webp";
import fcProbba1 from "@/../public/brands/FC_Probba.1.webp";
import fcProbba2 from "@/../public/brands/FC_Probba.2.webp";
import fcProbba3 from "@/../public/brands/FC_Probba.3.webp";
import fcProbba4 from "@/../public/brands/FC_Probba.4.webp";
import fcProbba5 from "@/../public/brands/FC_Probba.5.webp";
import fcProbba7 from "@/../public/brands/FC_Probba.7.webp";
import fcProbba8 from "@/../public/brands/FC_Probba.8.webp";
import muc1 from "@/../public/brands/MUC.1.webp";
import muc2 from "@/../public/brands/MUC.2.webp";
import riia1 from "@/../public/brands/Riia.webp";
import riia2 from "@/../public/brands/PB_Riia.webp";
import riia3 from "@/../public/brands/PB_Riia2.webp";
import vappu1 from "@/../public/brands/Vappu.webp";
import vappu2 from "@/../public/brands/Vappu.2.webp";
import yoga1 from "@/../public/brands/Yoga.1.webp";
import yoga2 from "@/../public/brands/Yoga.2.webp";
import yoga3 from "@/../public/brands/Yoga.3.webp";
import yoga4 from "@/../public/brands/Yoga.4.webp";
import yoga5 from "@/../public/brands/Yoga.5.webp";

export default async function BrandsPage({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, ["seo-alt", "brands"]);
  return (
    <>
      <PortfolioTitle
        title={t("brands:Brands")}
        subtitle={t("brands:BrandsExplanation")}
        description={t("brands:BrandsIntro")}
      />
      <PortfolioItem
        images={[
          {
            src: redbull1,
            alt: t("Redbull"),
          },
          {
            src: redbull2,
            alt: t("Redbull"),
          },
          {
            src: redbull3,
            alt: t("Redbull"),
          },
          {
            src: redbull4,
            alt: t("Redbull"),
          },
          {
            src: beautySalon1,
            alt: t("Beauty_Salon"),
          },
          {
            src: beautySalon2,
            alt: t("Beauty_Salon"),
          },
          {
            src: beautySalon3,
            alt: t("Beauty_Salon"),
          },
          {
            src: fcProbba1,
            alt: t("FC Probba"),
          },
          {
            src: fcProbba2,
            alt: t("FC Probba"),
          },
          {
            src: fcProbba3,
            alt: t("FC Probba"),
          },
          {
            src: fcProbba4,
            alt: t("FC Probba"),
          },
          {
            src: fcProbba5,
            alt: t("FC Probba"),
          },
          {
            src: fcProbba7,
            alt: t("FC Probba"),
          },
          {
            src: fcProbba8,
            alt: t("FC Probba"),
          },
          {
            src: muc1,
            alt: t("MUC"),
          },
          {
            src: muc2,
            alt: t("MUC"),
          },
          {
            src: riia1,
            alt: t("Riia"),
          },
          {
            src: riia2,
            alt: t("Riia"),
          },
          {
            src: riia3,
            alt: t("Riia"),
          },
          {
            src: vappu1,
            alt: t("Vappu"),
          },
          {
            src: vappu2,
            alt: t("Vappu"),
          },
          { src: yoga1, alt: t("Yoga") },
          { src: yoga2, alt: t("Yoga") },
          { src: yoga3, alt: t("Yoga") },
          { src: yoga4, alt: t("Yoga") },
          { src: yoga5, alt: t("Yoga") },
        ]}
      />
    </>
  );
}
