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

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Layout
      toggleSidebar={() => setShowSidebar(!showSidebar)}
      showSidebar={showSidebar}
    >
      <NavBar toggleSidebar={() => setShowSidebar(!showSidebar)} />
      <LandingPage />
      <About />
      <Works />
      <Services />
      <Testimonials />
      <GetQuote />
      <Contact />
      <Footer />
      <div style={{ textAlign: "center", padding: 8 }}>
        Copyright © {new Date().getFullYear()}
      </div>
    </Layout>
  );
}
