import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  icons: {
    icon: "/vt_favicon.png",
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
