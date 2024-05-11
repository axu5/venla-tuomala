import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import {
  Instagram,
  Linkedin,
  SquareArrowOutUpRight,
} from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// TODO: SEO
export const metadata: Metadata = {
  title: "Venla Tuomala • Photographer",
  description: "Venla Tuomala is a photographer ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={cn(inter.className, GeistSans.variable)}>
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
            {children}
            {/* Footer */}
            <div className='flex flex-row py-24 '>
              <div className='w-[25%] border border-black flex justify-center items-center p-5'>
                <span className='pt-serif-bold text-3xl'>VT</span>
              </div>
              <div className='w-[25%] border border-black flex items-center p-5'>
                <ul>
                  <li>
                    <Link href='/#about'>About me</Link>
                  </li>
                  <li>
                    <Link href='/#portfolio'>Portfolio</Link>
                  </li>
                  <li>
                    <Link href='/#contact'>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className='w-[25%] border border-black flex flex-col p-5'>
                <span className='text-xl'>Socials</span>
                <div className='flex flex-col'>
                  <Link
                    className='flex flex-row items-center'
                    target='_blank'
                    href='https://www.instagram.com/tuomalavenla/'>
                    Send me a message on
                    <Instagram className='h-4 w-4 ml-2' />
                  </Link>
                  <Link
                    className='flex flex-row items-center'
                    target='_blank'
                    href='https://www.linkedin.com/in/venla-tuomala/'>
                    Connect with me on{" "}
                    <Linkedin className='h-4 w-4 ml-2' />
                  </Link>
                </div>
              </div>
              <div className='w-[25%] border border-black flex flex-col p-5'>
                <span>
                  &copy; {new Date().getFullYear()} Venla Tuomala
                </span>
                <Link
                  className='flex flex-row items-center'
                  target='_blank'
                  href='https://github.com/axu5'>
                  Made by axu{" "}
                  <SquareArrowOutUpRight className='h-4 w-4 ml-2' />
                </Link>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
