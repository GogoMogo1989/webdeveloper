import { useRef, useEffect } from "react";
import { useLanguage } from "../context/languageContext";

const Services = () => {
  const containerRef = useRef(null);
  const { language } = useLanguage();

  const services = [
    {
      titleHu: "Teljeskörű éttermi webalkalmazás-fejlesztés",
      descHu:
        "Modern és funkciógazdag webalkalmazások tervezése éttermek számára – beépített online rendelési rendszerrel, egyedi adminisztrációs felülettel és mobilapplikációval. Reszponzív dizájn, gyors működés és kiváló felhasználói élmény minden platformon.",
      titleEn: "Comprehensive Restaurant Web Application Development",
      descEn:
        "Designing feature-rich web applications for restaurants – complete with online ordering, custom admin panel, and a dedicated mobile app. Responsive design, high performance, and an outstanding user experience across all platforms.",
    },
    {
      titleHu: "Kozmetikai és szállodai rendszerek fejlesztése",
      descHu:
        "Személyre szabott online foglalási és ügyfélkezelési rendszerek kozmetikai szolgáltatók és szállodák számára. Teljeskörű adminisztráció, mobilalkalmazás integráció és modern, letisztult felhasználói felület.",
      titleEn: "Beauty and Hotel Booking Systems Development",
      descEn:
        "Tailored online booking and client management solutions for beauty businesses and hotels. Full-featured admin interface, mobile app integration, and a sleek, modern user experience.",
    },
    {
      titleHu: "Webshop és mobilalkalmazás fejlesztés",
      descHu:
        "Reszponzív és skálázható webáruházak készítése egyedi igények szerint, integrált mobilalkalmazással. Kiemelkedő teljesítmény, keresőoptimalizálás és korszerű UI/UX megoldások a vásárlói élmény maximalizálásához.",
      titleEn: "E-commerce and Mobile App Development",
      descEn:
        "Developing responsive and scalable e-commerce platforms tailored to your needs, complete with an integrated mobile app. High performance, SEO optimization, and cutting-edge UI/UX for a superior shopping experience.",
    },
    {
      titleHu: "Egyedi mobilalkalmazás-fejlesztés",
      descHu:
        "Android és iOS mobilapplikációk fejlesztése natív vagy cross-platform technológiákkal. Gyors, megbízható és felhasználóbarát alkalmazások, amelyek a legfrissebb technológiai és design trendeket követik.",
      titleEn: "Custom Mobile App Development",
      descEn:
        "Developing Android and iOS mobile applications using native or cross-platform technologies. Fast, reliable, and user-centric apps that align with the latest technology and design trends.",
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
