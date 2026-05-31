import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/languageContext";
import planet1 from "../assets/planetone (4).webp";
import planet2 from "../assets/planettwo (4).webp";
import stars from "../assets/planetthree (3).webp";

const Home = () => {
  const containerRef = useRef(null);
  const { language } = useLanguage();
  const planet1Ref = useRef(null);
  const planet2Ref = useRef(null);

  useEffect(() => {
    let ctx;
    import("gsap").then(({ gsap }) => {
      ctx = gsap.context(() => {
        gsap.fromTo(
          ".fade-in",
          { y: -40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.6, stagger: 0.25, ease: "power2.out" }
        );

        const floatPlanet = (ref, x, y) =>
          ref.current &&
          gsap.to(ref.current, {
            x,
            y,
            duration: 20,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
          });

        floatPlanet(planet1Ref, 100, -20);
        floatPlanet(planet2Ref, -80, 30);
      }, containerRef);
    });

    return () => ctx && ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      name="home"
      className="w-full h-screen relative overflow-hidden bg-black"
      id="home"
    >
      <Helmet>
        <title>
          {language === "hu"
            ? "Kovács Farkas Dávid – Full-Stack Developer"
            : "David Kovács Farkas – Full-Stack Developer"}
        </title>
        <meta
          name="description"
          content={
            language === "hu"
              ? "Webalkalmazás és mobilapp fejlesztés React, Node.js és React Native technológiákkal – KKV-knak és startupoknak."
              : "Web application and mobile app development with React, Node.js and React Native — for SMEs and startups."
          }
        />
        <meta
          name="keywords"
          content={
            language === "hu"
              ? "weboldal készítés, webshop készítés, mobil applikáció fejlesztés, reszponzív design, SEO, KFD Solutions"
              : "website creation, webshop development, mobile app development, responsive design, SEO, KFD Solutions"
          }
        />
        <meta
          property="og:title"
          content={
            language === "hu"
              ? "Kovács Farkas Dávid – Full-Stack Developer"
              : "David Kovács Farkas – Full-Stack Developer"
          }
        />
        <meta
          property="og:description"
          content={
            language === "hu"
              ? "Modern webalkalmazások és mobilappok – React, Node.js, React Native."
              : "Modern web applications and mobile apps — React, Node.js, React Native."
          }
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Star background */}
      <img
        src={stars}
        alt=""
        fetchpriority="high"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.18) 100%)",
        }}
      />

      {/* Floating planets */}
      <img
        ref={planet1Ref}
        src={planet1}
        alt=""
        fetchpriority="high"
        aria-hidden="true"
        className="absolute w-48 top-20 right-16 opacity-75 pointer-events-none select-none"
        style={{ willChange: "transform" }}
      />
      <img
        ref={planet2Ref}
        src={planet2}
        alt=""
        fetchpriority="high"
        aria-hidden="true"
        className="absolute w-28 bottom-28 right-8 opacity-60 pointer-events-none select-none"
        style={{ willChange: "transform" }}
      />

      {/* Hero content */}
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full relative z-10 gap-8 lg:gap-12 pt-[70px] pb-8">

        {/* Left: text */}
        <div className="flex flex-col max-w-[560px] w-full">

          {/* Available badge */}
          <div
            className="fade-in inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/60 mb-5 w-fit"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <span className="badge-dot w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
            {language === "hu" ? "Elérhető projektekre" : "Available for hire"}
          </div>

          {/* Name + title */}
          <div className="fade-in">
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
              Kovács Farkas Dávid
            </h1>
            <p
              className="text-base sm:text-xl font-semibold mt-2"
              style={{ color: "#4ea8ff" }}
            >
              Full-Stack Developer
            </p>
          </div>

          {/* Bio */}
          <p className="fade-in text-sm sm:text-base text-white/60 leading-relaxed mt-4 mb-6 max-w-[480px]">
            {language === "hu"
              ? "Webalkalmazásokat és mobilapplikációkat fejlesztek React, Node.js és React Native technológiákkal. Egyedi, skálázható megoldások KKV-knak és startupoknak – ha a WordPress már nem elég."
              : "I build web applications and mobile apps using React, Node.js, and React Native. Tailor-made, scalable solutions for SMEs and startups — when WordPress just isn't enough."}
          </p>

          {/* CTAs */}
          <div className="fade-in flex flex-wrap items-center gap-5">
            <Link href="contact" to="contact" smooth={true} duration={500}>
              <button className="button-33 text-base px-7 py-3">
                {language === "hu" ? "Ingyenes konzultáció" : "Free Consultation"}
              </button>
            </Link>
            <Link href="work" to="work" smooth={true} duration={500}>
              <span className="text-white/50 hover:text-white/90 text-sm font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1.5">
                {language === "hu" ? "Munkáim megtekintése" : "View my work"}
                <span>→</span>
              </span>
            </Link>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        className="scroll-indicator absolute bottom-7 left-1/2 hidden sm:block"
        style={{ zIndex: 10 }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white/35">
          <path d="M12 5v14M12 19l-5-5M12 19l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default Home;
