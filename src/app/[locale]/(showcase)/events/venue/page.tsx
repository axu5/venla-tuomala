import { BasicGridLayout } from "@/components/BasicGridLayout";

export default async function Birthday() {
  const images = [
    { url: "/images/events/venue/IMG_0893.JPG" },
    { url: "/images/events/venue/IMG_0896.JPG" },
    { url: "/images/events/venue/IMG_0897.JPG" },
    { url: "/images/events/venue/IMG_0899.JPG" },
  ];
  return <BasicGridLayout images={images} />;
}
