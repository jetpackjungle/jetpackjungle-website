import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
});

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-SRFK6J6Z3G";
const shouldEnableGoogleAnalytics =
  process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview";

export const metadata: Metadata = {
  metadataBase: new URL("https://v0-jetpackjungle.vercel.app"),
  title: "Jetpack Jungle | Video Production Agency",
  description: "We craft cinematic stories that move audiences",
  generator: "v0.app",
  openGraph: {
    title: "Jetpack Jungle | Video Production Agency",
    description: "We craft cinematic stories that move audiences",
    url: "https://v0-jetpackjungle.vercel.app",
    siteName: "Jetpack Jungle",
    type: "website",
    locale: "en_IE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jetpack Jungle — Cinematic Video Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jetpack Jungle | Video Production Agency",
    description: "We craft cinematic stories that move audiences",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {shouldEnableGoogleAnalytics && <GoogleAnalytics measurementId={googleAnalyticsId} />}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
