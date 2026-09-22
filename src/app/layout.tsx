import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import MarkerWidget from "@/components/MarkerWidget";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zatil Group | African Craftsmanship. Musical Innovation.",
  description:
    "Zatil Group is an indigenous Nigerian musical instrument manufacturing and acoustic systems company based in Akure, Ondo State. Makers of handcrafted stringed instruments, bespoke church pipe-organ façades, audio speakers, and restoration services.",
  keywords: [
    "Musical instrument manufacturer Nigeria",
    "Church pipe organ installation Nigeria",
    "Handmade violins Nigeria",
    "Zatil Group",
    "Zatil Systems",
    "Acoustic pipe organ facades",
    "African tonewood violins",
    "Organ facade Cathedral Ozoro",
  ],
  authors: [{ name: "Zatil Group" }],
  icons: {
    icon: "/images/logo/zatil-logo.jpg",
    shortcut: "/images/logo/zatil-logo.jpg",
    apple: "/images/logo/zatil-logo.jpg",
  },
  openGraph: {
    title: "Zatil Group — Made in Nigeria. Built for Africa. Designed to Inspire.",
    description:
      "Crafting world-class musical instruments, pipe-organ façades, and acoustic infrastructure across Nigeria.",
    siteName: "Zatil Group",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${playfairDisplay.variable} font-sans antialiased bg-white text-neutral-900 selection:bg-[#F26522] selection:text-white`}
      >
        {children}
        <MarkerWidget />
      </body>
    </html>
  );
}
