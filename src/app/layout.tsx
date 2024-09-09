import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import "./globals.css";

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
    shortcut: "./public/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
