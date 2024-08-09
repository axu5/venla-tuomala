import { ImageCarousel } from "@/components/ImageCarousel";
import { SubTitle } from "@/components/SubTitle";
import { Title } from "@/components/Title";
import Image from "next/image";

export default function Testimonials() {
  return (
    <>
      <div className='flex items-center justify-center w-full py-20'>
        <Title>Testimonials</Title>
      </div>
      <main className='flex flex-col gap-y-20 w-[80vw] lg:w-full'>
        <Testimonial
          name='Saara'
          testimonial='Venla is a cool and awesome person and she made me feel so comfortable around the camera!'
          images={[
            { url: "/images/portraits/FC5A6755.jpg", alt: "" },
          ]}
        />
        <Testimonial
          name='Saara'
          testimonial='Venla is a cool and awesome person and she made me feel so comfortable around the camera!'
          images={[
            { url: "/images/portraits/FC5A6755.jpg", alt: "" },
            { url: "/images/portraits/FC5A6755.jpg", alt: "" },
            { url: "/images/portraits/FC5A6755.jpg", alt: "" },
            { url: "/images/portraits/FC5A6755.jpg", alt: "" },
            { url: "/images/portraits/FC5A6755.jpg", alt: "" },
          ]}
        />
        <Testimonial
          name='Saara'
          testimonial='Venla is a cool and awesome person and she made me feel so comfortable around the camera!'
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
    <div className='gap-y-10 flex flex-col md:grid md:grid-cols-2'>
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
