import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useLanguage } from "../context/languageContext";
import "flag-icons/css/flag-icons.min.css";
import BarsIcon from "../Icons/Bars";
import TimesIcon from "../Icons/Times";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const handleClick = () => setNav(!nav);

  const menuOptions = {
    hu: [
      { title: "Főoldal", to: "home" },
      { title: "Rólam", to: "bio" },
      { title: "Szolgáltatások", to: "services" },
      { title: "Miért engem?", to: "about" },
      { title: "Technológiák", to: "technologies" },
      { title: "Munkáim", to: "work" },
      { title: "Árak", to: "pricing" },
      { title: "Kapcsolat", to: "contact" },
    ],
    en: [
      { title: "Home", to: "home" },
      { title: "About", to: "bio" },
      { title: "Services", to: "services" },
      { title: "Why me?", to: "about" },
      { title: "Technologies", to: "technologies" },
      { title: "Work", to: "work" },
      { title: "Pricing", to: "pricing" },
      { title: "Contact", to: "contact" },
    ],
  };

  const currentMenu = menuOptions[language] || menuOptions["en"];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full h-[70px] z-50"
        style={{
          background: "rgba(5, 5, 10, 0.65)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="w-full h-full flex items-center justify-between px-5 lg:px-10">

          {/* Brand logo */}
          <RouterLink
            to="/"
            className="relative z-50 flex-shrink-0"
            onClick={() => nav && setNav(false)}
          >
            <span className="text-lg font-bold text-white tracking-tight select-none">
              KFD <span style={{ color: "#4ea8ff" }}>Solutions</span>
            </span>
          </RouterLink>

          {/* Desktop nav — centered */}
          <ul className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {currentMenu.map((item, index) => (
              <li
                key={index}
                className="nav-link text-white/70 hover:text-white text-sm font-medium tracking-wide cursor-pointer transition-colors duration-200"
              >
                {item.href ? (
                  <RouterLink to={item.href}>{item.title}</RouterLink>
                ) : (
                  <ScrollLink to={item.to} smooth={true} duration={500} id={`nav-${item.to}`}>
                    {item.title}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>

          {/* Right: language toggle + mobile hamburger */}
          <div className="flex items-center gap-5">
            <button
              onClick={toggleLanguage}
              className="cursor-pointer text-xl opacity-80 hover:opacity-100 transition-opacity"
              aria-label={`Switch to ${language === "hu" ? "English" : "Hungarian"}`}
            >
              <span className={`fi fi-${language === "hu" ? "hu" : "gb"}`}></span>
            </button>
            <button
              onClick={handleClick}
              className="md:hidden text-white cursor-pointer focus:outline-none"
              aria-label={nav ? "Close menu" : "Open menu"}
            >
              {nav ? <TimesIcon /> : <BarsIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay — outside <nav> to avoid backdrop-filter containing block issue */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col justify-center items-center md:hidden transition-all duration-500 ${
          nav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(5, 5, 10, 0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
        aria-hidden={!nav}
      >
        {/* Close button */}
        <button
          onClick={() => setNav(false)}
          aria-label="Close menu"
          className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors duration-200 p-2"
        >
          <TimesIcon />
        </button>

        <ul className="flex flex-col items-center gap-5">
          {currentMenu.map((item, index) => (
            <li
              key={index}
              className="text-xl font-semibold text-white/60 hover:text-white cursor-pointer transition-colors duration-200 tracking-wide"
            >
              {item.href ? (
                <RouterLink to={item.href} onClick={() => setNav(false)}>
                  {item.title}
                </RouterLink>
              ) : (
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setNav(false)}
                >
                  {item.title}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
