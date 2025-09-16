import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
// import { inter, plusJakartaSans } from '../../public/fonts/fonts';
// import Header from '@/components/Header';

export const metadata: Metadata = {
  title: `Spot'd`,
  description: 'We are connecting creatives, influencers and brands.',

  // ✅ Open Graph
  openGraph: {
    title: "Spot'd – Game Changer",
    description:
      'Connecting creatives, influencers, and brands like never before.',
    url: 'https://www.bespotd.com/', // your site url
    siteName: "Spot'd",
    images: [
      {
        url: 'https://i.ibb.co/ZR4d9p37/header.jpg', // should be absolute in production e.g. https://spotd.com/og-image.png
        width: 1200,
        height: 630,
        alt: "Spot'd Preview",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // ✅ Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Spot'd – Game Changer",
    description:
      'Connecting creatives, influencers, and brands like never before.',
    images: ['https://i.ibb.co/ZR4d9p37/header.jpg'],
    creator: 'https://x.com/SpotD_CBI',
  },

  // ✅ Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="">
        <NavBar />
        <div className="pt-[100px] lg:pt-[140px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
