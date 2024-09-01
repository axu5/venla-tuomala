import initTranslations, { LocaleParam } from "@/app/i18n";
import { PortfolioItem } from "@/components/PortfolioItem";
import { PortfolioTitle } from "@/components/PortfolioTitle";

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
import vic1 from "@/../public/portraits/Vic.webp";

export default async function PortraitsPage({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, [
    "seo-alt",
    "portraits",
  ]);
  return (
    <>
      <PortfolioTitle
        title={t("portraits:Portraits")}
        subtitle={t("portraits:PortraitsExplanation")}
        description={t("portraits:PortraitsIntro")}
      />
      <PortfolioItem
        images={[
          {
            src: coupleBJ1,
            alt: t("Couple B&J"),
          },
          {
            src: coupleBJ2,
            alt: t("Couple B&J"),
          },
          {
            src: coupleBJ3,
            alt: t("Couple B&J"),
          },
          {
            src: engagement1,
            alt: t("Engagement"),
          },
          {
            src: engagement2,
            alt: t("Engagement"),
          },
          {
            src: graduation1,
            alt: t("Graduation"),
          },
          {
            src: graduation2,
            alt: t("Graduation"),
          },
          { src: saara1, alt: t("Saara") },
          { src: saara2, alt: t("Saara") },
          { src: saara3, alt: t("Saara") },
          { src: saara4, alt: t("Saara") },
          { src: saara5, alt: t("Saara") },
          { src: saara6, alt: t("Saara") },
          { src: saara7, alt: t("Saara") },
          { src: ondrej1, alt: t("Ondrej") },
          { src: vic1, alt: t("Vic") },
        ]}
      />
    </>
  );
}
