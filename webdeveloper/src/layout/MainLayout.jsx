import { Suspense, lazy, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = lazy(() => import("../components/Navbar"));
const Home = lazy(() => import("../pages/Home"));
const Services = lazy(() => import("../pages/Services"));
const About = lazy(() => import("../pages/About"));
const Skills = lazy(() => import("../pages/Skills"));
const Work = lazy(() => import("../pages/Work"));
const Contact = lazy(() => import("../pages/Contact"));
const Footer = lazy(() => import("../components/Footer"));
import SuspensePage from "../pages/Suspense";

function LazySections() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-17330617569";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "AW-17330617569");
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoad(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (!load) return null;

  return (
    <Suspense fallback={<SuspensePage />}>
      <Services />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </Suspense>
  );
}

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
      </Suspense>

      <LazySections />
    </div>
  );
}

export default MainLayout;
