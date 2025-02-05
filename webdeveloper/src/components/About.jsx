import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Designed from "../assets/designed.png";
import Seo from "../assets/seo.png";
import Maintenance from "../assets/maintenance.png";
import Development from "../assets/development.png";
import { Link } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const cardContant = [
    {
      img: Designed,
      title: "Egyedi dizájn és funkcionalitás",
      desc: "Minden projekt egyedi és személyre szabott!",
    },
    {
      img: Development,
      title: "Gyors, rezponzív weboldalak/appok",
      desc: "Mobilon és asztali gépen is tökéletes az élmény!",
    },
    {
      img: Seo,
      title: "SEO-optimalizált kód",
      desc: "Segítek, hogy a Google is megtalálja az oldaladat!",
    },
    {
      img: Maintenance,
      title: "Biztonság és karbantartás",
      desc: "Az oldalad mindig naprakész és védett lesz!",
    },
  ];

  useEffect(() => {
    gsap.utils.toArray(".card2").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          x: 200, // Kezdetben jobbról indul
          opacity: 0, // Kezdetben átlátszó
        },
        {
          x: 0, // Végállapot balra húzva
          opacity: 1, // Végállapot teljesen látható
          duration: 1, // Animáció hossza
          stagger: 0.2, // Az animáció minden kártyánál eltolva történik
          scrollTrigger: {
            trigger: card, // A trigger az adott card lesz
            start: "top 80%", // Amikor a kártya elérte a viewport alsó 80%-át
            end: "top 30%", // Az animáció akkor fejeződik be, amikor a kártya teteje eléri a viewport tetejét
            scrub: true, // Az animáció a scroll irányával összhangban történik
            markers: false, // A markereket eltüntetheted, ha nem szükségesek
          },
        }
      );
    });
  }, []);

  return (
    <div
      name="about"
      id="about-section"
      className="w-full h-[160vh] bg-white text-black flex flex-col justify-center items-center relative"
    >
      <div className="max-w-[100%] w-full text-center flex flex-col">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-black">
          Miért engem
        </h1>
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-[#1659c9]">
          válassz?
        </h1>
        <p className="mx-auto text-xs sm:text-sm md:text-base lg:text-lg text-black py-4 max-w-[700px] font-bold text-center">
          A mai digitális világban egy weboldal vagy egy mobil applikáció nem
          csupán egy online névjegy – ez az első benyomásod az ügyfelek felé. Én
          pedig abban hiszek, hogy minden vállalkozás egyedi, ezért nálam nincs
          helye sablonmegoldásoknak!
        </p>
      </div>

      <div className="flex justify-center items-center space-x-8 mt-10 w-full px-10">
        <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center">
          {cardContant.map((card, index) => (
            <div
              key={index}
              className="card card2 bg-white shadow-lg rounded-lg p-3 sm:p-4 flex flex-col items-center justify-between w-full sm:w-[30%] md:w-[22%] min-h-[250px] sm:min-h-[300px] hover:scale-105 duration-500"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] mb-3"
              />
              <h3 className="text-base sm:text-lg font-semibold mb-1 text-center">
                {card.title}
              </h3>
              <p className="text-center text-gray-600 flex-grow text-xs sm:text-sm">
                {card.desc}
              </p>
              <Link to="contact" smooth={true} duration={500}>
                <button className="button-33 px-1 py-[2px] sm:px-4 sm:py-2 text-[10px] sm:text-sm">
                  Bővebben!
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <p className="absolute bottom-4 right-4 text-lg font-semibold text-gray-400 opacity-60">
        Rólam
      </p>
    </div>
  );
};

export default About;
