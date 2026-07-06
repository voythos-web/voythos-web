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
      <head>
        {/* RB2B visitor identification snippet — must be a plain inline script in
            the <head> so it appears in the server-rendered HTML (RB2B's checker
            fetches raw HTML without executing JS). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(key){if(window.reb2b)return;window.reb2b={loaded:true};var s=document.createElement("script");s.async=true;s.src="https://ddwl4m2hdecbv.cloudfront.net/b/"+key+"/"+key+".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s,document.getElementsByTagName("script")[0]);}("EN4M0HLQKEOM");`,
          }}
        />
      </head>
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
