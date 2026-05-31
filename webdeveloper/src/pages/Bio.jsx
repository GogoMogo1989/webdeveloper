import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useLanguage } from "../context/languageContext";
import profilePhoto from "../assets/IMG_20220914_164630.jpg";

const stats = [
  {
    value: "43+",
    labelHu: "Befejezett projekt",
    labelEn: "Completed projects",
  },
  {
    value: "14+",
    labelHu: "Technológia",
    labelEn: "Technologies",
  },
  {
    value: "100%",
    labelHu: "Elkötelezettség",
    labelEn: "Commitment",
  },
];

const Bio = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;
    let observer;

    const load = async () => {
      const [gsapModule, STModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger = STModule.default || STModule;
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          ".bio-left",
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.fromTo(
          ".bio-right",
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.fromTo(
          ".bio-stat",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".bio-stats",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, sectionRef);
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          load();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer?.disconnect();
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      name="bio"
      id="bio"
      className="w-full py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1659c9 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Decorative left accent */}
      <div
        className="absolute top-0 left-0 w-1 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #1659c9, transparent)",
        }}
      />

      <div className="max-w-[1100px] mx-auto px-6 sm:px-12 relative">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── Left: text ─────────────────────────────── */}
          <div className="bio-left flex-1 min-w-0">

            <h2 className="text-3xl sm:text-5xl font-bold text-black leading-tight mb-2">
              {language === "hu" ? "Rólam" : "About me"}
            </h2>
            <p
              className="text-lg font-semibold mb-8"
              style={{ color: "#1659c9" }}
            >
              Full-Stack Developer
            </p>

            <div className="space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed mb-10">
              {language === "hu" ? (
                <>
                  <p>
                    Kovács Farkas Dávid vagyok, full-stack fejlesztő. A
                    webfejlesztés az a terület, ahol a kreativitás és a logikus
                    gondolkodás tökéletesen találkozik – és ez az, ami engem
                    minden egyes projektnél motivál.
                  </p>
                  <p>
                    Főleg{" "}
                    <span className="font-semibold text-gray-800">
                      React, Next.js, Node.js, NestJS
                    </span>{" "}
                    és{" "}
                    <span className="font-semibold text-gray-800">
                      React Native
                    </span>{" "}
                    technológiákkal dolgozom. Nem csak kódot írok – megértem az
                    üzleti igényeket, és olyan digitális megoldást szállítok,
                    ami nemcsak jól néz ki, hanem valódi eredményeket is hoz.
                  </p>
                  <p>
                    Ha olyan fejlesztőt keresel, aki komolyan veszi a
                    minőséget, tartja a határidőket, és a projekted sikerét a
                    sajátjának tekinti – jó helyen jársz.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I'm Dávid, a full-stack developer. Web development is where
                    creativity and logical thinking perfectly intersect — and
                    that's what drives me in every single project.
                  </p>
                  <p>
                    I primarily work with{" "}
                    <span className="font-semibold text-gray-800">
                      React, Next.js, Node.js, NestJS
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-gray-800">
                      React Native
                    </span>
                    . I don't just write code — I understand business needs and
                    deliver digital solutions that don't just look great, they
                    drive real results.
                  </p>
                  <p>
                    If you're looking for a developer who takes quality
                    seriously, meets deadlines, and treats your project's
                    success as their own — you're in the right place.
                  </p>
                </>
              )}
            </div>

            {/* Stats */}
            <div className="bio-stats flex gap-8 mb-10 flex-wrap">
              {stats.map((stat, i) => (
                <div key={i} className="bio-stat">
                  <p
                    className="text-4xl font-black leading-none"
                    style={{ color: "#1659c9" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 mt-1 leading-tight">
                    {language === "hu" ? stat.labelHu : stat.labelEn}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="contact" smooth={true} duration={500}>
                <button className="button-33 text-base px-7 py-3">
                  {language === "hu"
                    ? "Vegyük fel a kapcsolatot"
                    : "Get in touch"}
                </button>
              </Link>
              <a
                href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors duration-200 flex items-center gap-1.5"
                style={{ color: "#1659c9" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#4ea8ff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#1659c9")
                }
              >
                LinkedIn →
              </a>
            </div>
          </div>

          {/* ── Right: photo ────────────────────────────── */}
          <div className="bio-right flex-shrink-0 flex items-center justify-center">
            <div className="relative">
              {/* Shadow frame */}
              <div
                className="absolute -bottom-4 -right-4 rounded-2xl"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#1659c9",
                  opacity: 0.12,
                }}
              />
              {/* Photo */}
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                style={{
                  width: "300px",
                  height: "390px",
                  border: "1px solid rgba(22,89,201,0.15)",
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Kovács Farkas Dávid"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                {/* Bottom gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  }}
                />
                {/* Name tag */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-bold drop-shadow-lg">
                    Kovács Farkas Dávid
                  </p>
                  <p
                    className="text-xs mt-0.5 drop-shadow-lg font-medium"
                    style={{ color: "#a8d4ff" }}
                  >
                    Full-Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
