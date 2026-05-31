import { useEffect } from "react";
import { useLanguage } from "../context/languageContext";
import Designed from "../assets/designed (3).webp";
import Seo from "../assets/seo (3).webp";
import Maintenance from "../assets/maintenance (5).webp";
import Development from "../assets/development (3).webp";
const About = () => {
  const { language } = useLanguage();

  const cardContant = [
    {
      img: Designed,
      titleHu: "Egyedi dizájn és funkcionalitás",
      descHu: "Nem sablonokat használok – minden oldalt az adott projekt igényeire szabok. Az UI letisztult, modern és a célközönségedhez igazított, miközben a funkcionalitás pontosan azt nyújtja, amire szükséged van.",
      titleEn: "Unique Design & Functionality",
      descEn: "No templates — every site is built specifically for your project. Clean, modern UI tailored to your audience, with functionality that delivers exactly what you need.",
    },
    {
      img: Development,
      titleHu: "Gyors, reszponzív weboldalak",
      descHu: "Az oldalak optimalizált kóddal készülnek, hogy mobilon, tableten és asztali gépen egyaránt villámgyorsan töltődjenek. A lassú oldal látogatókat veszít – ez nálam nem fordul elő.",
      titleEn: "Fast, Responsive Websites",
      descEn: "Sites are built with optimised code to load fast on mobile, tablet and desktop. Slow sites lose visitors — that won't happen with me.",
    },
    {
      img: Seo,
      titleHu: "SEO-optimalizált kód",
      descHu: "A technikai SEO az alaptól épül be: szemantikus HTML, helyes meta adatok, gyors betöltés és strukturált tartalom. Segítek, hogy a Google megtalálja és előre sorolja az oldaladat.",
      titleEn: "SEO-Optimized Code",
      descEn: "Technical SEO is built in from the ground up: semantic HTML, correct meta tags, fast loading and structured content — so Google can find and rank your site.",
    },
    {
      img: Maintenance,
      titleHu: "Biztonság és karbantartás",
      descHu: "Az átadás nem a vége – igény esetén gondoskodom a folyamatos frissítésekről, hibajavításokról és a biztonságos üzemeltetésről, hogy az oldalad mindig megbízhatóan működjön.",
      titleEn: "Security & Maintenance",
      descEn: "Handover isn't the end — I can handle ongoing updates, bug fixes and secure operation so your site keeps running reliably.",
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
          gsap.fromTo(
            ".card2",
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".card2",
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            }
          );
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
              className="about-card card2 p-6 flex flex-col items-center w-full sm:w-[230px] md:w-[240px]"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
