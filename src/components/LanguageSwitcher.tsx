"use client";

import { Locale } from "@/app/i18n";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { i18nConfig } from "@/../i18nConfig";

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: Locale) => {
    const newLocale = e;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <Select defaultValue={currentLocale} onValueChange={handleChange}>
      <SelectTrigger className='bg-offwhite border-none mr-2 lowercase text-2xl font-bold'>
        {t("Language")}
      </SelectTrigger>
      <SelectContent className='bg-offwhite'>
        <SelectGroup className='flex flex-col'>
          <SelectItem value='fi' className='cursor-pointer lowercase'>
            Suomi
          </SelectItem>
          <SelectItem value='en' className='cursor-pointer lowercase'>
            English
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
