import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Flood It - Color Puzzle Game',
  description: 'Strategic color puzzle game - Fill the board with one color!',
  keywords: ['game', 'puzzle', 'flood it', 'colors', 'strategy'],
  authors: [{ name: 'Flood It Game' }],
  openGraph: {
    title: 'Flood It - Color Puzzle Game',
    description: 'Strategic color puzzle game - Fill the board with one color!',
    url: 'https://your-domain.vercel.app',
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
