import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nancy Musselman | Dallas Real Estate · Clancy Realty",
  description:
    "Nancy Musselman is a Dallas real estate agent, born and raised in DFW, with decades of professional experience. Born here. Built for this.",
  metadataBase: new URL("https://nancy-realestate.vercel.app"),
  openGraph: {
    title: "Nancy Musselman | Dallas Real Estate",
    description:
      "Born here. Built for this. A lifelong Dallasite helping you call it home.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} ${playfair.variable}`}>
      <body className="font-sans bg-warmWhite text-darkText">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
