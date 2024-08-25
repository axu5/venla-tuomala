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
import birthdayKK8 from "@/../public/lifestyle/Birthday_K&K.8.webp";
import birthdayKK9 from "@/../public/lifestyle/Birthday_K&K.9.webp";
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
import graduation2 from "@/../public/lifestyle/Graduation_S.2.webp";
import graduation3 from "@/../public/lifestyle/Graduation_S.3.webp";
import graduation4 from "@/../public/lifestyle/Graduation_S.4.webp";
import graduation5 from "@/../public/lifestyle/Graduation_S.5.webp";
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
import wedding4 from "@/../public/lifestyle/Wedding.4.webp";
import wedding5 from "@/../public/lifestyle/Wedding.5.webp";
import wedding6 from "@/../public/lifestyle/Wedding.6.webp";
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
  const { t } = await initTranslations(locale, ["lifestyle"]);
  return (
    <>
      <PortfolioTitle
        title={t("Lifestyle")}
        subtitle={t("LifestyleExplanation")}
        description={t("LifestyleIntro")}
      />
      <PortfolioItem
        images={[
          { src: wedding1, alt: "" },
          { src: wedding2, alt: "" },
          { src: wedding3, alt: "" },
          { src: wedding4, alt: "" },
          { src: wedding5, alt: "" },
          { src: wedding6, alt: "" },
          { src: wedding7, alt: "" },
          { src: wedding8, alt: "" },
          { src: festival1, alt: "" },
          { src: festival2, alt: "" },
          { src: festival3, alt: "" },
          { src: festival4, alt: "" },
          { src: festival5, alt: "" },
          { src: festival6, alt: "" },
          { src: birthdayKK1, alt: "" },
          { src: birthdayKK2, alt: "" },
          { src: birthdayKK3, alt: "" },
          { src: birthdayKK4, alt: "" },
          { src: birthdayKK5, alt: "" },
          { src: birthdayKK6, alt: "" },
          { src: birthdayKK7, alt: "" },
          { src: birthdayKK8, alt: "" },
          { src: birthdayKK9, alt: "" },
          { src: birthdayKK10, alt: "" },
          { src: birthdayKK11, alt: "" },
          { src: birthdayKK12, alt: "" },
          { src: birthdayKK13, alt: "" },
          { src: birthdayKK14, alt: "" },
          { src: birthdayKK15, alt: "" },
          { src: boatTrip1, alt: "" },
          { src: boatTrip2, alt: "" },
          { src: boatTrip3, alt: "" },
          { src: boatTrip4, alt: "" },
          { src: boatTrip5, alt: "" },
          { src: boatTrip6, alt: "" },
          { src: boatTrip7, alt: "" },
          { src: boatTrip8, alt: "" },
          { src: venue1, alt: "" },
          { src: venue2, alt: "" },
          { src: venue3, alt: "" },
          { src: graduation1, alt: "" },
          { src: graduation2, alt: "" },
          { src: graduation3, alt: "" },
          { src: graduation4, alt: "" },
          { src: graduation5, alt: "" },
          { src: graduation6, alt: "" },
          {
            src: studentEvents1,
            alt: "",
            center: {
              x: 75,
              y: 50,
            },
          },
          {
            src: studentEvents2,
            alt: "",
          },
          {
            src: studentEvents3,
            alt: "",
          },
          {
            src: studentEvents4,
            alt: "",
          },
          {
            src: studentEvents5,
            alt: "",
          },
          {
            src: studentEvents6,
            alt: "",
          },
          {
            src: studentEvents7,
            alt: "",
          },
          {
            src: studentEvents8,
            alt: "",
          },
          {
            src: studentEvents9,
            alt: "",
            center: {
              x: 30,
              y: 50,
            },
          },
          { src: sitsit1, alt: "" },
          { src: sitsit2, alt: "" },
          { src: sitsit3, alt: "" },
          { src: sitsit4, alt: "" },
          { src: sitsit5, alt: "" },
        ]}
      />
    </>
  );
}
