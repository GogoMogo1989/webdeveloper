import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useLanguage } from "../context/languageContext";
import "flag-icons/css/flag-icons.min.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const handleClick = () => setNav(!nav);

  const fullMenuOptions = {
    hu: [
      { title: "Főoldal", to: "home" },
      { title: "Szolgáltatások", to: "services" },
      { title: "Miért én?", to: "about" },
      { title: "Technológiák", to: "technologies" },
      { title: "Munkáim", to: "work" },
      { title: "Kapcsolat", to: "contact" },
      { title: "Blog", path: "blog" },
    ],
    en: [
      { title: "Main", to: "home" },
      { title: "Services", to: "services" },
      { title: "Why me?", to: "about" },
      { title: "Technologies", to: "technologies" },
      { title: "Work", to: "work" },
      { title: "Contacts", to: "contact" },
      { title: "Blog", path: "/blog" },
    ],
  };

  // Reduced menu for blog pages
  const blogMenuOptions = {
    hu: [
      { title: "Főoldal", path: "/" },
      { title: "Blog", path: "/blog" },
    ],
    en: [
      { title: "Main", path: "/" },
      { title: "Blog", path: "/blog" },
    ],
  };

  // Detect blog route (e.g. /blog or /blog/*)
  const isBlogPage = location.pathname.startsWith("/blog");
  const currentMenu = isBlogPage
    ? blogMenuOptions[language] || blogMenuOptions["en"]
    : fullMenuOptions[language] || fullMenuOptions["en"];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center text-gray-400 z-20">
      {/* Desktop navigation */}
      <div className="fixed w-full h-[80px] flex justify-between items-center text-gray-400 z-10">
        <ul className="hidden md:flex space-x-6 justify-center w-full">
          {currentMenu.map((menuItem, index) => {
            if (menuItem.path) {
              return (
                <li
                  key={index}
                  className="text-gray-600 hover:text-[#1659c9] cursor-pointer"
                >
                  <RouterLink to={menuItem.path}>{menuItem.title}</RouterLink>
                </li>
              );
            }
            if (menuItem.to) {
              return (
                <li
                  key={index}
                  className="text-gray-600 hover:text-[#1659c9] cursor-pointer"
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
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Language toggle button */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 flex">
        <button onClick={toggleLanguage} className="cursor-pointer text-2xl">
          <span className={`fi fi-${language === "hu" ? "hu" : "gb"}`}></span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div>
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
                  className=" text-3xl text-gray-600 hover:text-[#1659c9] cursor-pointer"
                >
                  <RouterLink to={menuItem.path}>{menuItem.title}</RouterLink>
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

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-around items-center w-full text-white pl-1"
              href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/"
            >
              <span className="ml-2 pl-2">Linkedin</span>
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              href="contact"
            >
              <p className="flex justify-around items-center w-full text-white ml-10">
                <span className="ml-2">Email</span>
                <HiOutlineMail size={30} />
              </p>
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
