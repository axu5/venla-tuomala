import initTranslations, { LocaleParam } from "@/app/i18n";
import { PortfolioItem } from "@/components/PortfolioItem";

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
import yoga6 from "@/../public/brands/Yoga.6.webp";
import yoga7 from "@/../public/brands/Yoga.7.webp";
import yoga8 from "@/../public/brands/Yoga.8.webp";

export default async function BrandsPage({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, ["lifestyle"]);
  return (
    <>
      <PortfolioItem
        priority
        name={t("Beauty Salon")}
        images={[
          {
            src: beautySalon1,
            alt: "",
          },
          {
            src: beautySalon2,
            alt: "",
          },
          {
            src: beautySalon3,
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("FC Probba")}
        images={[
          {
            src: fcProbba1,
            alt: "",
          },
          {
            src: fcProbba2,
            alt: "",
          },
          {
            src: fcProbba3,
            alt: "",
          },
          {
            src: fcProbba4,
            alt: "",
          },
          {
            src: fcProbba5,
            alt: "",
          },
          {
            src: fcProbba7,
            alt: "",
          },
          {
            src: fcProbba8,
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Riia")}
        images={[
          {
            src: riia1,
            alt: "",
          },
          {
            src: riia2,
            alt: "",
          },
          {
            src: riia3,
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Vappu")}
        images={[
          {
            src: vappu1,
            alt: "",
          },
          {
            src: vappu2,
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Yoga")}
        images={[
          { src: yoga1, alt: "" },
          { src: yoga2, alt: "" },
          { src: yoga3, alt: "" },
          { src: yoga4, alt: "" },
          { src: yoga5, alt: "" },
          { src: yoga6, alt: "" },
          { src: yoga7, alt: "" },
          { src: yoga8, alt: "" },
        ]}
      />
    </>
  );
}
