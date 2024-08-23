import initTranslations, { LocaleParam } from "@/app/i18n";
import { PortfolioItem } from "@/components/PortfolioItem";

import coupleBJ1 from "@/../public/portraits/Couple_B&J.jpg";
import coupleBJ2 from "@/../public/portraits/Couple_B&J2.jpg";
import coupleBJ3 from "@/../public/portraits/Couple_B&J3.jpg";
import engagement1 from "@/../public/portraits/Engagement1.jpg";
import engagement2 from "@/../public/portraits/Engagement2.jpg";
import graduation1 from "@/../public/portraits/Graduation1.jpg";
import graduation2 from "@/../public/portraits/Graduation2.jpg";
import ondrej1 from "@/../public/portraits/Ondrej.jpg";
import saara1 from "@/../public/portraits/Saara.jpg";
import saara2 from "@/../public/portraits/Saara2.jpg";
import saara3 from "@/../public/portraits/Saara3.jpg";
import saara4 from "@/../public/portraits/Saara4.jpg";
import saara5 from "@/../public/portraits/Saara5.jpg";
import saara6 from "@/../public/portraits/Saara6.jpg";
import saara7 from "@/../public/portraits/Saara7.jpg";

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
