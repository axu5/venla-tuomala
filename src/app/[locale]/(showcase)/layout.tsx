import initTranslations, { LocaleParam } from "@/app/i18n";
import { ClientBreadcrumbs } from "@/components/ClientBreadcrumbs";
import { TranslationsProvider } from "@/components/TranslationsProvider";
import { PropsWithChildren } from "react";

const i18nNamespaces = ["home", "common"];

export default async function ShowcaseLayout({
  children,
  params: { locale },
}: PropsWithChildren & LocaleParam) {
  const { t, resources } = await initTranslations(
    locale,
    i18nNamespaces
  );
  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}>
      <ClientBreadcrumbs />
      <main className='pt-5'>{children}</main>
    </TranslationsProvider>
  );
}
