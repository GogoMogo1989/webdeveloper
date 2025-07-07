import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet-async";
import videoBackground from "../assets/background.mp4";
import { useLanguage } from "../context/languageContext";

const Home = () => {
  const containerRef = useRef();
  const { language } = useLanguage();

  useEffect(() => {
    if (window.innerWidth > 768) {
      const ctx = gsap.context(() => {
        gsap.from(".fade-in", {
          y: -50,
          opacity: 0,
          duration: 2,
          stagger: 0.4,
          force3D: true,
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div name="home" className="w-full h-[100vh] relative">
      <Helmet>
        <title>
          {language === "hu"
            ? "KFD Solutions - Egyedi Weboldalak és Mobilalkalmazások"
            : "KFD Solutions - Custom Websites and Mobile Applications"}
        </title>
        <meta
          name="description"
          content={
            language === "hu"
              ? "Egyedi weboldalak és mobilalkalmazások fejlesztése kis- és középvállalkozások számára. SEO-barát, gyors és reszponzív megoldások."
              : "Custom website and mobile app development for small and medium businesses. SEO-friendly, fast, and responsive solutions."
          }
        />
        <meta
          name="keywords"
          content={
            language === "hu"
              ? "weboldal készítés, webshop készítés, webáruház készítés, mobil applikáció fejlesztés, reszponzív design, egyedi honlap, webáruház fejlesztés, SEO, gyors weboldal, KFD Solutions, kfdsolutions.hu, kfdsolutions, applikáció, fejlesztés, web, weblap, weboldal, készítés"
              : "website creation, webshop development, e-commerce, mobile app development, responsive design, custom site, SEO, fast website, KFD Solutions"
          }
        />
        <meta
          property="og:title"
          content={
            language === "hu"
              ? "KFD Solutions - Profi Weboldalak és Applikációk"
              : "KFD Solutions - Professional Websites and Apps"
          }
        />
        <meta
          property="og:description"
          content={
            language === "hu"
              ? "Modern és gyors weboldalak, mobilalkalmazások kis- és középvállalkozásoknak. Egyedi megoldások és SEO-optimalizált fejlesztés."
              : "Modern and fast websites and mobile apps for small and medium businesses. Custom solutions and SEO-optimized development."
          }
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoBackground} type="video/mp4" />
        Böngésződ nem támogatja a videó lejátszását.
      </video>

      <div
        ref={containerRef}
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative"
      >
        <h1 className="fade-in text-2xl sm:text-5xl md:text-6xl font-bold text-white">
          {language === "hu"
            ? "Üdvözlünk a KFD Solutions-nál!"
            : "Welcome to KFD Solutions!"}
        </h1>
        <p className="fade-in text-xs sm:text-sm md:text-base lg:text-lg text-white py-4 max-w-[700px] font-bold">
          {language === "hu"
            ? "Professzionális weboldalak, webáruházak és mobilalkalmazások fejlesztése gyors és hatékony megoldásokkal!"
            : "Professional website, webshop, and mobile app development with fast and efficient solutions!"}
        </p>

        <Link to="contact" smooth={true} duration={500}>
          <button className="button-33 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-xl">
            {language === "hu"
              ? "Kérj ajánlatot most!"
              : "Request a Quote Now!"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
