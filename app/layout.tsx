import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nancy | Real Estate · Dallas, TX",
  description:
    "Nancy is a Dallas real estate advisor helping buyers and sellers navigate Highland Park, Preston Hollow, Lakewood, and beyond.",
  metadataBase: new URL("https://nancy-realestate.vercel.app"),
  openGraph: {
    title: "Nancy | Real Estate · Dallas, TX",
    description:
      "Your home journey, elevated. Personalized real estate service across Dallas–Fort Worth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans bg-warmWhite text-mediumText">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
