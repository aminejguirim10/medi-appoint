import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeFooter from "@/components/layout/home-footer";
import HomeNavbar from "@/components/layout/home-navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      </body>
    </html>
  );
}
