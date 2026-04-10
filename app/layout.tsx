import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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

export const metadata: Metadata = {
  title: "Nancy Musselman | Dallas Real Estate · Beam Real Estate",
  description:
    "Nancy Musselman is a Dallas real estate agent with 50+ years in the DFW Metroplex and 22 years of professional experience. Born here. Built for this.",
  metadataBase: new URL("https://nancy-realestate.vercel.app"),
  openGraph: {
    title: "Nancy Musselman | Dallas Real Estate",
    description:
      "Born here. Built for this. 50+ years in Dallas, helping you call it home.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(cormorant.variable, jost.variable, "font-sans", geist.variable)}>
      <body className="font-sans bg-warmWhite text-mediumText">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
