import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigations/Header";
import Footer from "@/components/navigations/Footer";
import CookiesModal from "@/components/modals/CookiesModal";

const AlbertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quality Projects People and Solutions (QPPS)",
  description:
    "Empowering people and institutions through digital transformation. We deliver innovative, secure, and user-friendly systems that drive transformation across South Africa.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="QPPS" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          href="https://fastly-cloud.typenetwork.com/projects/8622/fontface.css?6821d4df"
          rel="stylesheet"
          type="text/css"
        ></link>
      </head>
      <body className={`${AlbertSans.variable} antialiased relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
