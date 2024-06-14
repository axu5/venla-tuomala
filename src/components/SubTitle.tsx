import { HTMLAttributes, PropsWithChildren } from "react";
import Balancer from "react-wrap-balancer";

type SubTitleProps = PropsWithChildren & {
  id?: string;
};

export function SubTitle({ children, id }: SubTitleProps) {
  return (
    <h2
      className='text-4xl text-muted-gray font-serif py-2 capitalize'
      id={id}>
      <Balancer>{children}</Balancer>
    </h2>
  );
}
