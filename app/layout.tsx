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
  title: "Jetpack Jungle | Video Production Agency",
  description: "We craft cinematic stories that move audiences",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
