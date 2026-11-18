import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mchopify | Delicious Meals, Easy Ordering",
  description:
    "Explore delicious Nigerian meals, browse our food menu, and conveniently place your order with Mchopify.",

  applicationName: "Mchopify",

  openGraph: {
    title: "Mchopify | Delicious Meals, Easy Ordering",
    description:
      "Discover delicious meals and enjoy a simple food ordering experience with Mchopify.",
    siteName: "Mchopify",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Mchopify | Delicious Meals, Easy Ordering",
    description:
      "Discover delicious meals and order your favourites with Mchopify.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
