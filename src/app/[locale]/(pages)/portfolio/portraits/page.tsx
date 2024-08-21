import initTranslations, { LocaleParam } from "@/app/i18n";
import { PortfolioItem } from "@/components/PortfolioItem";

export default async function PortraitsPage({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, ["lifestyle"]);
  return (
    <>
      <PortfolioItem
        name={t("Couple B&J")}
        images={[
          {
            src: "/portraits/Couple_B&J.jpg",
            alt: "",
          },
          {
            src: "/portraits/Couple_B&J2.jpg",
            alt: "",
          },
          {
            src: "/portraits/Couple_B&J3.jpg",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Engagement")}
        images={[
          {
            src: "/portraits/Engagement1.jpg",
            alt: "",
          },
          {
            src: "/portraits/Engagement2.jpg",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Graduation")}
        images={[
          {
            src: "/portraits/Graduation1.jpg",
            alt: "",
          },
          {
            src: "/portraits/Graduation2.jpg",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Ondrej")}
        images={[
          {
            src: "/portraits/Ondrej.jpg",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Saara")}
        images={[
          {
            src: "/portraits/Saara.jpg",
            alt: "",
          },
          {
            src: "/portraits/Saara2.jpg",
            alt: "",
          },
          {
            src: "/portraits/Saara3.jpg",
            alt: "",
          },
          {
            src: "/portraits/Saara4.jpg",
            alt: "",
          },
          {
            src: "/portraits/Saara5.jpg",
            alt: "",
          },
          {
            src: "/portraits/Saara6.jpg",
            alt: "",
          },
          {
            src: "/portraits/Saara7.jpg",
            alt: "",
          },
        ]}
      />
    </>
  );
}
