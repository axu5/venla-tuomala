import initTranslations, { LocaleParam } from "@/app/i18n";
import { ImageCarousel } from "@/components/ImageCarousel";
import { SubTitle } from "@/components/SubTitle";
import { Title } from "@/components/Title";
import { StaticImageData } from "next/image";

import saara1 from "@/../public/portraits/Saara.jpg";
import saara2 from "@/../public/portraits/Saara2.jpg";
import saara3 from "@/../public/portraits/Saara3.jpg";
import saara4 from "@/../public/portraits/Saara4.jpg";
import saara5 from "@/../public/portraits/Saara5.jpg";
import saara6 from "@/../public/portraits/Saara6.jpg";
// @ts-expect-error ITS CAPS
import birthdayKK1 from "@/../public/lifestyle/Birthday_K&K.1.JPG";
// @ts-expect-error ITS CAPS
import birthdayKK2 from "@/../public/lifestyle/Birthday_K&K.2.JPG";
// @ts-expect-error ITS CAPS
import birthdayKK3 from "@/../public/lifestyle/Birthday_K&K.3.JPG";
// @ts-expect-error ITS CAPS
import birthdayKK4 from "@/../public/lifestyle/Birthday_K&K.4.JPG";
// @ts-expect-error ITS CAPS
import birthdayKK5 from "@/../public/lifestyle/Birthday_K&K.5.JPG";
// @ts-expect-error ITS CAPS
import birthdayKK6 from "@/../public/lifestyle/Birthday_K&K.6.JPG";
import birthdayKK7 from "@/../public/lifestyle/Birthday_K&K.7.jpg";
import birthdayKK8 from "@/../public/lifestyle/Birthday_K&K.8.jpg";
import birthdayKK9 from "@/../public/lifestyle/Birthday_K&K.9.jpg";
import birthdayKK10 from "@/../public/lifestyle/Birthday_K&K.10.jpg";
import birthdayKK11 from "@/../public/lifestyle/Birthday_K&K.11.jpg";
import birthdayKK12 from "@/../public/lifestyle/Birthday_K&K.12.jpg";
import birthdayKK13 from "@/../public/lifestyle/Birthday_K&K.13.jpg";
import birthdayKK14 from "@/../public/lifestyle/Birthday_K&K.14.jpg";
import birthdayKK15 from "@/../public/lifestyle/Birthday_K&K.15.jpg";
import riia1 from "@/../public/brands/PB_Riia.png";
import riia2 from "@/../public/brands/PB_Riia2.png";
import riia3 from "@/../public/brands/PB_Riia3.png";

export default async function Testimonials({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, ["testimonials"]);
  return (
    <>
      <div className='flex items-center justify-center w-full py-20'>
        <Title>{t("Testimonials")}</Title>
      </div>
      <div className='flex flex-col gap-y-20 w-full'>
        <Testimonial
          name={t("Testimonial1Title")}
          testimonial={t("Testimonial1")}
          images={[
            { data: saara1, alt: "" },
            { data: saara2, alt: "" },
            { data: saara3, alt: "" },
            { data: saara4, alt: "" },
            { data: saara5, alt: "" },
            { data: saara6, alt: "" },
          ]}
        />
        <Testimonial
          name={t("Testimonial2Title")}
          testimonial={t("Testimonial2")}
          images={[
            { data: birthdayKK1, alt: "" },
            { data: birthdayKK2, alt: "" },
            { data: birthdayKK3, alt: "" },
            { data: birthdayKK4, alt: "" },
            { data: birthdayKK5, alt: "" },
            { data: birthdayKK6, alt: "" },
            { data: birthdayKK7, alt: "" },
            { data: birthdayKK8, alt: "" },
            { data: birthdayKK9, alt: "" },
            { data: birthdayKK10, alt: "" },
            { data: birthdayKK11, alt: "" },
            { data: birthdayKK12, alt: "" },
            { data: birthdayKK13, alt: "" },
            { data: birthdayKK14, alt: "" },
            { data: birthdayKK15, alt: "" },
          ]}
        />
        <Testimonial
          name={t("Testimonial3Title")}
          testimonial={t("Testimonial3")}
          images={[
            { data: riia1, alt: "" },
            { data: riia2, alt: "" },
            { data: riia3, alt: "" },
          ]}
        />
      </div>
    </>
  );
}

type TestimonialType = {
  name: string;
  testimonial: string;
  images: { data: StaticImageData; alt: string }[];
};

function Testimonial({ name, testimonial, images }: TestimonialType) {
  return (
    <div className='gap-y-10 gap-x-10 flex flex-col md:grid md:grid-cols-[2fr_1fr]'>
      <div className='flex flex-col gap-y-5'>
        <SubTitle className='font-babas-neue text-5xl' id={name}>
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
