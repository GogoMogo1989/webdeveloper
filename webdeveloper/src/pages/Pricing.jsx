import { useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useLanguage } from "../context/languageContext";

const Pricing = () => {
  const containerRef = useRef(null);
  const { language } = useLanguage();

  const plans = [
    {
      titleHu: "Névjegy / Landing oldal",
      titleEn: "Business card / Landing page",
      price: "120 – 250K Ft",
      featuresHu: [
        "1–5 szekció / aloldal",
        "Reszponzív, mobilbarát",
        "Alap SEO + Google Analytics",
        "Kapcsolati form",
        "Next.js – gyors, biztonságos",
      ],
      featuresEn: [
        "1–5 sections / pages",
        "Responsive, mobile-friendly",
        "Basic SEO + Google Analytics",
        "Contact form",
        "Next.js – fast & secure",
      ],
      highlight: false,
    },
    {
      titleHu: "Céges bemutatkozó oldal",
      titleEn: "Corporate website",
      price: "300 – 500K Ft",
      featuresHu: [
        "6–12 aloldal",
        "Blog / cikkek",
        "Animációk, egyedi dizájn",
        "CMS – szerkeszthető tartalom",
        "SEO + GA4 integráció",
      ],
      featuresEn: [
        "6–12 pages",
        "Blog / articles",
        "Animations, custom design",
        "CMS – editable content",
        "SEO + GA4 integration",
      ],
      highlight: false,
    },
    {
      titleHu: "Céges oldal + egyedi funkció",
      titleEn: "Corporate + custom feature",
      price: "600K – 1,2M Ft",
      featuresHu: [
        "Foglalási / kalkulátor rendszer",
        "Stripe / Barion fizetés",
        "Automatikus e-mail & számla",
        "Admin felület",
        "API integrációk",
      ],
      featuresEn: [
        "Booking / calculator system",
        "Stripe / Barion payments",
        "Automated email & invoice",
        "Admin dashboard",
        "API integrations",
      ],
      highlight: true,
    },
    {
      titleHu: "Webshop (egyedi)",
      titleEn: "Custom e-commerce",
      price: "1,2 – 2,5M Ft",
      featuresHu: [
        "Termékkezelő admin panel",
        "Stripe kártyás fizetés",
        "Rendelés-követés",
        "Automatikus számlázás",
        "E-mail visszaigazolás",
      ],
      featuresEn: [
        "Product management panel",
        "Stripe card payments",
        "Order tracking",
        "Automated invoicing",
        "Email confirmation",
      ],
      highlight: false,
    },
    {
      titleHu: "Egyedi webapp / SaaS MVP",
      titleEn: "Custom web app / SaaS MVP",
      price: "2 – 5M Ft",
      featuresHu: [
        "Komplex üzleti logika",
        "NestJS + MongoDB backend",
        "Hitelesítés, jogosultságok",
        "Valós idejű frissítések",
        "Skálázható architektúra",
      ],
      featuresEn: [
        "Complex business logic",
        "NestJS + MongoDB backend",
        "Authentication & roles",
        "Real-time updates",
        "Scalable architecture",
      ],
      highlight: false,
    },
    {
      titleHu: "Mobilalkalmazás (iOS + Android)",
      titleEn: "Mobile app (iOS + Android)",
      price: "500K – 5M+ Ft",
      featuresHu: [
        "React Native cross-platform",
        "App Store + Google Play deploy",
        "Push értesítések",
        "Fizetési integráció",
        "Backend API fejlesztés",
      ],
      featuresEn: [
        "React Native cross-platform",
        "App Store + Google Play deploy",
        "Push notifications",
        "Payment integration",
        "Backend API development",
      ],
      highlight: false,
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
        const titleSection = containerRef.current.querySelector(".pricing-title");
        gsap.fromTo(
          titleSection,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: {
              trigger: titleSection,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        const cards = containerRef.current.querySelectorAll(".pricing-card");
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.6, delay: i * 0.08,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
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
      { threshold: 0.05 }
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
      name="pricing"
      id="pricing"
      className="pb-32 pt-32 w-full min-h-screen px-6 sm:px-12 relative"
      style={{ background: "#06080f" }}
    >
      {/* Header */}
      <div className="pricing-title mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
          {language === "hu" ? "Tájékoztató" : "Pricing"}
        </h2>
        <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-4" style={{ color: "#1659c9" }}>
          {language === "hu" ? "árak:" : "overview:"}
        </h2>
        <p className="text-sm text-white/45 leading-relaxed max-w-[480px] mt-3">
          {language === "hu"
            ? "Az árak irányárak — a végleges ajánlat a projekt részleteitől függ. Minden projekt egyedi, ezért érdemes egyeztetni."
            : "Prices are indicative — the final quote depends on project scope. Every project is unique, so let's talk."}
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="pricing-card flex flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            style={{
              background: plan.highlight
                ? "linear-gradient(135deg, rgba(22,89,201,0.18) 0%, rgba(22,89,201,0.06) 100%)"
                : "rgba(255,255,255,0.03)",
              border: plan.highlight
                ? "1px solid rgba(22,89,201,0.5)"
                : "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {plan.highlight && (
              <span
                className="self-start text-xs font-bold px-3 py-1 rounded-full mb-4"
                style={{ background: "#1659c9", color: "#fff" }}
              >
                {language === "hu" ? "Legnépszerűbb" : "Most popular"}
              </span>
            )}

            <h3 className="text-base font-semibold text-white mb-1">
              {language === "hu" ? plan.titleHu : plan.titleEn}
            </h3>

            <p
              className="text-2xl font-bold mt-2 mb-5"
              style={{ color: plan.highlight ? "#4ea8ff" : "#fff" }}
            >
              {plan.price}
            </p>

            <ul className="flex flex-col gap-2.5 flex-1 mb-6">
              {(language === "hu" ? plan.featuresHu : plan.featuresEn).map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                  <span style={{ color: "#1659c9" }} className="mt-0.5 flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="w-full text-center py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200"
              style={
                plan.highlight
                  ? { background: "#1659c9", color: "#fff" }
                  : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)" }
              }
              onMouseEnter={(e) => {
                if (!plan.highlight) {
                  e.currentTarget.style.background = "rgba(22,89,201,0.25)";
                  e.currentTarget.style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.highlight) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                }
              }}
            >
              {language === "hu" ? "Ajánlatot kérek" : "Get a quote"}
            </ScrollLink>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-10 text-xs text-white/25 max-w-[500px]">
        {language === "hu"
          ? "* Az árak nettó összegek, ÁFA-t nem tartalmaznak. Karbantartási csomag havi 30–80K Ft-tól elérhető."
          : "* Prices are net amounts, VAT not included. Maintenance packages available from 30–80K HUF / month."}
      </p>
    </div>
  );
};

export default Pricing;
