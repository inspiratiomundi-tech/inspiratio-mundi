import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fundacja Inspiratio Mundi",
  description:
    "Fundacja na rzecz nauki, oświaty, kultury, ochrony środowiska i inicjatyw społecznych. Wrocław, est. 2024.",
};

export const viewport = {
  themeColor: "#FAF6EC",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${ebGaramond.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
