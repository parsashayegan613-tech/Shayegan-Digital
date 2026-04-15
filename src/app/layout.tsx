import type { Metadata } from "next";
import { Playfair_Display, Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Shayegan Digital — Edmonton Web Agency",
  description:
    "Fast, beautiful, AI-powered digital experiences for businesses that want to stand out and grow. Custom web development, digital marketing, and brand identity in Edmonton, AB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${syne.variable} ${dmMono.variable}`}
    >
      <body className="font-[family-name:var(--font-syne)]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
