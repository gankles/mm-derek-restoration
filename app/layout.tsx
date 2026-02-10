import type { Metadata } from "next";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { StickyMobileCTA } from "./components/CTAComponents";
import { LocalBusinessSchema, OrganizationSchema, PersonSchema } from "./components/SchemaMarkup";

const ToastProvider = dynamic(
  () => import("./components/ToastProvider"),
  { ssr: false }
);

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
  title: "M&M Restoration | 24/7 Emergency Damage Restoration in Mid-Michigan | Water, Fire, Mold & Storm Repair | Serving Lansing, East Lansing & 70+ Cities | IICRC Certified Since 2015",
  description: "Professional water damage restoration, fire damage cleanup, mold remediation, and emergency restoration services in Mid-Michigan. Serving Lansing, Okemos, East Lansing, Holt & surrounding areas. IICRC certified, 60-minute response time. Call (616) 648-7775 now!",
  keywords: "water damage restoration Mid-Michigan, fire damage cleanup, mold remediation, emergency restoration services, storm damage repair, biohazard cleanup, Greater Lansing Michigan, Mid-Michigan restoration",
  authors: [{ name: "M&M Restoration" }],
  creator: "M&M Restoration",
  publisher: "M&M Restoration",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://m-mrestoration.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "M&M Restoration | 24/7 Emergency Damage Restoration in Mid-Michigan",
    description: "Professional water damage restoration, fire damage cleanup, mold remediation, and emergency restoration services in Mid-Michigan. Serving Lansing, Okemos, East Lansing, Holt & surrounding areas. IICRC certified, 60-minute response time.",
    url: 'https://m-mrestoration.com',
    siteName: 'M&M Restoration',
    images: [
      {
        url: '/images/restoration-team-hero.png',
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
    title: "M&M Restoration | 24/7 Emergency Damage Restoration in Mid-Michigan",
    description: "Professional water damage restoration, fire damage cleanup, mold remediation, and emergency restoration services in Mid-Michigan. Serving Lansing, Okemos, East Lansing, Holt & surrounding areas. IICRC certified, 60-minute response time.",
    images: ['/images/restoration-team-hero.png'],
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
        <LocalBusinessSchema />
        <OrganizationSchema />
        <PersonSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ToastProvider />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-lg z-50">
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
