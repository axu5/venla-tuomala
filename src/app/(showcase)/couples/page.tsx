import { BasicGridLayout } from "@/components/BasicGridLayout";

export default async function Couples() {
  const images = [
    { url: "/images/couples/couple1/VEN11.jpg" },
    { url: "/images/couples/couple1/VEN02299.jpg" },
    // { url: "/images/couples/couple1/VEN02523.jpg" },
    { url: "/images/couples/couple2/HNRI3181.jpg" },
    { url: "/images/couples/couple2/HNRI3226.jpg" },
  ];
  return <BasicGridLayout images={images} />;
}
