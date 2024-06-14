import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { PropsWithChildren } from "react";

type TitleProps = PropsWithChildren & {
  id?: string;
  className?: ClassValue;
};

export function Title({ className, children, id }: TitleProps) {
  return (
    <h1
      className={cn(
        "font-serif text-5xl black font-medium py-3 scroll-m-32 text-balance",
        className
      )}
      id={id}>
      {children}
    </h1>
  );
}
