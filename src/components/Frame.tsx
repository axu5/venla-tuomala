import Image from "next/image";

type FrameType = {
  title: string;
  picture: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
};

export function Frame({ title, picture }: FrameType) {
  return (
    <div className='border border-black pt-5 my-10'>
      <h2 className='pt-serif-regular text-2xl px-10 pb-5'>
        {title}
      </h2>
      <Image
        className='w-screen'
        src={picture.url}
        alt={picture.alt}
        width={picture.width}
        height={picture.height}
      />
    </div>
  );
}
