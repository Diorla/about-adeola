import LandingPage from "containers/landing-page";
import Layout from "containers/layout";
import About from "containers/about";
import NavBar from "containers/nav-bar";
import Works from "containers/works";
import Services from "containers/services";
import Testimonials from "containers/testimonials";
import GetQuote from "containers/get-quote";
import Contact from "containers/contact";
import Footer from "containers/footer";
import { useState } from "react";
import Sidebar from "containers/sidebar";

import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { WorkProps } from "interfaces/WorkProps";
import { useWindowScroll } from "react-use";

export default function Home({ works }: { works: WorkProps[] }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [path, setPath] = useState("");
  const { y } = useWindowScroll();

  return (
    <Layout>
      <NavBar
        toggleSidebar={() => setShowSidebar(!showSidebar)}
        path={path}
        offset={y > 50}
      />
      <LandingPage setPath={setPath} />
      <About setPath={setPath} />
      <Works setPath={setPath} works={works} />
      <Services setPath={setPath} />
      <Testimonials setPath={setPath} path={path} />
      <GetQuote />
      <Contact setPath={setPath} />
      <Footer />
      <div style={{ textAlign: "center", padding: 8 }}>
        Copyright © {new Date().getFullYear()}
      </div>
      <Sidebar
        toggleSidebar={() => setShowSidebar(!showSidebar)}
        showSidebar={showSidebar}
        path={path}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = path.join(process.cwd(), "api/works.json");
  const result = fs.readFileSync(res, "utf8");
  const works: WorkProps[] = JSON.parse(result);

  return {
    props: {
      works,
    },
  };
};
