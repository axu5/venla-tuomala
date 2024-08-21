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
            { url: "/portraits/Saara.jpg", alt: "" },
            { url: "/portraits/Saara2.jpg", alt: "" },
            { url: "/portraits/Saara3.jpg", alt: "" },
            { url: "/portraits/Saara4.jpg", alt: "" },
            { url: "/portraits/Saara5.jpg", alt: "" },
            { url: "/portraits/Saara6.jpg", alt: "" },
            { url: "/portraits/Saara7.jpg", alt: "" },
          ]}
        />
        <Testimonial
          name={t("Testimonial2Title")}
          testimonial={t("Testimonial2")}
          images={[
            { url: "/lifestyle/Birthday_K&K.1.JPG", alt: "" },
            { url: "/lifestyle/Birthday_K&K.2.JPG", alt: "" },
            { url: "/lifestyle/Birthday_K&K.3.JPG", alt: "" },
            { url: "/lifestyle/Birthday_K&K.4.JPG", alt: "" },
            { url: "/lifestyle/Birthday_K&K.5.JPG", alt: "" },
            { url: "/lifestyle/Birthday_K&K.6.JPG", alt: "" },
            { url: "/lifestyle/Birthday_K&K.7.jpg", alt: "" },
            { url: "/lifestyle/Birthday_K&K.8.jpg", alt: "" },
            { url: "/lifestyle/Birthday_K&K.9.jpg", alt: "" },
            { url: "/lifestyle/Birthday_K&K.10.jpg", alt: "" },
            { url: "/lifestyle/Birthday_K&K.11.jpg", alt: "" },
            { url: "/lifestyle/Birthday_K&K.12.jpg", alt: "" },
            { url: "/lifestyle/Birthday_K&K.13.jpg", alt: "" },
            { url: "/lifestyle/Birthday_K&K.14.jpg", alt: "" },
            { url: "/lifestyle/Birthday_K&K.15.jpg", alt: "" },
          ]}
        />
        <Testimonial
          name={t("Testimonial3Title")}
          testimonial={t("Testimonial3")}
          images={[
            { url: "/brands/PB_Riia.png", alt: "" },
            { url: "/brands/PB_Riia2.png", alt: "" },
            { url: "/brands/PB_Riia3.png", alt: "" },
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
      <div className='flex flex-col gap-y-5'>
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
