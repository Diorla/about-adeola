import { Inknut_Antiqua } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

const inknut = Inknut_Antiqua({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const description =
  "I am a web designer and developer based in London. I enjoy programming and creating things for the web or mobile devices. I'm committed to creating great experience through my work.";
export const metadata: Metadata = {
  title: {
    default: "Adeola Ade",
    template: "%s | adeolaade.com",
  },
  description,
  openGraph: {
    title: "Adeola Adedotun",
    description,
    url: "https://adeolaade.com",
    siteName: "adeolaade.com",
    images: [
      {
        url: "https://adeolaade.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "adeola",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inknut.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`bg-slate-950 ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <Image
          src="/moon.gif"
          alt="rotating moon"
          className="absolute inset-0 z-10 h-10 w-10 right-10 top-10 opacity-60 rotate-earth rounded-full"
          width={40}
          height={40}
        />
        <div className="z-1">{children}</div>
      </body>
    </html>
  );
}
