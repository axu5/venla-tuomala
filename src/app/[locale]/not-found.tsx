import initTranslations from "@/app/i18n";
import { serverGetLocale } from "@/utils/server-get-locale";
import Link from "next/link";

export default async function NotFound() {
  const locale = serverGetLocale();

  const { t } = await initTranslations(locale, ["not-found"]);
  return (
    <div className='w-full h-[40vh] flex flex-col justify-center items-center py-12'>
      <h1 className='text-3xl'>404 | {t("Not Found")}</h1>
      <h2 className='text-2xl'>
        {t("This resource could not be loaded")}{" "}
        <Link href='/' className='underline text-blue-600'>
          {t("return to the main page")}
        </Link>
      </h2>
    </div>
  );
}
