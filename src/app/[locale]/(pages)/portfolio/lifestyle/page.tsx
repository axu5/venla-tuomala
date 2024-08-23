import initTranslations, { LocaleParam } from "@/app/i18n";
import { PortfolioItem } from "@/components/PortfolioItem";

// @ts-expect-error capitalized ending ???? why
import birthdayKK1 from "@/../public/lifestyle/Birthday_K&K.1.JPG";
// @ts-expect-error capitalized ending ???? why
import birthdayKK2 from "@/../public/lifestyle/Birthday_K&K.2.JPG";
// @ts-expect-error capitalized ending ???? why
import birthdayKK3 from "@/../public/lifestyle/Birthday_K&K.3.JPG";
// @ts-expect-error capitalized ending ???? why
import birthdayKK4 from "@/../public/lifestyle/Birthday_K&K.4.JPG";
// @ts-expect-error capitalized ending ???? why
import birthdayKK5 from "@/../public/lifestyle/Birthday_K&K.5.JPG";
// @ts-expect-error capitalized ending ???? why
import birthdayKK6 from "@/../public/lifestyle/Birthday_K&K.6.JPG";
import birthdayKK7 from "@/../public/lifestyle/Birthday_K&K.7.jpg";
import birthdayKK8 from "@/../public/lifestyle/Birthday_K&K.8.jpg";
import birthdayKK9 from "@/../public/lifestyle/Birthday_K&K.9.jpg";
import birthdayKK10 from "@/../public/lifestyle/Birthday_K&K.10.jpg";
import birthdayKK11 from "@/../public/lifestyle/Birthday_K&K.11.jpg";
import birthdayKK12 from "@/../public/lifestyle/Birthday_K&K.12.jpg";
import birthdayKK13 from "@/../public/lifestyle/Birthday_K&K.13.jpg";
import birthdayKK14 from "@/../public/lifestyle/Birthday_K&K.14.jpg";
import birthdayKK15 from "@/../public/lifestyle/Birthday_K&K.15.jpg";
import boatTrip1 from "@/../public/lifestyle/Boat_Trip.1.jpg";
import boatTrip2 from "@/../public/lifestyle/Boat_Trip.2.jpg";
import boatTrip3 from "@/../public/lifestyle/Boat_Trip.3.jpg";
import boatTrip4 from "@/../public/lifestyle/Boat_Trip.4.jpg";
import boatTrip5 from "@/../public/lifestyle/Boat_Trip.5.jpg";
import boatTrip6 from "@/../public/lifestyle/Boat_Trip.6.jpg";
import boatTrip7 from "@/../public/lifestyle/Boat_Trip.7.jpg";
import boatTrip8 from "@/../public/lifestyle/Boat_Trip.9.jpg";
// @ts-expect-error capitalized ending ???? why
import venue1 from "@/../public/lifestyle/Cool_Venue.JPG";
// @ts-expect-error capitalized ending ???? why
import venue2 from "@/../public/lifestyle/Cool_Venue.2.JPG";
// @ts-expect-error capitalized ending ???? why
import venue3 from "@/../public/lifestyle/Cool_Venue.3.JPG";
import graduation1 from "@/../public/lifestyle/Graduation_S.1.jpg";
import graduation2 from "@/../public/lifestyle/Graduation_S.2.jpg";
import graduation3 from "@/../public/lifestyle/Graduation_S.3.jpg";
import graduation4 from "@/../public/lifestyle/Graduation_S.4.jpg";
import graduation5 from "@/../public/lifestyle/Graduation_S.5.jpg";
import graduation6 from "@/../public/lifestyle/Graduation_S.6.jpg";
import mikkeliGraduation1 from "@/../public/lifestyle/Mikkeli_Graduation.jpg";
import mikkeliGraduation2 from "@/../public/lifestyle/Mikkeli_Graduation.2.jpg";
import studentEvents1 from "@/../public/lifestyle/MRT.1.jpg";
import studentEvents2 from "@/../public/lifestyle/MRT.2.jpg";
import studentEvents3 from "@/../public/lifestyle/MRT.3.jpg";
import studentEvents4 from "@/../public/lifestyle/MRT.4.jpg";
import studentEvents5 from "@/../public/lifestyle/MRT.5.jpg";
import studentEvents6 from "@/../public/lifestyle/MRT.6.jpg";
import studentEvents7 from "@/../public/lifestyle/MRT.7.jpg";
import studentEvents8 from "@/../public/lifestyle/Sillis.1.jpg";
import studentEvents9 from "@/../public/lifestyle/Sillis.2.jpg";
import sitsit1 from "@/../public/lifestyle/Sitsit.1.jpg";
import sitsit2 from "@/../public/lifestyle/Sitsit.2.jpg";
import sitsit3 from "@/../public/lifestyle/Sitsit.3.jpg";
import sitsit4 from "@/../public/lifestyle/Sitsit.4.jpg";
import sitsit5 from "@/../public/lifestyle/Sitsit.5.jpg";
import wedding1 from "@/../public/lifestyle/Wedding_1.jpg";
import wedding2 from "@/../public/lifestyle/Wedding.2.jpg";
import wedding3 from "@/../public/lifestyle/Wedding.3.jpg";
import wedding4 from "@/../public/lifestyle/Wedding.4.jpg";
import wedding5 from "@/../public/lifestyle/Wedding.5.jpg";
import wedding6 from "@/../public/lifestyle/Wedding.6.jpg";
import wedding7 from "@/../public/lifestyle/Wedding.7.jpg";
import wedding8 from "@/../public/lifestyle/Wedding.8.jpg";
// @ts-expect-error capitalized ending ???? why
import festival1 from "@/../public/lifestyle/XXL_Mössö.JPG";
// @ts-expect-error capitalized ending ???? why
import festival2 from "@/../public/lifestyle/XXL_Mössö.2.JPG";
// @ts-expect-error capitalized ending ???? why
import festival3 from "@/../public/lifestyle/XXL_Mössö.3.JPG";
// @ts-expect-error capitalized ending ???? why
import festival4 from "@/../public/lifestyle/XXL_Mössö.4.JPG";
// @ts-expect-error capitalized ending ???? why
import festival5 from "@/../public/lifestyle/XXL_Mössö.5.JPG";
// @ts-expect-error capitalized ending ???? why
import festival6 from "@/../public/lifestyle/XXL_Mössö.6.JPG";

export default async function LifestylePage({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, ["lifestyle"]);
  return (
    <>
      <PortfolioItem
        priority
        name={t("Birthday K&K")}
        images={[
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
        ]}
      />
      <PortfolioItem
        name={t("Boat Trip")}
        images={[
          { src: boatTrip1, alt: "" },
          { src: boatTrip2, alt: "" },
          { src: boatTrip3, alt: "" },
          { src: boatTrip4, alt: "" },
          { src: boatTrip5, alt: "" },
          { src: boatTrip6, alt: "" },
          { src: boatTrip7, alt: "" },
          { src: boatTrip8, alt: "" },
        ]}
      />
      <PortfolioItem
        name={t("Venue")}
        images={[
          { src: venue1, alt: "" },
          { src: venue2, alt: "" },
          { src: venue3, alt: "" },
        ]}
      />
      <PortfolioItem
        name={t("Graduation")}
        images={[
          { src: graduation1, alt: "" },
          { src: graduation2, alt: "" },
          { src: graduation3, alt: "" },
          { src: graduation4, alt: "" },
          { src: graduation5, alt: "" },
          { src: graduation6, alt: "" },
        ]}
      />
      <PortfolioItem
        name={t("Mikkeli Graduation")}
        images={[
          {
            src: mikkeliGraduation1,
            alt: "",
          },
          {
            src: mikkeliGraduation2,
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Student Events")}
        images={[
          {
            src: studentEvents1,
            alt: "",
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
        ]}
      />
      <PortfolioItem
        name={t("Sitsit")}
        images={[
          { src: sitsit1, alt: "" },
          { src: sitsit2, alt: "" },
          { src: sitsit3, alt: "" },
          { src: sitsit4, alt: "" },
          { src: sitsit5, alt: "" },
        ]}
      />
      <PortfolioItem
        name={t("Wedding")}
        images={[
          { src: wedding1, alt: "" },
          { src: wedding2, alt: "" },
          { src: wedding3, alt: "" },
          { src: wedding4, alt: "" },
          { src: wedding5, alt: "" },
          { src: wedding6, alt: "" },
          { src: wedding7, alt: "" },
          { src: wedding8, alt: "" },
        ]}
      />
      <PortfolioItem
        name={t("XXL Mössö")}
        images={[
          { src: festival1, alt: "" },
          { src: festival2, alt: "" },
          { src: festival3, alt: "" },
          { src: festival4, alt: "" },
          { src: festival5, alt: "" },
          { src: festival6, alt: "" },
        ]}
      />
    </>
  );
}
