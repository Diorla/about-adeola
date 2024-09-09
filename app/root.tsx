import { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "tailwindcss";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

const description =
  "I am a web designer and developer based in London. I enjoy programming and creating things for the web or mobile devices. I'm committed to creating great experience through my work.";
export const meta: MetaFunction = () => {
  return [
    { title: "Adeola Ade | Web developer" },
    {
      property: "template",
      content: "portfolio",
    },
    {
      property: "description",
      content: description,
    },
    {
      property: "og:title",
      content: "Adeola Ade | Web developer",
    },
    {
      property: "og:url",
      content: "https://adeolaade.com",
    },
    {
      property: "og:image",
      content: "https://adeolaade.com/og.png",
      width: 1920,
      height: 1080,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:locale",
      content: "en-GB",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <Meta />
        <Links />
      </head>
      <body className={`bg-black`}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
