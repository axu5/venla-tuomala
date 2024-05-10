import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment, PropsWithChildren } from "react";
import { headers } from "next/headers";

export default function ShowcaseLayout({
  children,
}: PropsWithChildren) {
  const heads = headers();
  const pathname = heads.get("x-pathname") ?? "";
  const splitPathname = pathname
    .split("/")
    .reduce((a: string[], c) => (c.length > 0 ? a.concat(c) : a), []);

  return (
    <>
      <Breadcrumb className='border-y md:border-x border-black px-5 py-2 shadow-sm'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {splitPathname.map((x, i) => {
            const displayText = x.replace(/-/g, " ");

            // if it's the last item then don't make a url for it
            if (i === splitPathname.length - 1) {
              return (
                <BreadcrumbItem key={x}>
                  <BreadcrumbPage className='capitalize'>
                    {displayText}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              );
            }
            const currUrl =
              "/" + splitPathname.slice(0, i + 1).join("/");
            return (
              <Fragment key={x}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className='capitalize'
                    href={currUrl}>
                    {displayText}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <main className='pt-5'>{children}</main>
    </>
  );
}
