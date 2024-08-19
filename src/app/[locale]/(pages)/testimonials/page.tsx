import initTranslations, { LocaleParam } from "@/app/i18n";
import { ImageCarousel } from "@/components/ImageCarousel";
import { SubTitle } from "@/components/SubTitle";
import { Title } from "@/components/Title";
import Image from "next/image";

export default async function Testimonials({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, ["testimonials"]);
  return (
    <>
      <div className='flex items-center justify-center w-full py-20'>
        <Title>{t("Testimonials")}</Title>
      </div>
      <main className='flex flex-col gap-y-20 w-[80vw] lg:w-full'>
        <Testimonial
          name={t("Testimonial1Title")}
          testimonial={t("Testimonial1")}
          images={[
            { url: "/images/portraits/FC5A6755.jpg", alt: "" },
          ]}
        />
        <Testimonial
          name={t("Testimonial2Title")}
          testimonial={t("Testimonial2")}
          images={[
            { url: "/images/portraits/FC5A6755.jpg", alt: "" },
            { url: "/images/portraits/FC5A6755.jpg", alt: "" },
            { url: "/images/portraits/FC5A6755.jpg", alt: "" },
            { url: "/images/portraits/FC5A6755.jpg", alt: "" },
            { url: "/images/portraits/FC5A6755.jpg", alt: "" },
          ]}
        />
        <Testimonial
          name={t("Testimonial3Title")}
          testimonial={t("Testimonial3")}
          images={[
            { url: "/images/portraits/FC5A6755.jpg", alt: "" },
          ]}
        />
      </main>
    </>
  );
}

type TestimonialType = {
  name: string;
  testimonial: string;
  images: { url: string; alt: string }[];
};

function Testimonial({ name, testimonial, images }: TestimonialType) {
  return (
    <div className='gap-y-10 gap-x-10 flex flex-col md:grid md:grid-cols-[2fr_1fr]'>
      <div className='flex flex-col'>
        <SubTitle className='font-babas-neue text-5xl'>
          {name}
        </SubTitle>
        <div className='font-ibarra text-2xl'>{testimonial}</div>
      </div>
      <ImageCarousel
        className='mx-auto md:max-w-72'
        images={images}
      />
    </div>
  );
}
