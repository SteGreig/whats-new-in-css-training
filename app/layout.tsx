import type { Metadata } from "next";
import Providers from "./providers";
import localFont from "next/font/local";
import "./globals.css";

import SlideoutMenu from "./components/SlideoutMenu";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

const chaneyReg = localFont({
  src: "./fonts/CHANEY-Regular.otf",
  variable: "--font-chaney-reg",
  weight: "400",
});

const chaneyWide = localFont({
  src: "./fonts/CHANEY-Wide.otf",
  variable: "--font-chaney-wide",
  weight: "400",
});

const chaneyUltraExt = localFont({
  src: "./fonts/CHANEY-UltraExtended.otf",
  variable: "--font-chaney-reg-ultra-ext",
  weight: "400",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "What's New in CSS - Ste Greig",
  description: "A microsite all about the latest CSS features, created for a training session",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${chaneyReg.variable} ${chaneyWide.variable} ${chaneyUltraExt.variable} antialiased`}
      >
        <Providers>
        
          {children}

          <SlideoutMenu />

          <footer className="my-20 lg:my-6 flex justify-center">
            <p>Made by <a className="underline hover:bg-black hover:text-white transition" href="https://ste.digital/">Ste Greig</a></p>
          </footer>

          <ThemeSwitcher classes="fixed bottom-20 left-2 flex-col gap-2 hidden lg:flex" />
        </Providers>
      </body>
    </html>
  );
}
