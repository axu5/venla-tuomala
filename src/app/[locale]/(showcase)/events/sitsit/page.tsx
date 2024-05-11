import { BasicGridLayout } from "@/components/BasicGridLayout";

export default async function Birthday() {
  const images = [
    { url: "/images/events/sitsit/FC5A5428.jpg" },
    { url: "/images/events/sitsit/FC5A5714.jpg" },
    { url: "/images/events/sitsit/FC5A5787.jpg" },
    { url: "/images/events/sitsit/FC5A5789.jpg" },
    { url: "/images/events/sitsit/FC5A5932.jpg" },
  ];
  return <BasicGridLayout images={images} />;
}
