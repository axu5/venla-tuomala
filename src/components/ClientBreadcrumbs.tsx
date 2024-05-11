"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { i18nConfig } from "../../i18nConfig";
import { Locale } from "@/app/i18n";
import { useTranslation } from "react-i18next";

export function ClientBreadcrumbs() {
  const pathname = usePathname();
  const splitPathname = pathname.split("/").splice(1);
  const { t } = useTranslation();

  return (
    <Breadcrumb className='border-y md:border-x border-black px-5 py-2 shadow-sm'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>{t("Home")}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {splitPathname.map((x, i) => {
          if (i18nConfig.locales.includes(x as Locale)) return null;
          const displayText = t(capitalize(x.replace(/-/g, " ")));

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
                <BreadcrumbLink className='capitalize' href={currUrl}>
                  {displayText}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
