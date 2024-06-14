import { PropsWithChildren } from "react";
import Balancer from "react-wrap-balancer";

type TitleProps = PropsWithChildren & { id?: string };

export function Title({ children, id }: TitleProps) {
  return (
    <h1
      className='font-serif text-5xl black font-medium py-3 scroll-m-32'
      id={id}>
      <Balancer>{children}</Balancer>
    </h1>
  );
}
