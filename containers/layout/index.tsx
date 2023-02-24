import Head from "next/head";
import { useWindowSize } from "react-use";
import styled from "styled-components";
import Sidebar from "./sidebar";

const StyledLayout = styled.main`
  background-color: ${({ theme }) => theme.color.primaryLight};
  min-height: 100vh;
`;

function Layout(props: {
  children: React.ReactNode;
  title?: string;
  canonical?: string;
  description?: string;
  toggleSidebar?: () => void;
  showSidebar?: boolean;
}) {
  const {
    children,
    canonical = "/",
    title = "Adeola Ade",
    description = "Welcome to Adeola Ade's personal website. Frontend developer in London, United Kingdom",
    toggleSidebar,
    showSidebar,
  } = props;

  // To hide sidebar in case of window resize
  const { width } = useWindowSize();
  const image = `https://og-image.now.sh/${encodeURI(
    title
  )}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Fucarecdn.com%2F79dc47ef-1afc-4bcb-bb35-167d1bb8348b%2Fadeola.jpg`;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="author" content="Adeola Ade" />
        <meta name="keywords" content="Programmer, Freelance, Web developer" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@dihorla" />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:creator" content="@dihorla" />
        <title>{title}</title>
        <link rel="canonical" href={`https://adeolaade.com${canonical}`} />
      </Head>
      <StyledLayout>
        {children}
        {toggleSidebar && width <= 640 && (
          <Sidebar toggleSidebar={toggleSidebar} showSidebar={!!showSidebar} />
        )}
      </StyledLayout>
    </>
  );
}

export default Layout;
