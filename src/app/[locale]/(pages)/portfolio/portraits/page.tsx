import initTranslations, { LocaleParam } from "@/app/i18n";
import { PortfolioItem } from "@/components/PortfolioItem";

import coupleBJ1 from "@/../public/portraits/Couple_B&J.webp";
import coupleBJ2 from "@/../public/portraits/Couple_B&J2.webp";
import coupleBJ3 from "@/../public/portraits/Couple_B&J3.webp";
import engagement1 from "@/../public/portraits/Engagement1.webp";
import engagement2 from "@/../public/portraits/Engagement2.webp";
import graduation1 from "@/../public/portraits/Graduation1.webp";
import graduation2 from "@/../public/portraits/Graduation2.webp";
import ondrej1 from "@/../public/portraits/Ondrej.webp";
import saara1 from "@/../public/portraits/Saara.webp";
import saara2 from "@/../public/portraits/Saara2.webp";
import saara3 from "@/../public/portraits/Saara3.webp";
import saara4 from "@/../public/portraits/Saara4.webp";
import saara5 from "@/../public/portraits/Saara5.webp";
import saara6 from "@/../public/portraits/Saara6.webp";
import saara7 from "@/../public/portraits/Saara7.webp";

export default async function PortraitsPage({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, ["lifestyle"]);
  return (
    <>
      <PortfolioItem
        priority
        name={t("Couple B&J")}
        images={[
          {
            src: coupleBJ1,
            alt: "",
          },
          {
            src: coupleBJ2,
            alt: "",
          },
          {
            src: coupleBJ3,
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Engagement")}
        images={[
          {
            src: engagement1,
            alt: "",
          },
          {
            src: engagement2,
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Graduation")}
        images={[
          {
            src: graduation1,
            alt: "",
          },
          {
            src: graduation2,
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Ondrej")}
        images={[
          {
            src: ondrej1,
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Saara")}
        images={[
          { src: saara1, alt: "" },
          { src: saara2, alt: "" },
          { src: saara3, alt: "" },
          { src: saara4, alt: "" },
          { src: saara5, alt: "" },
          { src: saara6, alt: "" },
          { src: saara7, alt: "" },
        ]}
      />
    </>
  );
}
