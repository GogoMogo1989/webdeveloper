import { useEffect } from "react";
import { useLanguage } from "../context/languageContext";
import Designed from "../assets/designed (3).webp";
import Seo from "../assets/seo (3).webp";
import Maintenance from "../assets/maintenance (5).webp";
import Development from "../assets/development (3).webp";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  const { language } = useLanguage();

  const cardContant = [
    {
      img: Designed,
      titleHu: "Egyedi dizájn és funkcionalitás",
      descHu: "Minden projekt egyedi és személyre szabott!",
      titleEn: "Unique Design & Functionality",
      descEn: "Every project is unique and tailored to you!",
      to: "/blog/686cf59aef084d2e899a8915#up",
    },
    {
      img: Development,
      titleHu: "Gyors, reszponzív weboldalak",
      descHu: "Mobilon és asztali gépen is tökéletes az élmény!",
      titleEn: "Fast, Responsive Websites",
      descEn: "Perfect experience on mobile and desktop alike!",
      to: "/blog/686cf5d3ef084d2e899a8917#up",
    },
    {
      img: Seo,
      titleHu: "SEO-optimalizált kód",
      descHu: "Segítek, hogy a Google is megtalálja az oldaladat!",
      titleEn: "SEO-Optimized Code",
      descEn: "I help Google find your site with ease!",
      to: "/blog/686cf600ef084d2e899a8919#up",
    },
    {
      img: Maintenance,
      titleHu: "Biztonság és karbantartás",
      descHu: "Az oldalad mindig naprakész és védett lesz!",
      titleEn: "Security & Maintenance",
      descEn: "Your site stays up-to-date and protected!",
      to: "blog/686cf648ef084d2e899a891c#up",
    },
  ];

  useEffect(() => {
    let ctx;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapModule, ScrollTriggerModule]) => {
        const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
        const ScrollTrigger =
          ScrollTriggerModule.ScrollTrigger ||
          ScrollTriggerModule.default ||
          ScrollTriggerModule;

        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          gsap.utils.toArray(".card2").forEach((card) => {
            gsap.fromTo(
              card,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                  trigger: card,
                  start: "top 95%",
                  end: "top 60%",
                  scrub: true,
                  markers: false,
                },
              }
            );
          });
        });
      }
    );

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div
      name="about"
      id="about-section"
      className="w-full min-h-screen py-28 bg-white text-black flex flex-col justify-center items-center relative"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1659c9 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative w-full text-center flex flex-col px-6 mb-14">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black leading-tight">
          {language === "hu" ? "Miért engem" : "Why choose me"}
        </h1>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight" style={{ color: "#1659c9" }}>
          {language === "hu" ? "válassz fejlesztőként?" : "as your developer?"}
        </h1>
        <p className="mx-auto text-sm sm:text-base text-gray-500 py-5 max-w-[600px] leading-relaxed">
          {language === "hu"
            ? "A mai digitális világban a sablonmegoldások már kevesek – a sikerhez személyre szabott webalkalmazásokra van szükség."
            : "In today's digital world, template solutions are no longer enough — success requires custom, tailor-made web applications."}
        </p>
      </div>

      <div className="relative flex justify-center items-center w-full px-6">
        <div className="grid grid-cols-2 gap-5 sm:flex sm:flex-wrap sm:justify-center sm:gap-6">
          {cardContant.map((card, index) => (
            <div
              key={index}
              className="about-card card2 p-6 flex flex-col items-center justify-between w-full sm:w-[220px] md:w-[230px] min-h-[280px]"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 flex-shrink-0"
                style={{ background: "rgba(22, 89, 201, 0.07)" }}
              >
                <img
                  src={card.img}
                  alt={language === "hu" ? card.titleHu : card.titleEn}
                  className="w-9 h-9 object-contain"
                />
              </div>
              <h2 className="text-base font-semibold mb-2 text-center text-gray-900 leading-snug">
                {language === "hu" ? card.titleHu : card.titleEn}
              </h2>
              <p className="text-center text-gray-500 flex-grow text-sm leading-relaxed">
                {language === "hu" ? card.descHu : card.descEn}
              </p>
              <RouterLink to={card.to} className="mt-5 w-full">
                <button className="button-33 w-full text-sm py-2 px-3">
                  {language === "hu" ? "Bővebben" : "Learn more"}
                </button>
              </RouterLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
