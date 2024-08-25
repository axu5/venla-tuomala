import { Title } from "@/components/Title";
import { SubTitle } from "@/components/SubTitle";

type PortfolioTitleProps = {
  title: string;
  subtitle: string;
  description: string;
};

export function PortfolioTitle({
  title,
  subtitle,
  description,
}: PortfolioTitleProps) {
  return (
    <>
      <Title className='text-center pt-20'>{title}</Title>
      <SubTitle className='text-center pb-5'>{subtitle}</SubTitle>
      <div className='font-ibarra text-center text-xl pb-10'>
        {description}
      </div>
    </>
  );
}
