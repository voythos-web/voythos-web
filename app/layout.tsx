import type { Metadata } from "next";
import "./globals.css";

import { font_body } from "./fonts";
import Navbar from "./components/nav/Navbar";

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
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
