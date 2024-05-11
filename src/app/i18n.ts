import { createInstance, i18n, Resource, TFunction } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { i18nConfig } from "@/../i18nConfig";

export type Locale = (typeof i18nConfig.locales)[number];

export type LocaleParam = {
  params: { locale: Locale };
};

export type InitTranslationsReturns = {
  i18n: i18n;
  resources: Resource;
  t: TFunction<["translation", ...string[]], undefined>;
};

export default async function initTranslations(
  locale: string,
  namespaces: string[],
  i18nInstance: i18n | undefined = undefined,
  resources: Resource | undefined = undefined
): Promise<InitTranslationsReturns> {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/../locales/${language}/${namespace}.json`)
      )
    );
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  } satisfies InitTranslationsReturns;
}
