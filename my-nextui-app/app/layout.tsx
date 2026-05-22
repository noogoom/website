import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/image.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
        )}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div
            className="relative flex flex-col h-screen"
            style={{
              backgroundImage: "var(--decorative-gradient)",
            }}>
            <Navbar />
            <main className="container mt-16 mx-auto pt-16 px-6 flex-grow">
              {children}
            </main>
            <div>
              {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=HAGT_RgyE-71zT5o&amp;list=PLd4YajkcrhkFV30j6bcCQxptsOj0s_FEO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
