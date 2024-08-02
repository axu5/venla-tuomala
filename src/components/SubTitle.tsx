import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { PropsWithChildren } from "react";

type SubTitleProps = PropsWithChildren & {
  id?: string;
  className?: ClassValue;
};

export function SubTitle({ className, children, id }: SubTitleProps) {
  return (
    <h2
      className={cn(
        "text-4xl text-muted-gray font-ibarra py-2 capitalize scroll-m-32 text-balance",
        className
      )}
      id={id}>
      {children}
    </h2>
  );
}
