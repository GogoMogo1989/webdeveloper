import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const menu = [
    { title: "Főoldal", to: "home" },
    { title: "Szolgáltatások", to: "services" },
    { title: "Rólam", to: "about" },
    { title: "Technológiák", to: "technologies" },
    { title: "Munkáim", to: "work" },
    { title: "Kapcsolat", to: "contact" },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center text-gray-400 z-10">
      <div className="fixed w-full h-[80px] flex justify-between items-center text-gray-400 z-10">
        <ul className="hidden md:flex space-x-6 justify-center w-full">
          {menu.map((menuItem, index) => (
            <li
              key={index}
              className="text-gray-400 hover:text-[#1659c9] cursor-pointer"
            >
              <Link to={menuItem.to} smooth={true} duration={500}>
                {menuItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div onClick={handleClick} className="md:hidden z-10 pl-5">
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      <div>
        <ul
          className={`absolute top-0 left-0 w-full h-screen bg-[rgb(11,9,9)] flex flex-col justify-center items-center text-gray-400 transition-all duration-500 ease-in-out transform ${
            nav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
        >
          {menu.map((menuItem, index) => (
            <li key={index} className="py-6 text-4xl text-black-gray-400">
              <Link
                onClick={handleClick}
                to={menuItem.to}
                smooth={true}
                duration={500}
              >
                {menuItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li
            key="a"
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600"
          >
            <a
              className="flex justify-around items-center w-full text-white pl-1"
              href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/"
            >
              <span className="ml-2 pl-2">Linkedin</span>
              <FaLinkedin size={30} />
            </a>
          </li>
          <li
            key="b"
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]"
          >
            <Link to="contact" smooth="true" duration={500}>
              <p
                className="flex justify-around items-center w-full text-white
               ml-10"
              >
                <span className="ml-2">Email</span>
                <HiOutlineMail size={30} />
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
