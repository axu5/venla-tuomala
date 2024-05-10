import { BasicGridLayout } from "@/components/BasicGridLayout";

export default async function Graduation() {
  const images = [
    { url: "/images/events/graduation/HNRI4251.jpg" },
    { url: "/images/events/graduation/HNRI4304.jpg" },
    { url: "/images/events/graduation/HNRI4310.jpg" },
    { url: "/images/events/graduation/HNRI4565.jpg" },
    { url: "/images/events/graduation/HNRI4573.jpg" },
  ];
  return <BasicGridLayout images={images} />;
}
