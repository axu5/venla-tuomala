import { ClientBreadcrumbs } from "@/components/ClientBreadcrumbs";
import { PropsWithChildren } from "react";

export default function ShowcaseLayout({
  children,
}: PropsWithChildren) {
  return (
    <>
      <ClientBreadcrumbs />
      <main className='pt-5'>{children}</main>
    </>
  );
}
