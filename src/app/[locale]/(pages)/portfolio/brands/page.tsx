import initTranslations, { LocaleParam } from "@/app/i18n";
import { PortfolioItem } from "@/components/PortfolioItem";

export default async function BrandsPage({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, ["lifestyle"]);
  return (
    <>
      <PortfolioItem
        name={t("Beauty Salon")}
        images={[
          {
            src: "/brands/Beauty_Salon.1.jpg",
            alt: "",
          },
          {
            src: "/brands/Beauty_Salon.2.jpg",
            alt: "",
          },
          {
            src: "/brands/Beauty_Salon.3.jpg",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("FC Probba")}
        images={[
          {
            src: "/brands/FC_Probba.1.jpg",
            alt: "",
          },
          {
            src: "/brands/FC_Probba.2.jpg",
            alt: "",
          },
          {
            src: "/brands/FC_Probba.3.jpg",
            alt: "",
          },
          {
            src: "/brands/FC_Probba.4.jpg",
            alt: "",
          },
          {
            src: "/brands/FC_Probba.5.jpg",
            alt: "",
          },
          {
            src: "/brands/FC_Probba.7.jpg",
            alt: "",
          },
          {
            src: "/brands/FC_Probba.8.jpg",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Riia")}
        images={[
          {
            src: "/brands/Riia.png",
            alt: "",
          },
          {
            src: "/brands/Riia2.png",
            alt: "",
          },
          {
            src: "/brands/Riia3.png",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Vappu")}
        images={[
          {
            src: "/brands/Vappu.png",
            alt: "",
          },
          {
            src: "/brands/Vappu2.png",
            alt: "",
          },
        ]}
      />
      <PortfolioItem
        name={t("Yoga")}
        images={[
          {
            src: "/brands/Yoga.1.jpg",
            alt: "",
          },
          {
            src: "/brands/Yoga.2.jpg",
            alt: "",
          },
          {
            src: "/brands/Yoga.3.jpg",
            alt: "",
          },
          {
            src: "/brands/Yoga.4.jpg",
            alt: "",
          },
          {
            src: "/brands/Yoga.5.jpg",
            alt: "",
          },
          {
            src: "/brands/Yoga.6.jpg",
            alt: "",
          },
          {
            src: "/brands/Yoga.7.jpg",
            alt: "",
          },
          {
            src: "/brands/Yoga.8.jpg",
            alt: "",
          },
        ]}
      />
    </>
  );
}
