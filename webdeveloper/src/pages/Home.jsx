import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/languageContext";
import planet1 from "../assets/planetone.webp";
import planet2 from "../assets/planettwo.webp";
import stars from "../assets/planetthree.webp";
import { useGSAP } from "@gsap/react";
import video from "../assets/howtousecannon.mp4";

const Home = () => {
  const containerRef = useRef(null);
  const cannonRef = useRef(null);
  const { language } = useLanguage();
  const planet1Ref = useRef(null);
  const planet2Ref = useRef(null);
  const planet1Tween = useRef(null);
  const planet2Tween = useRef(null);
  const [showBubble, setShowBubble] = useState(false);
  const bubbleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-in", {
        y: -50,
        opacity: 0,
        duration: 2,
        stagger: 0.4,
        force3D: true,
      });

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

      planet1Tween.current = floatPlanet(planet1Ref, 100, -20);
      planet2Tween.current = floatPlanet(planet2Ref, -80, 30);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!cannonRef.current) return;

    gsap.set(cannonRef.current, { rotation: 0 });

    const aim = (x, y) => {
      const rect = cannonRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const angle = (Math.atan2(y - cy, x - cx) * 180) / Math.PI + 90;
      gsap.set(cannonRef.current, { rotation: angle });
    };

    const onMouseMove = (e) => aim(e.clientX, e.clientY);
    const onTouchMove = (e) => aim(e.touches[0].clientX, e.touches[0].clientY);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  const handleFire = () => {
    if (!cannonRef.current || !containerRef.current) return;

    const rotationDeg = parseFloat(
      gsap.getProperty(cannonRef.current, "rotation")
    );
    const angleRad = ((rotationDeg - 90) * Math.PI) / 180;

    const cannonRect = cannonRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const startX = cannonRect.left + cannonRect.width / 2 - containerRect.left;
    const startY = cannonRect.top + cannonRect.height / 2 - containerRect.top;

    const bullet = document.createElement("div");
    Object.assign(bullet.style, {
      position: "absolute",
      left: `${startX}px`,
      top: `${startY}px`,
      width: "12px",
      height: "12px",
      backgroundColor: "white",
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: "1000",
      boxShadow: "0 0 10px 5px rgba(255, 0, 0, 0.7)",
      transform: "translate(-50%, -50%)",
    });
    containerRef.current.appendChild(bullet);

    const distance = 2000;
    const endX = startX + Math.cos(angleRad) * distance;
    const endY = startY + Math.sin(angleRad) * distance;

    const checkHit = () => {
      const bulletRect = bullet.getBoundingClientRect();
      const bulletCenter = {
        x: bulletRect.left + bulletRect.width / 2,
        y: bulletRect.top + bulletRect.height / 2,
      };

      [planet1Ref.current, planet2Ref.current].forEach((planet) => {
        if (!planet || planet.style.display === "none") return;

        const planetRect = planet.getBoundingClientRect();
        const planetCenter = {
          x: planetRect.left + planetRect.width / 2,
          y: planetRect.top + planetRect.height / 2,
        };

        const dist = Math.sqrt(
          Math.pow(bulletCenter.x - planetCenter.x, 2) +
            Math.pow(bulletCenter.y - planetCenter.y, 2)
        );

        if (dist < planetRect.width / 2) {
          gsap.to(planet, {
            x: "+=" + Math.cos(angleRad) * 100,
            y: "+=" + Math.sin(angleRad) * 100,
            scale: 0.2,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
              planet.style.display = "none";

              setTimeout(() => {
                planet.style.display = "block";
                gsap.fromTo(
                  planet,
                  { opacity: 0, scale: 0.5 },
                  {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "elastic.out(1, 0.5)",
                  }
                );
              }, 3000);
            },
          });
          bullet.remove();
        }
      });
    };

    gsap.to(bullet, {
      left: endX,
      top: endY,
      duration: 1.2,
      ease: "power1.in",
      onUpdate: checkHit,
      onComplete: () => {
        if (bullet.parentNode) bullet.remove();
      },
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (showBubble && bubbleRef.current) {
      gsap.fromTo(
        bubbleRef.current,
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [showBubble]);

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

      <img
        src={stars}
        alt="Stars"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      <img
        ref={planet1Ref}
        src={planet1}
        alt="Planet 1"
        className="absolute w-48 top-20 left-10 cursor-grab active:cursor-grabbing"
        style={{ willChange: "transform", touchAction: "none" }}
      />
      <img
        ref={planet2Ref}
        src={planet2}
        alt="Planet 2"
        className="absolute w-32 bottom-60 right-20 cursor-grab active:cursor-grabbing"
        style={{ willChange: "transform", touchAction: "none" }}
      />

      <svg
        ref={cannonRef}
        onClick={handleFire}
        viewBox="0 0 100 100"
        className="cannon"
      >
        <circle cx="50" cy="50" r="30" fill="#444" />
        <rect x="45" y="5" width="10" height="45" rx="3" fill="#888" />
      </svg>

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative">
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
      {showBubble && (
        <div
          ref={bubbleRef}
          role="alert"
          className="fixed bg-[#1a1919] shadow-lg rounded-xl px-6 py-5 max-w-xs z-[1000]"
          style={{ right: "1rem", bottom: "6rem" }}
        >
          <button
            onClick={() => setShowBubble(false)}
            className="absolute cursor-pointer top-2 right-2 text-white hover:text-gray-400 text-xl font-bold focus:outline-none"
            aria-label={language === "hu" ? "Bezárás" : "Close"}
          >
            ×
          </button>
          <video
            width="100%"
            height="200"
            autoPlay
            muted
            onEnded={() => setShowBubble(false)}
            className="rounded-lg mb-3"
          >
            <source src={video} type="video/mp4" />
            {language === "hu"
              ? "A böngésződ nem támogatja a videót"
              : "Your browser does not support the video tag"}
          </video>

          <p className="text-white text-sm mt-2 text-center">
            {language === "hu"
              ? "Találd el a mozgó bolygókat!"
              : "Hit the mooving planets!"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
