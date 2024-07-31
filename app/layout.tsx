import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeFooter from "@/components/layout/home-footer";
import HomeNavbar from "@/components/layout/home-navbar";
import { Toaster } from "@/components/ui/toaster";
import VercelAnalytics from "@/components/layout/vercelAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediAppoint",
  description: "MediAppoint is a platform for booking medical appointments.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${process.env.NEXT_URL}`,
    description: "MediAppoint is a platform for booking medical appointments.",
    siteName: "MediAppoint",
    images: [
      {
        url: `${process.env.NEXT_URL}/assets/og.png`,
        width: 1200,
        height: 630,
        alt: "MediAppoint",
      },
    ],
  },
  metadataBase: new URL(`${process.env.NEXT_URL}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeNavbar />
        {children}
        <HomeFooter />
        <Toaster />
        <VercelAnalytics />
      </body>
    </html>
  );
}
