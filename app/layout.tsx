import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FAQ from "@/container/FAQ";
import { Menu } from "lucide-react";

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
        <header className="sticky top-0 z-50 w-full bg-white">
          <div className="flex h-14 items-center justify-between">
            <div className="mr-4 hidden sm:flex">
              <Link className="ml-2 flex items-center space-x-2" href="/">
                <Image
                  className="dark:invert"
                  src="/brand.png"
                  alt="Adeola logo"
                  height={50}
                  width={75}
                  priority
                />
              </Link>
            </div>
            <div className="mr-4 sm:hidden flex">
              <Link className="ml-2 flex items-center space-x-2" href="/">
                <Image
                  className="dark:invert"
                  src="/favicon.svg"
                  alt="Adeola logo"
                  height={50}
                  width={75}
                  priority
                />
              </Link>
            </div>
            <nav className=" hidden sm:flex items-center space-x-6 text-sm font-medium">
              <Link
                className="transition-colors hover:text-foreground/100 text-foreground/80"
                href="/about"
              >
                About
              </Link>
              <Link
                className="transition-colors hover:text-foreground/100 text-foreground/80"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="transition-colors hover:text-foreground/100 text-foreground/80"
                href="/services"
              >
                Services
              </Link>
              <Link
                className="transition-colors hover:text-foreground/100 text-foreground/80"
                href="/journal"
              >
                Journal
              </Link>
            </nav>
            <div className="hidden sm:flex items-center space-x-2 md:justify-end mr-2">
              <Button asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
            <div className="sm:hidden flex">
              <Button size="lg" asChild variant="ghost">
                <Menu size={96} />
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <section className="bg-muted py-12 px-6">
          <div className="">
            <h2 className="text-2xl font-bold mb-6">FAQ</h2>
            <FAQ />
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="">
            <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">My Latest Project</h3>
                  <p className="text-sm text-muted-foreground">
                    A deep dive into my most recent web application...
                  </p>
                  <Link
                    className="text-sm text-primary hover:underline mt-4 inline-block"
                    href="/blog/latest-project"
                  >
                    Read more
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">
                    The Future of Web Dev
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Exploring upcoming trends in web development...
                  </p>
                  <Link
                    className="text-sm text-primary hover:underline mt-4 inline-block"
                    href="/blog/future-of-web-dev"
                  >
                    Read more
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">
                    Optimizing React Apps
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Tips and tricks for better React performance...
                  </p>
                  <Link
                    className="text-sm text-primary hover:underline mt-4 inline-block"
                    href="/blog/optimizing-react-apps"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-12">
          <div className=" text-center">
            <h2 className="text-3xl font-bold mb-4">
              Let&apos;s build something amazing together
            </h2>
            <p className="text-xl mb-6">
              Ready to take your web presence to the next level? Let&apos;s
              collaborate and create something extraordinary.
            </p>
            <Button asChild variant="secondary">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </section>

        <footer className="bg-gray-100 text-gray-600 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">About Me</h3>
                <p className="text-sm">
                  I&apos;m Adeola, a passionate web developer specializing in
                  creating modern, responsive, and user-friendly websites. With
                  a keen eye for design and a love for clean code, I bring ideas
                  to life in the digital realm.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Current Projects</h3>
                <ul className="text-sm space-y-2">
                  <li>
                    <a
                      href="https://cloudmarkk.web.app/"
                      className="hover:text-primary"
                      target="_blank"
                    >
                      Cloudmark
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://focus-forge.adeolaade.com/"
                      className="hover:text-primary"
                      target="_blank"
                    >
                      Focus forge
                    </a>
                  </li>
                  {/*
                  <li>AI-Powered Chatbot Integration</li>
                  <li>Portfolio Website (You&apos;re looking at it!)</li> */}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Navigation</h3>
                <nav>
                  <ul className="text-sm space-y-2">
                    <li>
                      <Link href="/about" className="hover:text-primary">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects" className="hover:text-primary">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="hover:text-primary">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/journal" className="hover:text-primary">
                        Journal
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-primary">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Reach Out</h3>
                <ul className="text-sm space-y-2">
                  <li>
                    <a
                      href="https://github.com/Diorla"
                      className="hover:text-primary"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ade-adeola/"
                      className="hover:text-primary"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/dihorla"
                      className="hover:text-primary"
                      target="_blank"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dribbble.com/diorla"
                      className="hover:text-primary"
                      target="_blank"
                    >
                      Dribbble
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/adeolaade"
                      className="hover:text-primary"
                      target="_blank"
                    >
                      Behance
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Services</h3>
                <ul className="text-sm space-y-2">
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>Mobile App Development</li>
                  <li>E-commerce Solutions</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-sm">Made with ❤️ by Adeola</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
