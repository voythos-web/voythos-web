import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { font_body } from "./fonts";
import { ConditionalNavbar, ConditionalFooter } from "./components/ConditionalChrome";

export const metadata: Metadata = {
  title: "Voythos | Transforming the delivery of aortic care.",
  description: "Transforming the delivery of aortic care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font_body.className}
      >
        <ConditionalNavbar />
        {children}
        <ConditionalFooter />
        <Analytics />
      </body>
    </html>
  );
}
