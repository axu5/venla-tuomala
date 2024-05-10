import { BasicGridLayout } from "@/components/BasicGridLayout";

export default async function Couples() {
  const images = [
    { url: "/images/portraits/FC5A4041.png" },
    { url: "/images/portraits/FC5A4160.png" },
    { url: "/images/portraits/FC5A6755.jpg" },
    { url: "/images/portraits/HNRI0558.jpg" },
    { url: "/images/portraits/HNRI4237.jpg" },
    { url: "/images/portraits/HNRI4240.jpg" },
    { url: "/images/portraits/IMG2783.jpg" },
  ];
  return <BasicGridLayout images={images} />;
}
