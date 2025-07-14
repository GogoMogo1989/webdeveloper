import { useRef, useEffect } from "react";
/* import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"; */
import { useLanguage } from "../context/languageContext";

/* gsap.registerPlugin(ScrollTrigger, SplitText); */

export default function Services() {
  const containerRef = useRef(null);
  const { language } = useLanguage();

  const services = [
    {
      titleHu: "Webalkalmazás-fejlesztés",
      descHu:
        "Egyedi webalkalmazások tervezése és fejlesztése különleges vállalati igényekre szabva. Modern dizájn, reszponzív kialakítás, gyors működés és skálázható megoldások – mindezt a felhasználói élményre optimalizálva.",
      titleEn: "Web Application Development",
      descEn:
        "Designing and developing custom web applications tailored to specific business needs. Modern design, responsive layout, fast performance, and scalable solutions – all optimized for a seamless user experience.",
    },

    {
      titleHu: "Mobilapplikáció fejlesztés-",
      descHu:
        "Android és iOS alkalmazások fejlesztése modern technológiával, natív és cross-platform megoldásokkal. Gyors, stabil és skálázható mobilalkalmazások, amelyek megfelelnek a legújabb UI/UX trendeknek.",
      titleEn: "Mobile App Development-",
      descEn:
        "Developing Android and iOS apps using modern technology, with native and cross-platform solutions. Fast, stable, and scalable mobile applications that meet the latest UI/UX trends.",
    },
    {
      titleHu: "SEO és teljesítményoptimalizálás-",
      descHu:
        "Jobb helyezés a Google keresési találatai között, gyorsabb betöltési idők és hatékonyabb felhasználói élmény. Keresőoptimalizált tartalmak, mobilbarát megoldások és sebességoptimalizálás.",
      titleEn: "SEO and Performance Optimization-",
      descEn:
        "Better ranking in Google search results, faster load times, and more effective user experience. SEO-optimized content, mobile-friendly solutions, and speed optimization.",
    },
    {
      titleHu: "Karbantartás és támogatás-",
      descHu:
        "Folyamatos frissítések, hibajavítások és technikai támogatás a zavartalan működés érdekében. Biztonsági mentések, szerverkarbantartás és gyors reakcióidő az esetleges problémák kezelésére.",
      titleEn: "Maintenance and Support-",
      descEn:
        "Continuous updates, bug fixes, and technical support to ensure smooth operation. Backups, server maintenance, and quick response time for any issues.",
    },
  ];

  useEffect(() => {
    let ctx;
    let splitInstances = [];
    let tween;

    // Dinamikusan importáljuk GSAP-et és pluginokat
    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("gsap/SplitText"),
    ]).then(([gsapModule, ScrollTriggerModule, SplitTextModule]) => {
      const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
      const ScrollTrigger =
        ScrollTriggerModule.ScrollTrigger ||
        ScrollTriggerModule.default ||
        ScrollTriggerModule;
      const SplitText =
        SplitTextModule.SplitText || SplitTextModule.default || SplitTextModule;

      // Regisztráljuk a pluginokat
      gsap.registerPlugin(ScrollTrigger, SplitText);

      if (!containerRef.current) return;

      // Létrehozzuk a GSAP contextet, hogy tisztán lehessen takarítani
      ctx = gsap.context(() => {
        containerRef.current.querySelectorAll(".split").forEach((el) => {
          const split = new SplitText(el, { type: "words" });
          splitInstances.push(split);
        });

        // Összes char-ot kigyűjtjük
        const allChars = splitInstances.flatMap((split) => split.chars);

        tween = gsap.fromTo(
          allChars,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.04,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, containerRef);
    });

    // Cleanup a komponens unmount-ján
    return () => {
      if (ctx) ctx.revert();
      splitInstances.forEach((s) => s.revert());
      if (tween) tween.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      name="services"
      id="services"
      className="pb-30 pt-30 services-section w-full min-h-screen bg-black text-white flex flex-col lg:flex-row  px-6 sm:px-12 relative"
    >
      <div className="section-title w-full lg:w-[40%] mb-8 lg:mb-0">
        <h2 className="split text-2xl sm:text-5xl font-bold">
          {language === "hu" ? "Szolgáltatások" : "Services"}
        </h2>
        <h2 className="split text-2xl sm:text-5xl font-bold text-[#1659c9]">
          {language === "hu" ? "amiket nyújtok" : "I offer"}
        </h2>
      </div>

      <div className="w-full lg:w-[60%] flex flex-col gap-8 pr-0 lg:pr-10">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="split text-xl sm:text-2xl font-semibold">
              {language === "hu" ? service.titleHu : service.titleEn}
            </h3>
            <p className="split text-sm sm:text-lg mt-2 leading-relaxed">
              {language === "hu" ? service.descHu : service.descEn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
