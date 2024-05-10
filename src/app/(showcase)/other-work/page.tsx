import { BasicGridLayout } from "@/components/BasicGridLayout";

export default async function OtherWork() {
  const images = [
    { url: "/images/other-work/beauty-salon/HNRI2734.jpg" },
    { url: "/images/other-work/beauty-salon/HNRI2789.jpg" },
    { url: "/images/other-work/beauty-salon/HNRI2800.jpg" },
    { url: "/images/other-work/yoga/HNRI0068.jpg" },
    { url: "/images/other-work/yoga/HNRI0276.jpg" },
    { url: "/images/other-work/yoga/HNRI0299.jpg" },
    { url: "/images/other-work/yoga/HNRI0317.jpg" },
    { url: "/images/other-work/yoga/HNRI0403.jpg" },
    { url: "/images/other-work/yoga/HNRI0487.jpg" },
    { url: "/images/other-work/yoga/HNRI0511.jpg" },
    { url: "/images/other-work/Riia.png" },
  ];
  return <BasicGridLayout images={images} />;
}
