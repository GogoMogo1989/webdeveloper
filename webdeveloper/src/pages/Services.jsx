import { useRef, useEffect } from "react";
/* import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"; */
import { useLanguage } from "../context/languageContext";

/* gsap.registerPlugin(ScrollTrigger, SplitText); */

const Services = () => {
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
    let observer;

    const loadAnimations = async () => {
      const [gsapModule, ScrollTriggerModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule;

      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current) return;

      ctx = gsap.context(() => {
        const titleSection =
          containerRef.current.querySelector(".section-title");

        gsap.fromTo(
          titleSection,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleSection,
              start: "top 80%",
              end: "top 60%",
              toggleActions: "play none none reverse", // jelenik meg → marad → visszagördít → eltűnik
              markers: false,
            },
          }
        );

        const serviceBlocks =
          containerRef.current.querySelectorAll(".flex.flex-col");

        serviceBlocks.forEach((block, index) => {
          const h3 = block.querySelector("h3");
          const p = block.querySelector("p");

          gsap.fromTo(
            h3,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: block,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse",
                markers: false,
              },
            }
          );

          gsap.fromTo(
            p,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.2 + 0.15, // picit később mint a h3
              scrollTrigger: {
                trigger: block,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse",
                markers: false,
              },
            }
          );
        });
      }, containerRef);
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadAnimations();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer?.disconnect();
      ctx?.revert();
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
};

export default Services;
