import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useLanguage } from "../context/languageContext";
import "flag-icons/css/flag-icons.min.css";
import LinkedinIcon from "../Icons/Linkedin";

export default function UserFooter() {
  const { language } = useLanguage();

  const t = {
    hu: {
      copyright: "Minden jog fenntartva.",
      tagline: "Egyedi webalkalmazások KKV-knak és startupoknak.",
      quickLinks: "Navigáció",
      contact: "Kapcsolat",
      links: {
        home: "Főoldal",
        bio: "Bemutatkozás",
        services: "Szolgáltatások",
        about: "Rólam",
        technologies: "Technológiák",
        work: "Munkáim",
        contact: "Kapcsolat",
      },
    },
    en: {
      copyright: "All rights reserved.",
      tagline: "Custom web applications for SMEs and startups.",
      quickLinks: "Navigation",
      contact: "Contact",
      links: {
        home: "Home",
        bio: "About me",
        services: "Services",
        about: "About",
        technologies: "Technologies",
        work: "Work",
        contact: "Contact",
      },
    },
  }[language];

  const navLinks = ["home", "bio", "services", "about", "technologies", "work", "contact"];

  return (
    <footer
      className="w-full text-white"
      style={{ background: "#040609" }}
    >
      {/* Gradient top border */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(22,89,201,0.5), rgba(78,168,255,0.4), transparent)",
        }}
      />

      <div className="max-w-[1100px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

          {/* Brand column */}
          <div className="sm:col-span-1">
            <RouterLink to="/">
              <span className="text-xl font-bold text-white tracking-tight">
                KFD <span style={{ color: "#4ea8ff" }}>Solutions</span>
              </span>
            </RouterLink>
            <p className="mt-3 text-sm text-white/40 leading-relaxed max-w-[240px]">
              {t.tagline}
            </p>
            <div className="mt-6">
              <a
                className="inline-flex text-white/50 hover:text-white transition-colors duration-200"
                href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
              {t.quickLinks}
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((key) => (
                <li key={key}>
                  <Link
                    to={key}
                    smooth
                    duration={500}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {t.links[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
              {t.contact}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:kovacsfarkasdavid@gmail.com"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  kovacsfarkasdavid@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+36706320602"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  +36 70 632 0602
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} KFD Solutions — {t.copyright}
          </p>
          <p className="text-xs text-white/20">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
