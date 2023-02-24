import LandingPage from "containers/landing-page";
import Layout from "components/layout";
import About from "containers/about";
import NavBar from "containers/nav-bar";
import Works from "containers/works";
import Services from "containers/services";
import Testimonials from "containers/testimonials";
import GetQuote from "containers/get-quote";
import Contact from "containers/contact";
import Footer from "containers/footer";

export default function Home() {
  return (
    <Layout>
      <NavBar />
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
