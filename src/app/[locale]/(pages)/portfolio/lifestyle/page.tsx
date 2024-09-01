import initTranslations, { LocaleParam } from "@/app/i18n";
import { PortfolioItem } from "@/components/PortfolioItem";
import { PortfolioTitle } from "@/components/PortfolioTitle";

import birthdayKK1 from "@/../public/lifestyle/Birthday_K&K.1.webp";
import birthdayKK2 from "@/../public/lifestyle/Birthday_K&K.2.webp";
import birthdayKK3 from "@/../public/lifestyle/Birthday_K&K.3.webp";
import birthdayKK4 from "@/../public/lifestyle/Birthday_K&K.4.webp";
import birthdayKK5 from "@/../public/lifestyle/Birthday_K&K.5.webp";
import birthdayKK6 from "@/../public/lifestyle/Birthday_K&K.6.webp";
import birthdayKK7 from "@/../public/lifestyle/Birthday_K&K.7.webp";
import birthdayKK10 from "@/../public/lifestyle/Birthday_K&K.10.webp";
import birthdayKK11 from "@/../public/lifestyle/Birthday_K&K.11.webp";
import birthdayKK12 from "@/../public/lifestyle/Birthday_K&K.12.webp";
import birthdayKK13 from "@/../public/lifestyle/Birthday_K&K.13.webp";
import birthdayKK14 from "@/../public/lifestyle/Birthday_K&K.14.webp";
import birthdayKK15 from "@/../public/lifestyle/Birthday_K&K.15.webp";
import boatTrip1 from "@/../public/lifestyle/Boat_Trip.1.webp";
import boatTrip2 from "@/../public/lifestyle/Boat_Trip.2.webp";
import boatTrip3 from "@/../public/lifestyle/Boat_Trip.3.webp";
import boatTrip4 from "@/../public/lifestyle/Boat_Trip.4.webp";
import boatTrip5 from "@/../public/lifestyle/Boat_Trip.5.webp";
import boatTrip6 from "@/../public/lifestyle/Boat_Trip.6.webp";
import boatTrip7 from "@/../public/lifestyle/Boat_Trip.7.webp";
import boatTrip8 from "@/../public/lifestyle/Boat_Trip.9.webp";
import venue1 from "@/../public/lifestyle/Cool_Venue.webp";
import venue2 from "@/../public/lifestyle/Cool_Venue.2.webp";
import venue3 from "@/../public/lifestyle/Cool_Venue.3.webp";
import graduation1 from "@/../public/lifestyle/Graduation_S.1.webp";
import graduation3 from "@/../public/lifestyle/Graduation_S.3.webp";
import graduation4 from "@/../public/lifestyle/Graduation_S.4.webp";
import graduation6 from "@/../public/lifestyle/Graduation_S.6.webp";
import mikkeliGraduation1 from "@/../public/lifestyle/Mikkeli_Graduation.webp";
import mikkeliGraduation2 from "@/../public/lifestyle/Mikkeli_Graduation.2.webp";
import studentEvents1 from "@/../public/lifestyle/MRT.1.webp";
import studentEvents2 from "@/../public/lifestyle/MRT.2.webp";
import studentEvents3 from "@/../public/lifestyle/MRT.3.webp";
import studentEvents4 from "@/../public/lifestyle/MRT.4.webp";
import studentEvents5 from "@/../public/lifestyle/MRT.5.webp";
import studentEvents6 from "@/../public/lifestyle/MRT.6.webp";
import studentEvents7 from "@/../public/lifestyle/MRT.7.webp";
import studentEvents8 from "@/../public/lifestyle/Sillis.1.webp";
import studentEvents9 from "@/../public/lifestyle/Sillis.2.webp";
import sitsit1 from "@/../public/lifestyle/Sitsit.1.webp";
import sitsit2 from "@/../public/lifestyle/Sitsit.2.webp";
import sitsit3 from "@/../public/lifestyle/Sitsit.3.webp";
import sitsit4 from "@/../public/lifestyle/Sitsit.4.webp";
import sitsit5 from "@/../public/lifestyle/Sitsit.5.webp";
import wedding1 from "@/../public/lifestyle/Wedding_1.webp";
import wedding2 from "@/../public/lifestyle/Wedding.2.webp";
import wedding3 from "@/../public/lifestyle/Wedding.3.webp";
import wedding5 from "@/../public/lifestyle/Wedding.5.webp";
import wedding7 from "@/../public/lifestyle/Wedding.7.webp";
import wedding8 from "@/../public/lifestyle/Wedding.8.webp";
import festival1 from "@/../public/lifestyle/XXL_Mössö.webp";
import festival2 from "@/../public/lifestyle/XXL_Mössö.2.webp";
import festival3 from "@/../public/lifestyle/XXL_Mössö.3.webp";
import festival4 from "@/../public/lifestyle/XXL_Mössö.4.webp";
import festival5 from "@/../public/lifestyle/XXL_Mössö.5.webp";
import festival6 from "@/../public/lifestyle/XXL_Mössö.6.webp";

export default async function LifestylePage({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, [
    "seo-alt",
    "lifestyle",
  ]);
  return (
    <>
      <PortfolioTitle
        title={t("lifestyle:Lifestyle")}
        subtitle={t("lifestyle:LifestyleExplanation")}
        description={t("lifestyle:LifestyleIntro")}
      />
      <PortfolioItem
        images={[
          { src: wedding1, alt: t("Wedding") },
          { src: wedding2, alt: t("Wedding") },
          { src: wedding3, alt: t("Wedding") },
          { src: wedding5, alt: t("Wedding") },
          { src: wedding7, alt: t("Wedding") },
          { src: wedding8, alt: t("Wedding") },
          { src: festival1, alt: t("XXL Mössö") },
          { src: festival2, alt: t("XXL Mössö") },
          { src: festival3, alt: t("XXL Mössö") },
          { src: festival4, alt: t("XXL Mössö") },
          { src: festival5, alt: t("XXL Mössö") },
          { src: festival6, alt: t("XXL Mössö") },
          { src: birthdayKK1, alt: t("Birthday K&K") },
          { src: birthdayKK2, alt: t("Birthday K&K") },
          { src: birthdayKK3, alt: t("Birthday K&K") },
          { src: birthdayKK4, alt: t("Birthday K&K") },
          { src: birthdayKK5, alt: t("Birthday K&K") },
          { src: birthdayKK6, alt: t("Birthday K&K") },
          { src: birthdayKK7, alt: t("Birthday K&K") },
          { src: birthdayKK10, alt: t("Birthday K&K") },
          { src: birthdayKK11, alt: t("Birthday K&K") },
          { src: birthdayKK12, alt: t("Birthday K&K") },
          { src: birthdayKK13, alt: t("Birthday K&K") },
          { src: birthdayKK14, alt: t("Birthday K&K") },
          { src: birthdayKK15, alt: t("Birthday K&K") },
          { src: boatTrip1, alt: t("Boat Trip") },
          { src: boatTrip2, alt: t("Boat Trip") },
          { src: boatTrip3, alt: t("Boat Trip") },
          { src: boatTrip4, alt: t("Boat Trip") },
          { src: boatTrip5, alt: t("Boat Trip") },
          { src: boatTrip6, alt: t("Boat Trip") },
          { src: boatTrip7, alt: t("Boat Trip") },
          { src: boatTrip8, alt: t("Boat Trip") },
          { src: venue1, alt: t("Cool venue") },
          { src: venue2, alt: t("Cool venue") },
          { src: venue3, alt: t("Cool venue") },
          { src: graduation1, alt: t("Graduation S") },
          { src: graduation3, alt: t("Graduation S") },
          { src: graduation4, alt: t("Graduation S") },
          { src: graduation6, alt: t("Graduation S") },
          { src: mikkeliGraduation1, alt: t("Mikkeli Graduation") },
          { src: mikkeliGraduation2, alt: t("Mikkeli Graduation") },
          {
            src: studentEvents1,
            alt: t("MRT"),
            center: {
              x: 75,
              y: 50,
            },
          },
          {
            src: studentEvents2,
            alt: t("MRT"),
          },
          {
            src: studentEvents3,
            alt: t("MRT"),
          },
          {
            src: studentEvents4,
            alt: t("MRT"),
          },
          {
            src: studentEvents5,
            alt: t("MRT"),
          },
          {
            src: studentEvents6,
            alt: t("MRT"),
          },
          {
            src: studentEvents7,
            alt: t("MRT"),
          },
          {
            src: studentEvents8,
            alt: t("Sillis"),
          },
          {
            src: studentEvents9,
            alt: t("Sillis"),
            center: {
              x: 30,
              y: 50,
            },
          },
          { src: sitsit1, alt: t("Sitsit") },
          { src: sitsit2, alt: t("Sitsit") },
          { src: sitsit3, alt: t("Sitsit") },
          { src: sitsit4, alt: t("Sitsit") },
          { src: sitsit5, alt: t("Sitsit") },
        ]}
      />
    </>
  );
}
