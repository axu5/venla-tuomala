import { i18nConfig } from "@/../../i18nConfig";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ProgressBar } from "@/components/ProgressBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TranslationsProvider } from "@/components/TranslationsProvider";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { dir } from "i18next";
import {
  Instagram,
  Linkedin,
  SquareArrowOutUpRight,
} from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import initTranslations, { Locale, LocaleParam } from "../i18n";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={cn(inter.className, GeistSans.variable)}>
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
            <div className='flex flex-col max-w-screen-xl mx-auto'>
              {/* Venlas big ass name */}
              <div className='flex items-center justify-center min-h-36'>
                <Link href='/'>
                  <h1 className='pt-serif-bold uppercase tracking-widest text-3xl'>
                    Venla Tuomala
                  </h1>
                </Link>
              </div>
              {/* Nav */}
              <div className='sticky top-5 z-10'>
                <nav className='border-t-2 bg-goldenish border-b-2 py-2 border-black'>
                  <ul className='flex flex-row justify-around items-center'>
                    <li className='uppercase text-2xl font-bold'>
                      <Link href='/#about'>{t("About")}</Link>
                    </li>
                    <li className='uppercase text-2xl font-bold'>
                      <Link href='/#portfolio'>{t("Portfolio")}</Link>
                    </li>
                    <li className='uppercase text-2xl font-bold'>
                      <Link href='/#contact'>{t("Contact")}</Link>
                    </li>
                    <li className=''>
                      <LanguageSwitcher />
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
      </body>
    </html>
  );
}

async function Footer({ locale }: { locale: Locale }) {
  const { t } = await initTranslations(locale, ["home", "common"]);
  return (
    <>
      {/* Footer */}
      <div className='flex flex-col md:flex-row py-24 '>
        <div className='md:w-[25%] border-t md:border-l md:border-b border-black flex justify-center items-center p-5'>
          <span className='pt-serif-bold text-3xl'>VT</span>
        </div>
        <div className='md:w-[25%] border-t md:border-l md:border-b border-black flex items-center p-5'>
          <ul>
            <li>
              <Link href='/#about'>{t("About me")}</Link>
            </li>
            <li>
              <Link href='/#portfolio'>{t("Portfolio")}</Link>
            </li>
            <li>
              <Link href='/#contact'>{t("Contact")}</Link>
            </li>
          </ul>
        </div>
        <div className='md:w-[25%] border-t md:border-l md:border-b border-black flex flex-col p-5'>
          <span className='text-xl'>{t("Socials")}</span>
          <div className='flex flex-col'>
            <Link
              className='flex flex-row items-center'
              target='_blank'
              href='https://www.instagram.com/tuomalavenla/'>
              {t("Send me a message on")}
              <Instagram className='h-4 w-4 ml-2' />
            </Link>
            <Link
              className='flex flex-row items-center'
              target='_blank'
              href='https://www.linkedin.com/in/venla-tuomala/'>
              {t("Connect with me on")}{" "}
              <Linkedin className='h-4 w-4 ml-2' />
            </Link>
          </div>
        </div>
        <div className='md:w-[25%] border-y md:border-x border-black flex flex-col p-5'>
          <span>&copy; {new Date().getFullYear()} Venla Tuomala</span>
          <Link
            className='flex flex-row items-center'
            target='_blank'
            href='https://github.com/axu5'>
            {t("Made by axu")}
            <SquareArrowOutUpRight className='h-4 w-4 ml-2' />
          </Link>
        </div>
      </div>
    </>
  );
}
