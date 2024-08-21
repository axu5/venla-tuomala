import initTranslations, { LocaleParam } from "@/app/i18n";
import { PortfolioItem } from "@/components/PortfolioItem";

export default async function LifestylePage({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, ["lifestyle"]);
  return (
    <>
      <PortfolioItem
        name={t("Birthday K&K")}
        images={[
          {
            src: "/lifestyle/Birthday_K&K.1.JPG",
            alt: "",
          },
          {
            src: "/lifestyle/Birthday_K&K.2.JPG",
            alt: "",
          },
          {
            src: "/lifestyle/Birthday_K&K.3.JPG",
            alt: "",
          },
          {
            src: "/lifestyle/Birthday_K&K.4.JPG",
            alt: "",
          },
          {
            src: "/lifestyle/Birthday_K&K.5.JPG",
            alt: "",
          },
          {
            src: "/lifestyle/Birthday_K&K.6.JPG",
            alt: "",
          },
          {
            src: "/lifestyle/Birthday_K&K.7.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Birthday_K&K.8.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Birthday_K&K.9.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Birthday_K&K.10.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Birthday_K&K.11.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Birthday_K&K.12.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Birthday_K&K.13.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Birthday_K&K.14.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Birthday_K&K.15.jpg",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Boat Trip")}
        images={[
          {
            src: "/lifestyle/Boat_Trip.1.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Boat_Trip.2.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Boat_Trip.3.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Boat_Trip.4.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Boat_Trip.5.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Boat_Trip.6.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Boat_Trip.7.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Boat_Trip.9.jpg",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Venue")}
        images={[
          {
            src: "/lifestyle/Cool_Venue.JPG",
            alt: "",
          },
          {
            src: "/lifestyle/Cool_Venue.2.JPG",
            alt: "",
          },
          {
            src: "/lifestyle/Cool_Venue.3.JPG",
            alt: "",
          },
          {
            src: "/lifestyle/Cool_Venue.4.JPG",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Graduation")}
        images={[
          {
            src: "/lifestyle/Graduation_S.1.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Graduation_S.2.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Graduation_S.3.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Graduation_S.4.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Graduation_S.5.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Graduation_S.6.jpg",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Mikkeli Graduation")}
        images={[
          {
            src: "/lifestyle/Mikkeli_Graduation.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Mikkeli_Graduation.2.jpg",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Student Events")}
        images={[
          {
            src: "/lifestyle/MRT.1.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/MRT.2.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/MRT.3.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/MRT.4.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/MRT.5.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/MRT.6.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/MRT.7.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Sillis.1.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Sillis.2.jpg",
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
          {
            src: "/lifestyle/Sitsit.1.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Sitsit.2.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Sitsit.3.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Sitsit.4.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Sitsit.5.jpg",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Wedding")}
        images={[
          {
            src: "/lifestyle/Wedding_1.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Wedding.2.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Wedding.3.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Wedding.4.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Wedding.5.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Wedding.6.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Wedding.7.jpg",
            alt: "",
          },
          {
            src: "/lifestyle/Wedding.8.jpg",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("XXL Mössö")}
        images={[
          {
            src: "/lifestyle/XXL_Mössö.JPG",
            alt: "",
          },
          {
            src: "/lifestyle/XXL_Mössö.2.JPG",
            alt: "",
          },
          {
            src: "/lifestyle/XXL_Mössö.3.JPG",
            alt: "",
          },
          {
            src: "/lifestyle/XXL_Mössö.4.JPG",
            alt: "",
          },
          {
            src: "/lifestyle/XXL_Mössö.5.JPG",
            alt: "",
          },
          {
            src: "/lifestyle/XXL_Mössö.6.JPG",
            alt: "",
          },
        ]}
      />
    </>
  );
}
