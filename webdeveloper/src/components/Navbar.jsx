import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useLanguage } from "../context/languageContext";
import "flag-icons/css/flag-icons.min.css";
import LinkedinIcon from "../Icons/Linkedin";
import EmailIcon from "../Icons/Email";
import BarsIcon from "../Icons/Bars";
import TimesIcon from "../Icons/Times";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const handleClick = () => setNav(!nav);

  const fullMenuOptions = {
    hu: [
      { title: "Főoldal", to: "home" },
      { title: "Szolgáltatások", to: "services" },
      { title: "Miért engem válassz?", to: "about" },
      { title: "Technológiák", to: "technologies" },
      { title: "Munkáim", to: "work" },
      { title: "Kapcsolat", to: "contact" },
      { title: "Blog", path: "/blog#up" },
    ],
    en: [
      { title: "Main", to: "home" },
      { title: "Services", to: "services" },
      { title: "Why me?", to: "about" },
      { title: "Technologies", to: "technologies" },
      { title: "Work", to: "work" },
      { title: "Contacts", to: "contact" },
      { title: "Blog", path: "/blog#up" },
    ],
  };

  const blogMenuOptions = {
    hu: [
      { title: "Főoldal", path: "/#up" },
      { title: "Blog", path: "/blog#up" },
    ],
    en: [
      { title: "Main", path: "/#up" },
      { title: "Blog", path: "/blog#up" },
    ],
  };

  // Ismert útvonalak
  const knownRoutes = [
    "/",
    "/services",
    "/about",
    "/technologies",
    "/work",
    "/contact",
    "/blog",
  ];

  const isKnownRoute = knownRoutes.some(
    (route) =>
      location.pathname === route || location.pathname.startsWith(route + "/")
  );

  const isBlogPage = location.pathname.startsWith("/blog") || !isKnownRoute;

  const currentMenu = isBlogPage
    ? blogMenuOptions[language] || blogMenuOptions["en"]
    : fullMenuOptions[language] || fullMenuOptions["en"];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center text-gray-400 z-100">
      {/* Desktop navigation */}
      <div className="fixed w-full h-[80px] flex justify-between items-center text-gray-400 z-10">
        <ul className="hidden md:flex space-x-6 justify-center w-full">
          {currentMenu.map((menuItem, index) => {
            if (menuItem.path) {
              return (
                <li
                  key={index}
                  className="text-white
                            cursor-pointer 
                            transition-all 
                            duration-200 
                            hover:text-[#1659c9] 
                            [text-shadow:_0_0_2px_black,_0_0_2px_black,_0_0_2px_black] [letter-spacing:0.09em]"
                >
                  <RouterLink to={menuItem.path}>{menuItem.title}</RouterLink>
                </li>
              );
            }
            if (menuItem.to) {
              return (
                <li
                  key={index}
                  className="text-white
                          cursor-pointer 
                          transition-all 
                          duration-200 
                          hover:text-[#1659c9] 
                          [text-shadow:_0_0_2px_black,_0_0_2px_black,_0_0_2px_black]
                          [letter-spacing:0.09em]"
                >
                  <ScrollLink
                    to={menuItem.to}
                    smooth={true}
                    duration={500}
                    id={`nav-${menuItem.to}`}
                  >
                    {menuItem.title}
                  </ScrollLink>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>

      {/* Mobile hamburger icon */}
      <div onClick={handleClick} className="md:hidden z-10 pl-5">
        {nav ? <TimesIcon /> : <BarsIcon />}
      </div>

      {/* Language toggle button */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 flex">
        <button
          onClick={toggleLanguage}
          className="cursor-pointer text-2xl"
          aria-label={`Váltás ${
            language === "hu" ? "angol" : "magyar"
          } nyelvre`}
        >
          <span className={`fi fi-${language === "hu" ? "hu" : "gb"}`}></span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-[rgb(11,9,9)] flex flex-col justify-center items-center text-gray-400 transition-all duration-500 ease-in-out transform space-y-8 ${
          nav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        {currentMenu.map((menuItem, index) => {
          if (menuItem.path) {
            return (
              <li
                key={index}
                className="text-3xl text-gray-600 hover:text-[#1659c9] cursor-pointer"
              >
                {/* onClick bezárja a panelt */}
                <RouterLink to={menuItem.path} onClick={() => setNav(false)}>
                  {menuItem.title}
                </RouterLink>
              </li>
            );
          }
          if (menuItem.to) {
            return (
              <li
                key={index}
                className="text-3xl text-gray-600 hover:text-[#1659c9] cursor-pointer"
              >
                <ScrollLink
                  to={menuItem.to}
                  smooth={true}
                  duration={500}
                  id={`nav-${menuItem.to}`}
                  /* görgetés indításakor is zárjuk le */
                  onClick={() => setNav(false)}
                >
                  {menuItem.title}
                </ScrollLink>
              </li>
            );
          }
          return null;
        })}
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-around items-center w-full text-white pl-1"
              href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/"
            >
              <span className="ml-2 pl-2">Linkedin</span>
              <LinkedinIcon width="32" height="32" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              href="contact"
            >
              <p className="mt-8 pl-2 flex justify-around items-center w-full text-white ml-10">
                <span className="mb-8">Email</span>
                <EmailIcon width={10} height={10} />
              </p>
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
