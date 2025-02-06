import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const UserFooter = () => {
  return (
    <div className="w-full bg-black text-white p-8 relative">
      <div className="text-center mb-6">
        <p className="text-sm">&copy; 2025 KFD Co. Minden jog fenntartva.</p>
        <div className="flex justify-center">
          <ul>
            <li className="flex space-x-4 pt-4">
              <a
                className="text-white text-2xl"
                href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/"
              >
                <FaLinkedin />
              </a>
              <a
                className="text-white text-2xl"
                href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col items-center text-center mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Gyors linkek</h3>
          <ul className="text-sm text-white space-y-2">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="transition duration-200 cursor-pointer"
            >
              <li className="hover:text-[#1659c9]">Főoldal</li>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="transition duration-200 cursor-pointer"
            >
              <li className="hover:text-[#1659c9]">Kapcsolat</li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-4">Webhelytérkép</h3>
          <ul className="text-sm text-white space-y-2">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="transition duration-200 cursor-pointer"
            >
              <li className="hover:text-[#1659c9]">Főoldal</li>
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className=" transition duration-200 cursor-pointer"
            >
              <li className="hover:text-[#1659c9]">Szolgáltatások</li>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="transition duration-200 cursor-pointer"
            >
              <li className="hover:text-[#1659c9]">Rólam</li>
            </Link>

            <Link
              to="technologies"
              smooth={true}
              duration={500}
              className=" transition duration-200 cursor-pointer"
            >
              <li className="hover:text-[#1659c9]">Technológiák</li>
            </Link>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="transition duration-200 cursor-pointer"
            >
              <li className="hover:text-[#1659c9]">Munkáim</li>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className=" transition duration-200 cursor-pointer"
            >
              <li className="hover:text-[#1659c9]">Kapcsolat</li>
            </Link>
          </ul>
        </div>
      </div>
      <p className="absolute bottom-4 right-4 text-lg font-semibold text-gray-400 opacity-60">
        Lábléc
      </p>
    </div>
  );
};

export default UserFooter;
