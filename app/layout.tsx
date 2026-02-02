import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const BASE_URL = 'https://flood-it-game-xi.vercel.app';

const fcMiniappEmbed = {
  version: '1' as const,
  imageUrl: `${BASE_URL}/hero-image.png`,
  button: {
    title: 'Play Flood It',
    action: {
      type: 'launch_frame' as const,
      name: 'Flood It',
      url: BASE_URL,
      splashImageUrl: `${BASE_URL}/splash.png`,
      splashBackgroundColor: '#0a0e27',
    },
  },
};

export const metadata: Metadata = {
  title: 'Flood It - Color Puzzle Game',
  description: 'Strategic color puzzle game - Fill the board with one color!',
  keywords: ['game', 'puzzle', 'flood it', 'colors', 'strategy'],
  authors: [{ name: 'Flood It Game' }],
  openGraph: {
    title: 'Flood It - Color Puzzle Game',
    description: 'Strategic color puzzle game - Fill the board with one color!',
    url: 'https://flood-it-game-xi.vercel.app',
    siteName: 'Flood It',
    images: [
      {
        url: '/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Flood It Game Preview'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flood It - Color Puzzle Game',
    description: 'Strategic color puzzle game - Fill the board with one color!',
    images: ['/hero-image.png']
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  },
  themeColor: '#0A0E27',
  manifest: '/.well-known/farcaster.json'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content="698078802aafa0bc9ad8a56d" />
        <meta name="fc:miniapp" content={JSON.stringify(fcMiniappEmbed)} />
        <meta name="fc:frame" content={JSON.stringify(fcMiniappEmbed)} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
