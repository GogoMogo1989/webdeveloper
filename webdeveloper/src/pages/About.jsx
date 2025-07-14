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
      titleEn: "Unique Design and Functionality",
      descEn: "Every project is unique and tailored to you!",
      to: "/blog/686cf59aef084d2e899a8915#up",
    },
    {
      img: Development,
      titleHu: "Gyors, rezponzív weboldalak/appok",
      descHu: "Mobilon és asztali gépen is tökéletes az élmény!",
      titleEn: "Fast, Responsive Websites/Apps",
      descEn: "Perfect experience on mobile and desktop alike!",
      to: "/blog/686cf5d3ef084d2e899a8917#up",
    },
    {
      img: Seo,
      titleHu: "SEO-optimalizált kód",
      descHu: "Segítek, hogy a Google is megtalálja az oldaladat!",
      titleEn: "SEO-Optimized Code",
      descEn: "Helping Google find your site with ease!",
      to: "/blog/686cf600ef084d2e899a8919#up",
    },
    {
      img: Maintenance,
      titleHu: "Biztonság és karbantartás",
      descHu: "Az oldalad mindig naprakész és védett lesz!",
      titleEn: "Security and Maintenance",
      descEn: "Your site stays up-to-date and protected!",
      to: "blog/686cf648ef084d2e899a891c#up",
    },
  ];

  useEffect(() => {
    let ctx;

    // Dinamikus import
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapModule, ScrollTriggerModule]) => {
        const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
        const ScrollTrigger =
          ScrollTriggerModule.ScrollTrigger ||
          ScrollTriggerModule.default ||
          ScrollTriggerModule;

        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          gsap.utils.toArray(".card2").forEach((card, index) => {
            gsap.fromTo(
              card,
              { y: 80, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.2,
                stagger: 0.2,
                scrollTrigger: {
                  trigger: card,
                  start: "top 100%",
                  end: "top 50%",
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
      className="w-full h-[160vh] bg-white text-black flex flex-col justify-center items-center relative"
    >
      <div className="max-w-[100%] w-full text-center flex flex-col">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-black">
          {language === "hu" ? "Miért engem" : "Why choose me"}
        </h1>
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-[#1659c9]">
          {language === "hu" ? "válassz fejlesztőként?" : "as your developer?"}
        </h1>
        <p className="mx-auto text-xs sm:text-sm md:text-base lg:text-lg text-black py-4 max-w-[700px] font-bold text-center">
          {language === "hu"
            ? "A mai digitális világban a sablonmegoldások már kevesek – a sikerhez személyre szabott, egyedi webalkalmazásokra van szükség. Én ebben segítek."
            : "In today's digital world, template-based solutions are no longer enough — success requires custom, tailor-made web applications. That's where I come in."}
        </p>
      </div>

      <div className="flex justify-center items-center space-x-8 mt-10 w-full px-10">
        <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center">
          {cardContant.map((card, index) => (
            <div
              key={index}
              className="card card2 bg-white shadow-lg rounded-lg p-3 sm:p-4 flex flex-col items-center justify-between w-full sm:w-[30%] md:w-[22%] min-h-[250px] sm:min-h-[300px] hover:scale-105 duration-500"
            >
              <img
                src={card.img}
                alt={language === "hu" ? card.titleHu : card.titleEn}
                className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] mb-3"
              />
              <h1 className="text-base sm:text-lg font-semibold mb-1 text-center">
                {language === "hu" ? card.titleHu : card.titleEn}
              </h1>
              <p className="text-center text-gray-600 flex-grow text-xs sm:text-sm">
                {language === "hu" ? card.descHu : card.descEn}
              </p>
              <RouterLink to={card.to}>
                <button className="button-33 px-1 py-[2px] sm:px-4 sm:py-2 text-[10px] sm:text-sm">
                  {language === "hu" ? "Bővebben!" : "Learn more!"}
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
