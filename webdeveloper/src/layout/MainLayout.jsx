import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("../components/Navbar"));
const Home = lazy(() => import("../pages/Home"));
const Services = lazy(() => import("../pages/Services"));
const About = lazy(() => import("../pages/About"));
const Skills = lazy(() => import("../pages/Skills"));
const Work = lazy(() => import("../pages/Work"));
const Contact = lazy(() => import("../pages/Contact"));
const Footer = lazy(() => import("../components/Footer"));
import SuspensePage from "../pages/Suspense";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function MainLayout() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }, [hash]);

  return (
    <div id="up">
      <Suspense fallback={<SuspensePage />}>
        <Navbar />
        <Home />
        <Services />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default MainLayout;
