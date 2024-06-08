type SubTitleProps = {
  title: string;
  id: string;
};

export function SubTitle({ title, id }: SubTitleProps) {
  return (
    <div className='scroll-m-16 flex flex-col items-center' id={id}>
      <h2 className='text-3xl font-bold w-full text-center uppercase font-sans border border-transparent border-y-black my-10 py-2'>
        {title}
      </h2>
    </div>
  );
}
