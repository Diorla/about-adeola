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

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [path, setPath] = useState("");

  return (
    <Layout>
      <NavBar toggleSidebar={() => setShowSidebar(!showSidebar)} path={path} />
      <LandingPage setPath={setPath} />
      <About setPath={setPath} />
      <Works setPath={setPath} />
      <Services setPath={setPath} />
      <Testimonials setPath={setPath} />
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
