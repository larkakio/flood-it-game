import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://flood-it-game-xi.vercel.app";
const baseAppId =
  process.env.NEXT_PUBLIC_BASE_APP_ID ?? "698078802aafa0bc9ad8a56d";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Flood It - Color Puzzle Game",
  description: "Strategic color puzzle game - Fill the board with one color!",
  keywords: ["game", "puzzle", "flood it", "colors", "strategy"],
  authors: [{ name: "Flood It Game" }],
  icons: { icon: "/icon.png" },
  openGraph: {
    title: "Flood It - Color Puzzle Game",
    description: "Strategic color puzzle game - Fill the board with one color!",
    url: siteUrl,
    siteName: "Flood It",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Flood It Game Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flood It - Color Puzzle Game",
    description: "Strategic color puzzle game - Fill the board with one color!",
    images: ["/hero-image.png"],
  },
  other: {
    "base:app_id": baseAppId,
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0E27",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
