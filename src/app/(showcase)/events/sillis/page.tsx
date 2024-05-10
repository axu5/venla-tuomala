import { BasicGridLayout } from "@/components/BasicGridLayout";

export default async function Birthday() {
  const images = [
    { url: "/images/events/sillis/IMG_2714.jpg" },
    { url: "/images/events/sillis/IMG_3090.jpg" },
  ];
  return <BasicGridLayout images={images} />;
}
