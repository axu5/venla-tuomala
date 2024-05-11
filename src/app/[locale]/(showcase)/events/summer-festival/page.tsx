import { BasicGridLayout } from "@/components/BasicGridLayout";

export default async function Birthday() {
  const images = [
    { url: "/images/events/summer-festival/IMG_0908.JPG" },
    { url: "/images/events/summer-festival/IMG_0909.JPG" },
    { url: "/images/events/summer-festival/IMG_0910.JPG" },
    { url: "/images/events/summer-festival/IMG_0911.JPG" },
    { url: "/images/events/summer-festival/IMG_0919.JPG" },
    { url: "/images/events/summer-festival/IMG_0921.JPG" },
  ];
  return <BasicGridLayout images={images} />;
}
