import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-[140vh] min-h-screen text-black bg-black pt-10 flex justify-center items-center p-4 relative"
    >
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:max-w-[50%] px-8 pt-20 space-y-8">
          <div className="text-left">
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-white">
              Elérhetőségeim:
            </h1>
          </div>
          <div className="pb-8">
            <p className="text-sm sm:text-lg text-white">
              Ha bárminemű kérdésed van és szeretnél velem kapcsolatba lépni,
              vagy együttműködni, bátran küldj egy e-mailt az alábbi címre, de
              telefonon is kereshetsz!
            </p>
            <ul className="list-none">
              <li className="text-lg">
                📧{" "}
                <a
                  href="mailto:kovacsfarkasdavid@gmail.com"
                  className="text-[#1659c9]"
                >
                  kovacsfarkasdavid@gmail.com
                </a>
              </li>
              <li className="text-lg">
                📞{" "}
                <a href="tel:+3670632060" className="text-[#1659c9]">
                  +36 70 632 0602
                </a>
              </li>
              <li className="flex space-x-4 pt-4">
                <a
                  className="text-white text-4xl"
                  href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="text-white text-4xl"
                  href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/"
                >
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:max-w-[50%] px-8 py-10 space-y-8">
          <form
            method="POST"
            action="https://getform.io/f/527a8956-ec4d-4da2-a97e-91ac1d02a72d"
            className="flex flex-col max-w-[600px] w-full"
          >
            <input
              className="bg-gray-100 p-2 text-black font-medium"
              type="text"
              placeholder="Név"
              name="name"
            />
            <input
              className="my-4 p-2 bg-gray-100 text-black font-medium"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-gray-100 p-2 text-black font-medium"
              placeholder="Üzenet"
              name="message"
              rows="10"
            ></textarea>
            <button className="button-33 mt-10 mx-auto flex justify-center items-center">
              Küldés
            </button>
          </form>
        </div>
      </div>

      <p className="absolute bottom-4 right-4 text-lg font-semibold text-gray-400 opacity-60">
        Elérhetőségeim
      </p>
    </div>
  );
};

export default Contact;
