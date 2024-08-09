import { SubTitle } from "@/components/SubTitle";
import { Title } from "@/components/Title";

export default function Process() {
  return (
    <div>
      <Title className='py-20'>Process</Title>
      <SubTitle className='font-babas-neue pb-2'>
        Pre photo day
      </SubTitle>
      <div className='flex flex-col md:grid md:grid-cols-[1fr_3fr] gap-x-3 md:gap-y-10 text-2xl font-ibarra border border-l-2 border-y-0 border-r-0 border-l-goldenisher pl-10 py-5'>
        <div>0h</div>
        <div className='pb-10 md:p-0'>Order</div>
        <div>72h</div>
        <div className='pb-10 md:p-0'>Planning</div>
      </div>
      <SubTitle className='font-babas-neue pt-5 pb-2'>
        Photo day
      </SubTitle>
      <div className='flex flex-col md:grid md:grid-cols-[1fr_3fr] gap-x-3 md:gap-y-10 text-2xl font-ibarra border border-l-2 border-y-0 border-r-0 border-l-goldenisher pl-10 py-5'>
        <div>+48h</div>
        <div className='pb-10 md:p-0'>Edited sneak peek photos</div>
        <div>+2 weeks</div>
        <div className='pb-10 md:p-0'>
          Fully edited photos and online gallery
        </div>
        <div>+4 weeks</div>
        <div className='pb-10 md:p-0'>
          Fully edited + printed photos shipped anywhere in Finland{" "}
          <span className='text-sm'>
            if requested, additional fees apply
          </span>
        </div>
      </div>
    </div>
  );
}
