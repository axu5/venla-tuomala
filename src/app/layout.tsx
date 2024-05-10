import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";

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
    <html lang='en'>
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
              <h1 className='pt-serif-bold uppercase tracking-widest text-3xl'>
                Venla Tuomala
              </h1>
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
