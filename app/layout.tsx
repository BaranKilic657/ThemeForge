import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DynamicHeader from "@/components/dynamicheader";
import DynamicFooter from "@/components/dynamicfooter";
import HeaderSwitcher from "@/components/headerswitcher";
import PageSwitcher from "@/components/pageswitcher";
import ThemeSwitcher from "@/components/themeswitcher";
import FooterSwitcher from "@/components/footerswitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThemeForge",
  description:
    "ThemeForge is an interactive component showcase that lets designers and developers instantly preview different design combinations without touching a single line of code. Switch between 37+ themes, 15+ header styles, and multiple footer variations with the click of a button.",

  openGraph: {
    title: "ThemeForge",
    description:
      "Instantly preview 37+ themes, 15+ headers, and multiple footers — no code required.",
    url: "https://theme-forge-nine.vercel.app/",
    siteName: "ThemeForge",
    images: [
      {
        url: "https://theme-forge-nine.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "ThemeForge Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ThemeForge",
    description:
      "Preview 37+ themes and design variations instantly — no code required.",
    images: ["https://theme-forge-nine.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DynamicHeader />
        <HeaderSwitcher />
        <PageSwitcher />
        <ThemeSwitcher />
        <FooterSwitcher />
        {children}
        <DynamicFooter />
        {/* <footer className="py-8 text-center text-sm text-muted border-t border-base">
          Designed with ❤️ by your Theme Architect.
        </footer> */}
      </body>
    </html>
  );
}
