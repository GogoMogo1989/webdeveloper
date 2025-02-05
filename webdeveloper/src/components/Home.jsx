import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import videoBackground from "../assets/background.mp4";

const Home = () => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".first-class", {
        y: -50,
        opacity: 0,
        duration: 3,
        stagger: 0.5,
      });

      gsap.from(
        ".second-class",
        {
          y: -50,
          opacity: 0,
          duration: 3,
          stagger: 0.5,
        },
        "-=2"
      );

      gsap.from(
        ".third-class",
        {
          y: -50,
          opacity: 0,
          duration: 3,
          stagger: 0.5,
        },
        "-=2"
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div name="home" className="w-full h-[100vh] relative">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        ref={containerRef}
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative"
      >
        <h1 className="first-class text-2xl sm:text-5xl md:text-6xl font-bold text-white">
          Helló!
        </h1>
        <h1 className="second-class text-2xl sm:text-5xl md:text-6xl font-bold text-white">
          Kovács-Farkas Dávid vagyok
        </h1>
        <p className="third-class text-xs sm:text-sm md:text-base lg:text-lg text-white py-4 max-w-[700px] font-bold">
          Egyedi weboldalak kis- és középvállalkozások számára!
        </p>

        <Link to="contact" smooth={true} duration={500}>
          <button className="button-33 px-1 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-xl">
            Kérj árajánlatot!
          </button>
        </Link>
      </div>

      <p className="absolute bottom-4 right-4 text-lg font-semibold text-gray-400 opacity-60">
        Főoldal
      </p>
    </div>
  );
};

export default Home;
