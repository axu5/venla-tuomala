import { cookies } from "next/headers";
import { i18nConfig } from "@/../i18nConfig";

export function serverGetLocale() {
  const cookieStore = cookies();
  return (
    cookieStore.get("NEXT_LOCALE")?.value ?? i18nConfig.defaultLocale
  );
}
