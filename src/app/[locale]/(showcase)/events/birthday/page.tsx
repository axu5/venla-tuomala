import { BasicGridLayout } from "@/components/BasicGridLayout";

export default async function Birthday() {
  const images = [
    { url: "/images/events/birthday/IMG_0931.JPG" },
    { url: "/images/events/birthday/IMG_0935.JPG" },
    { url: "/images/events/birthday/IMG_0938.JPG" },
    { url: "/images/events/birthday/IMG_0939.JPG" },
    { url: "/images/events/birthday/IMG_0941.JPG" },
    { url: "/images/events/birthday/IMG_0944.JPG" },
  ];
  return <BasicGridLayout images={images} />;
}
