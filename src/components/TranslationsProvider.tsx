"use client";

import initTranslations from "@/app/i18n";
import { createInstance, Resource } from "i18next";
import { PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";
import { i18nConfig } from "../../i18nConfig";

type TranslationsProviderType = PropsWithChildren & {
  locale: (typeof i18nConfig.locales)[number];
  namespaces: string[];
  resources: Resource;
};

export function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: TranslationsProviderType) {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
