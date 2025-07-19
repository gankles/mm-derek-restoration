import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { StickyMobileCTA } from "./components/CTAComponents";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "M&M Restoration | 24/7 Emergency Damage Restoration in Lansing, MI",
  description: "Professional water damage restoration, fire damage cleanup, mold remediation, and emergency restoration services in the Greater Lansing Area. IICRC certified, 60-minute response time. Call (616) 648-7775 now!",
  keywords: "water damage restoration Lansing MI, fire damage cleanup, mold remediation, emergency restoration services, storm damage repair, biohazard cleanup, Greater Lansing Michigan",
  authors: [{ name: "M&M Restoration" }],
  creator: "M&M Restoration",
  publisher: "M&M Restoration",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mm-restoration.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "M&M Restoration | 24/7 Emergency Damage Restoration in Lansing, MI",
    description: "Professional water damage restoration, fire damage cleanup, mold remediation, and emergency restoration services in the Greater Lansing Area. IICRC certified, 60-minute response time.",
    url: 'https://mm-restoration.com',
    siteName: 'M&M Restoration',
    images: [
      {
        url: '/images/goldeneyed_a_team_of_restoration_technicians_cleaning_up_water__41dd225b-df4d-49ca-b645-26f8fc8361d6.png',
        width: 1200,
        height: 630,
        alt: 'M&M Restoration team providing professional damage restoration services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "M&M Restoration | 24/7 Emergency Damage Restoration in Lansing, MI",
    description: "Professional water damage restoration, fire damage cleanup, mold remediation, and emergency restoration services in the Greater Lansing Area. IICRC certified, 60-minute response time.",
    images: ['/images/goldeneyed_a_team_of_restoration_technicians_cleaning_up_water__41dd225b-df4d-49ca-b645-26f8fc8361d6.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#059669" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
