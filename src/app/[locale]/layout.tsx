import { i18nConfig } from "@/../../i18nConfig";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ProgressBar } from "@/components/ProgressBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Title } from "@/components/Title";
import { TranslationsProvider } from "@/components/TranslationsProvider";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Toaster } from "@/components/ui/sonner";
import { ASSETS } from "@/constants";
import { dir } from "i18next";
import { Copyright, MenuIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Provider as BalancerProvider } from "react-wrap-balancer";
import initTranslations, { Locale, LocaleParam } from "../i18n";
import "./globals.css";

// TODO: SEO
export const metadata: Metadata = {
  title: "Venla Tuomala • Photographer",
  description: "Venla Tuomala is a photographer ...",
};

const i18nNamespaces = ["home", "common"];

export async function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
}> &
  LocaleParam) {
  const { t, resources } = await initTranslations(
    locale,
    i18nNamespaces
  );
  return (
    <html lang={locale} dir={dir(locale)} className='scroll-smooth'>
      <body>
        <BalancerProvider>
          <TranslationsProvider
            locale={locale}
            namespaces={i18nNamespaces}
            resources={resources}>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange>
              {/* Container so on larger screens there is always padding on the sides */}
              <div className='flex flex-col'>
                {/* Nav */}
                <div className='sticky top-5 z-10 w-full max-w-screen-xl mx-auto'>
                  <nav className='bg-offwhite py-5 rounded-lg'>
                    <ul className='flex flex-row justify-around items-center'>
                      <li className='text-3xl font-bold border border-transparent px-5 mr-5 md:pr-20 border-r-muted-gray'>
                        <Link href='/'>
                          <ASSETS.initials />
                        </Link>
                      </li>
                      <li className='hidden md:block text-2xl font-bold'>
                        <Link
                          href='/previous-work'
                          className='lowercase'>
                          {t("Previous work")}
                        </Link>
                      </li>
                      <li className='hidden md:block text-2xl font-bold'>
                        <Link
                          href='/testimonials'
                          className='lowercase'>
                          {t("Testimonials")}
                        </Link>
                      </li>
                      <li className='hidden md:block text-2xl font-bold'>
                        <Link href='/about' className='lowercase'>
                          {t("About")}
                        </Link>
                      </li>
                      <li className='hidden md:block text-2xl font-bold'>
                        <Link href='/contact' className='lowercase'>
                          {t("contact")}
                        </Link>
                      </li>
                      <li className=''>
                        <LanguageSwitcher />
                      </li>
                      <li className='block md:hidden'>
                        <Sheet>
                          <SheetTrigger>
                            <MenuIcon className='text-muted-gray w-8 h-8' />
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>
                                <Title>Venla Tuomala</Title>
                              </SheetTitle>
                            </SheetHeader>
                            <ul className='flex flex-col gap-y-10 py-20 px-10'>
                              <li className='text-3xl font-bold'>
                                <SheetClose asChild>
                                  <Link
                                    href='/#gallery'
                                    className='lowercase'>
                                    {t("Gallery")}
                                  </Link>
                                </SheetClose>
                              </li>
                              <li className='text-3xl font-bold'>
                                <SheetClose asChild>
                                  <Link
                                    href='/about'
                                    className='lowercase'>
                                    {t("About")}
                                  </Link>
                                </SheetClose>
                              </li>
                              <li className='text-3xl font-bold'>
                                <SheetClose asChild>
                                  <Link
                                    href='/#what-to-expect'
                                    className='lowercase'>
                                    {t("What to expect")}
                                  </Link>
                                </SheetClose>
                              </li>
                              <li className='text-3xl font-bold'>
                                <SheetClose asChild>
                                  <Link
                                    href='/contact'
                                    className='lowercase'>
                                    {t("contact")}
                                  </Link>
                                </SheetClose>
                              </li>
                            </ul>
                          </SheetContent>
                        </Sheet>
                      </li>
                    </ul>
                  </nav>
                  <ProgressBar />
                </div>
                {children}
                <Footer locale={locale} />
              </div>
              <Toaster richColors />
            </ThemeProvider>
          </TranslationsProvider>
        </BalancerProvider>
      </body>
    </html>
  );
}

async function Footer({ locale }: { locale: Locale }) {
  const { t } = await initTranslations(locale, ["home", "common"]);
  return (
    <div className='pt-px mt-10 bg-gradient-to-r from-transparent via-goldenisher to-transparent w-full max-w-7xl mx-auto'>
      <div className='flex flex-row justify-around py-20 w-full bg-offwhite'>
        <div className='flex flex-col md:flex-row justify-around w-[50%]'>
          <Link
            className={buttonVariants({
              variant: "link",
              className: "font-semibold tracking-wide text-2xl",
            })}
            href='/contact'>
            Contact
          </Link>
          <Link
            className={buttonVariants({
              variant: "link",
              className: "font-semibold tracking-wide text-2xl",
            })}
            href='/about'>
            About
          </Link>
          <Link
            className={buttonVariants({
              variant: "link",
              className: "font-semibold tracking-wide text-2xl",
            })}
            href='/testimonials'>
            Testimonials
          </Link>
        </div>
        <div className='flex flex-col'>
          <Link
            className={buttonVariants({
              variant: "call-to-action",
            })}
            href='/contact'>
            Get in touch!
          </Link>
          <div className='flex flex-row text-xl items-center justify-center self-end text-muted-gray font-ibarra font-medium py-12'>
            <Copyright className='mr-2' /> {new Date().getFullYear()}{" "}
            Venla Tuomala
          </div>
        </div>
      </div>
    </div>
  );
}
