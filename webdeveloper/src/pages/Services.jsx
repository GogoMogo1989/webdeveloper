import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../context/languageContext";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Services() {
  const containerRef = useRef(null);
  const { language } = useLanguage();

  const services = [
    {
      titleHu: "Webfejlesztés-",
      descHu:
        "Egyedi vállalati weboldalak és webshopok készítése, modern dizájnnal és reszponzív kialakítással. Felhasználóbarát felületek, gyors betöltési sebesség és optimalizált kódszerkezet biztosítása.",
      titleEn: "Web Development-",
      descEn:
        "Creating unique corporate websites and webshops with modern design and responsive layout. User-friendly interfaces, fast loading speed, and optimized code structure.",
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

  useGSAP(() => {
    if (!containerRef.current) return;

    const splitInstances = [];
    const allChars = [];

    containerRef.current.querySelectorAll(".split").forEach((el) => {
      const split = new SplitText(el, { type: "words, chars" });
      splitInstances.push(split);
      allChars.push(...split.chars);
    });
    const tween = gsap.fromTo(
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
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    return () => {
      splitInstances.forEach((s) => s.revert());
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      name="services"
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
