import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet-async";
import videoBackground from "../assets/background.mp4";

const Home = () => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-in", {
        y: -50,
        opacity: 0,
        duration: 2,
        stagger: 0.4,
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div name="home" className="w-full h-[100vh] relative">
      <Helmet>
        <title>KFD Solutions - Egyedi Weboldalak és Mobilalkalmazások</title>
        <meta
          name="description"
          content="Egyedi weboldalak és mobilalkalmazások fejlesztése kis- és középvállalkozások számára. SEO-barát, gyors és reszponzív megoldások."
        />
        <meta
          name="keywords"
          content="weboldal készítés, mobil applikáció fejlesztés, reszponzív design, egyedi honlap, webáruház fejlesztés, SEO, gyors weboldal, KFD Solutions, kfdsolutions.hu, kfdsolutions, applikáció, fejlesztés, web, weblap, weboldal, készítés"
        />
        <meta
          property="og:title"
          content="KFD Solutions - Profi Weboldalak és Applikációk"
        />
        <meta
          property="og:description"
          content="Modern és gyors weboldalak, mobilalkalmazások kis- és középvállalkozásoknak. Egyedi megoldások és SEO-optimalizált fejlesztés."
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
          Üdvözlünk a KFD Solutions-nál!
        </h1>
        <p className="fade-in text-xs sm:text-sm md:text-base lg:text-lg text-white py-4 max-w-[700px] font-bold">
          Professzionális weboldalak és mobilalkalmazások fejlesztése gyors és
          hatékony megoldásokkal!
        </p>

        <Link to="contact" smooth={true} duration={500}>
          <button className="button-33 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-xl">
            Kérj ajánlatot most!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
