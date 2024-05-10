import { BasicGridLayout } from "@/components/BasicGridLayout";

export default async function Birthday() {
  const images = [
    { url: "/images/events/wappu/FC5A6385.jpg" },
    { url: "/images/events/wappu/Vappu.jpg" },
  ];
  return <BasicGridLayout images={images} />;
}
