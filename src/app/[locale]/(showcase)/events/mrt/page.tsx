import { BasicGridLayout } from "@/components/BasicGridLayout";

export default async function Birthday() {
  const images = [
    { url: "/images/events/mrt/FC5A4304.jpg" },
    { url: "/images/events/mrt/FC5A4354.jpg" },
    { url: "/images/events/mrt/FC5A4397.jpg" },
    { url: "/images/events/mrt/FC5A4528.jpg" },
    { url: "/images/events/mrt/FC5A4751.jpg" },
    { url: "/images/events/mrt/FC5A4788.jpg" },
    { url: "/images/events/mrt/FC5A4985.jpg" },
  ];
  return <BasicGridLayout images={images} />;
}
