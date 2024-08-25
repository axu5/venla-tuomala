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
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { dir } from "i18next";
import {
  ChevronDown,
  Copyright,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Provider as BalancerProvider } from "react-wrap-balancer";
import initTranslations, { Locale, LocaleParam } from "../i18n";
import "./globals.css";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// TODO: SEO
export const metadata: Metadata = {
  title: "Venla Tuomala • Photographer",
  description:
    "Tapahtuma-, henkilö- ja brändivalokuvaus. Helsinki, Lahti ja Mikkeli",
  // TODO: figure out how to do this on a router level
  alternates: {
    languages: {
      en: "/en",
      fi: "/fi",
    },
  },
  applicationName: "Venla Tuomala Portfolio",
  category: "Portfolio",
  keywords: [
    "Valokuvaaja",
    "Mikkeli",
    "Häävalokuvaaja",
    "Tapahtumavalokuvaaja",
  ],
};

const i18nNamespaces = ["common", "portfolio"];

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
                <Nav locale={locale} />
                {children}
                <Footer locale={locale} />
              </div>
              <Toaster richColors />
            </ThemeProvider>
          </TranslationsProvider>
        </BalancerProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

async function Nav({ locale }: { locale: Locale }) {
  return (
    <div className='sticky top-0 pt-5 z-10 w-full max-w-screen-xl mx-auto'>
      <nav className='bg-offwhite py-5 rounded-lg'>
        <ul className='flex flex-row justify-evenly md:justify-around items-center'>
          <li className='flex flex-row items-center'>
            <Link
              href='/'
              className='py-1 text-3xl font-bold border border-transparent pl-5 mr-5 pr-10 md:pr-20 border-r-muted-gray font-babas-neue tracking-wide'>
              VT
            </Link>
          </li>
          <WideScreenNav locale={locale} />
          <li>
            <LanguageSwitcher />
          </li>
          <li className='block md:hidden'>
            <NarrowScreenNav locale={locale} />
          </li>
        </ul>
      </nav>
      <ProgressBar />
    </div>
  );
}

async function WideScreenNav({ locale }: { locale: Locale }) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <li className='hidden md:flex flex-row text-2xl'>
        <HoverCard openDelay={0} closeDelay={1000}>
          <HoverCardTrigger className='flex flex-row items-center'>
            <Link
              href='/portfolio'
              className='capitalize font-ibarra flex flex-row justify-center items-center'>
              {t("Portfolio")}
            </Link>
            <ChevronDown className='w-4 h-4 ml-4' />
          </HoverCardTrigger>
          <HoverCardContent className='flex flex-col font-ibarra'>
            <Link
              href='/portfolio/lifestyle'
              className={buttonVariants({
                variant: "link",
              })}>
              {t("lifestyle:Lifestyle")}
            </Link>
            <Link
              href='/portfolio/portraits'
              className={buttonVariants({
                variant: "link",
              })}>
              {t("portraits:Portraits")}
            </Link>
            <Link
              href='/portfolio/lifestyle'
              className={buttonVariants({
                variant: "link",
              })}>
              {t("brands:Brands")}
            </Link>
          </HoverCardContent>
        </HoverCard>
      </li>
      <li className='hidden md:block text-2xl'>
        <Link href='/testimonials' className='capitalize font-ibarra'>
          {t("Testimonials")}
        </Link>
      </li>
      <li className='hidden md:block text-2xl'>
        <Link href='/about' className='capitalize font-ibarra'>
          {t("About")}
        </Link>
      </li>
      <li className='hidden md:block text-2xl'>
        <Link
          className={buttonVariants({
            variant: "call-to-action",
          })}
          href='/contact'>
          {t("Contact")}
        </Link>
      </li>
    </>
  );
}

async function NarrowScreenNav({ locale }: { locale: Locale }) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <MenuIcon className='text-muted-gray w-8 h-8' />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <SheetClose asChild>
                <Link href='/'>
                  <Title>Venla Tuomala</Title>
                </Link>
              </SheetClose>
            </SheetTitle>
          </SheetHeader>
          <ul className='flex flex-col gap-y-10 py-10'>
            <li className='font-bold items-start flex flex-col gap-y-1'>
              <SheetClose asChild>
                <Link
                  href='/portfolio'
                  className={buttonVariants({
                    variant: "link",
                  })}>
                  {t("Portfolio")}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href='/portfolio/lifestyle'
                  className={cn(
                    buttonVariants({
                      variant: "link",
                    }),
                    "text-lg capitalize ml-4 border border-y-0 border-r-0 border-l-2 border-goldenisher rounded-none"
                  )}>
                  {t("portfolio:Lifestyle")}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href='/portfolio/portraits'
                  className={cn(
                    buttonVariants({
                      variant: "link",
                    }),
                    "text-lg capitalize ml-4 border border-y-0 border-r-0 border-l-2 border-goldenisher rounded-none"
                  )}>
                  {t("portfolio:Portraits")}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href='/portfolio/brands'
                  className={cn(
                    buttonVariants({
                      variant: "link",
                    }),
                    "text-lg capitalize ml-4 border border-y-0 border-r-0 border-l-2 border-goldenisher rounded-none"
                  )}>
                  {t("portfolio:Brands")}
                </Link>
              </SheetClose>
            </li>
            <li className='font-bold'>
              <SheetClose asChild>
                <Link
                  href='/testimonials'
                  className={buttonVariants({
                    variant: "link",
                  })}>
                  {t("Testimonials")}
                </Link>
              </SheetClose>
            </li>
            <li className='font-bold'>
              <SheetClose asChild>
                <Link
                  href='/about'
                  className={buttonVariants({
                    variant: "link",
                  })}>
                  {t("About")}
                </Link>
              </SheetClose>
            </li>
            <li className='font-bold'>
              <SheetClose asChild>
                <Link
                  href='/contact'
                  className={buttonVariants({
                    variant: "call-to-action",
                  })}>
                  {t("Contact")}
                </Link>
              </SheetClose>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}

async function Footer({ locale }: { locale: Locale }) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <div className='pt-px mt-10 bg-gradient-to-r from-transparent via-goldenisher to-transparent w-full max-w-[calc(100vw-80px)] md:max-w-7xl mx-auto'>
        <div className='flex flex-col gap-y-10 md:flex-row justify-around px-10 md:px-0 py-20 w-full bg-offwhite'>
          <div className='flex flex-col md:flex-row justify-center md:justify-around items-center md:w-[50%]'>
            <div className='flex flex-col'>
              <Link
                className={buttonVariants({
                  variant: "link",
                  className: "font-semibold tracking-wide text-2xl",
                })}
                href='/portfolio'>
                {t("Portfolio")}
              </Link>
              <Link
                className={cn(
                  buttonVariants({
                    variant: "link",
                    className: "font-semibold tracking-wide",
                  }),
                  "text-md block md:hidden mx-auto"
                )}
                href='/portfolio/lifestyle'>
                {t("portfolio:Lifestyle")}
              </Link>
              <Link
                className={cn(
                  buttonVariants({
                    variant: "link",
                    className: "font-semibold tracking-wide",
                  }),
                  "text-md block md:hidden mx-auto"
                )}
                href='/portfolio/portraits'>
                {t("portfolio:Portraits")}
              </Link>
              <Link
                className={cn(
                  buttonVariants({
                    variant: "link",
                    className: "font-semibold tracking-wide",
                  }),
                  "text-md block md:hidden mx-auto"
                )}
                href='/portfolio/portraits'>
                {t("portfolio:Brands")}
              </Link>
            </div>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "font-semibold tracking-wide text-2xl",
              })}
              href='/testimonials'>
              {t("Testimonials")}
            </Link>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "font-semibold tracking-wide text-2xl",
              })}
              href='/about'>
              {t("About")}
            </Link>
          </div>
          <div className='flex flex-col gap-y-5'>
            <Link
              className={buttonVariants({
                variant: "call-to-action",
              })}
              href='/contact'>
              {t("Contact")}
            </Link>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "font-semibold tracking-wide text-2xl",
              })}
              target='_blank'
              href='https://www.linkedin.com/in/venla-tuomala/'>
              <LinkedinIcon className='w-4 h-4 mr-2' />
              LinkedIn
            </Link>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "font-semibold tracking-wide text-2xl",
              })}
              target='_blank'
              href='mailto:venla.tuomala.business@gmail.com'>
              <MailIcon className='w-4 h-4 mr-2' />
              venla.tuomala.business@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-row md:text-xl items-center justify-center self-center text-muted-gray font-ibarra font-medium py-12'>
        <Copyright className='w-4 h-4 mr-1 md:mr-2' />
        {new Date().getFullYear()} Venla Tuomala
      </div>
    </>
  );
}
