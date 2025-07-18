import { Link } from "react-scroll";
import { useLanguage } from "../context/languageContext";
import "flag-icons/css/flag-icons.min.css";
import LinkedinIcon from "../Icons/Linkedin";

export default function UserFooter() {
  const { language } = useLanguage();

  // Szöveg fordítások
  const t = {
    hu: {
      copyright: "Minden jog fenntartva.",
      quickLinks: "Gyors linkek",
      sitemap: "Webhelytérkép",
      links: {
        home: "Főoldal",
        services: "Szolgáltatások",
        about: "Rólam",
        technologies: "Technológiák",
        work: "Munkáim",
        contact: "Kapcsolat",
      },
    },
    en: {
      copyright: "All rights reserved.",
      quickLinks: "Quick Links",
      sitemap: "Site Map",
      links: {
        home: "Home",
        services: "Services",
        about: "About",
        technologies: "Technologies",
        work: "Work",
        contact: "Contact",
      },
    },
  }[language];

  const linkOrder = [
    "home",
    "services",
    "about",
    "technologies",
    "work",
    "contact",
  ];

  return (
    <div className="w-full bg-black text-white p-8 relative">
      <div className="text-center mb-6">
        <p className="text-sm">&copy; 2025 KFD Solutions {t.copyright}</p>
        <div className="flex justify-center">
          <ul className="flex flex-col items-center space-y-4 pt-4">
            <li>
              <a
                className="text-white text-2xl hover:text-[#1659c9]"
                href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col items-center text-center mb-8 md:mb-0">
          <h1 className="text-xl font-semibold mb-4">{t.quickLinks}</h1>
          <ul className="text-sm space-y-2 flex flex-col">
            {linkOrder.slice(0, 2).map((key) => (
              <li key={key}>
                <Link
                  to={key}
                  smooth
                  duration={500}
                  className="transition duration-200 cursor-pointer hover:text-[#1659c9]"
                  href={t.links[key]}
                >
                  {t.links[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center text-center">
          <h1 className="text-xl font-semibold mb-4">{t.sitemap}</h1>
          <ul className="text-sm space-y-2 flex flex-col">
            {linkOrder.map((key) => (
              <li key={key}>
                <Link
                  to={key}
                  smooth
                  duration={500}
                  className="transition duration-200 cursor-pointer hover:text-[#1659c9]"
                  href={t.links[key]}
                >
                  {t.links[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
