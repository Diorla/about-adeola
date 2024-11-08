import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/local/FAQ";
import Header from "@/components/local/Header";
import Posts from "@/components/local/Posts";
import Footer from "@/components/local/Footer";
import FadeInWhenVisible from "@/components/home/FadeInWhenVisible";

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
  title: {
    default: "Home | Adeola",
    template: "%s | Adeola",
  },
  description: "Web developer in London",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  applicationName: "Adeola's Portfolio",
  authors: { name: "Adeola Adedotun", url: "https://adeolaade.com/" },
  creator: "Adeola Adedotun",
  publisher: "Adeola Adedotun",
  generator: "Next.js",
  keywords: [
    "Adeola",
    "Portfolio",
    "Web developer",
    "Web designer",
    "London",
    "United Kingdom",
  ],
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://adeolaade.com/",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Adeola",
    description: "Web developer in London",
    url: "https://adeolaade.com/",
    siteName: "Adeola's Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Adeola's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeola",
    description: "Web developer in London",
    creator: "@dihorla",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Adeola's Portfolio",
      },
    ],
  },
  appleWebApp: {
    title: "Adeola - Web developer",
    statusBarStyle: "black-translucent",
    startupImage: "/apple-touch-icon.png",
    capable: true,
  },
  classification: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <FAQ />
        <Posts />

        <FadeInWhenVisible>
          <section className="bg-primary text-primary-foreground py-12">
            <div className=" text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-6">
                Let&apos;s work together to bring your vision to life.
                Let&apos;s. build something amazing together. Ready to take your
                web presence to the next level? Let&apos;s collaborate and
                create something extraordinary.
              </p>
              <Button asChild variant="secondary">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </section>
        </FadeInWhenVisible>

        <Footer />
      </body>
    </html>
  );
}
