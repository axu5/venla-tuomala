import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  icons: {
    icon: "/Logo.webp",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
