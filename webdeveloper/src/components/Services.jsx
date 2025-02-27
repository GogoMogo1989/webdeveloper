import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const serviceRefs = useRef([]);

  const cont = [
    {
      title: "Webfejlesztés-",
      desc: "Egyedi vállalati weboldalak és webshopok készítése, modern dizájnnal és reszponzív kialakítással. Felhasználóbarát felületek, gyors betöltési sebesség és optimalizált kódszerkezet biztosítása.",
    },
    {
      title: "Mobilapplikáció fejlesztés-",
      desc: "Android és iOS alkalmazások fejlesztése modern technológiával, natív és cross-platform megoldásokkal. Gyors, stabil és skálázható mobilalkalmazások, amelyek megfelelnek a legújabb UI/UX trendeknek.",
    },
    {
      title: "SEO és teljesítményoptimalizálás-",
      desc: "Jobb helyezés a Google keresési találatai között, gyorsabb betöltési idők és hatékonyabb felhasználói élmény. Keresőoptimalizált tartalmak, mobilbarát megoldások és sebességoptimalizálás.",
    },
    {
      title: "Karbantartás és támogatás-",
      desc: "Folyamatos frissítések, hibajavítások és technikai támogatás a zavartalan működés érdekében. Biztonsági mentések, szerverkarbantartás és gyors reakcióidő az esetleges problémák kezelésére.",
    },
  ];

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char">
        {char === " " ? "\u00A0" : char}{" "}
      </span>
    ));
  };

  useEffect(() => {
    gsap.fromTo(
      ".char",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        scrollTrigger: {
          trigger: ".services-section",
          start: "top+=60% bottom",
          end: "top top",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div
      name="services"
      className="services-section w-full h-[140vh] min-h-screen bg-black text-black flex flex-col lg:flex-row items-start pt-10 px-6 sm:px-12 relative pt-50"
    >
      <div className="section-title w-full text-left lg:w-[40%] text-left mb-8 lg:mb-0">
        <h2
          className="service-title text-2xl sm:text-5xl font-bold text-white"
          ref={(el) => (serviceRefs.current[0] = el)}
        >
          {splitText("Szolgáltatások")}
        </h2>
        <h2
          className="service-text about-title text-2xl sm:text-5xl font-bold text-[#1659c9]"
          ref={(el) => (serviceRefs.current[1] = el)}
        >
          {splitText("amiket nyújtunk")}
        </h2>
      </div>

      <div className="w-full lg:w-[60%] flex flex-col lg:grid-cols-2 gap-8 pr-10">
        {cont.map((service, index) => (
          <div key={index} className="flex flex-col">
            <h3
              className="service-text text-xl sm:text-2xl font-semibold text-white"
              ref={(el) => (serviceRefs.current[index + 2] = el)}
            >
              {splitText(service.title)}
            </h3>
            <p
              className="service-text text-sm sm:text-lg text-white"
              ref={(el) => (serviceRefs.current[index + 6] = el)}
            >
              {splitText(service.desc)}
            </p>
          </div>
        ))}
      </div>

      <p className="absolute bottom-4 right-4 text-lg font-semibold text-gray-400 opacity-60">
        Szolgáltatások
      </p>
    </div>
  );
};

export default Services;
