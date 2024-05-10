import { BasicGridLayout } from "@/components/BasicGridLayout";

export default async function Weddings() {
  const images = [
    { url: "/images/weddings/HNRI8564.jpg" },
    { url: "/images/weddings/HNRI8697.jpg" },
    { url: "/images/weddings/HNRI8721.jpg" },
    { url: "/images/weddings/HNRI9053.jpg" },
    // { url: "/images/weddings/HNRI9071.jpg" },
    { url: "/images/weddings/HNRI9401.jpg" },
    { url: "/images/weddings/HNRI9664.jpg" },
    // { url: "/images/weddings/HNRI9681.jpg" },
  ];
  return <BasicGridLayout images={images} />;
}
