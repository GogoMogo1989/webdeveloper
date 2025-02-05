import React from "react";
import WorkImg1 from "../assets/Website.png";
import WorkImg2 from "../assets/Chat_Angular.png";
import WorkImg3 from "../assets/Pizza_MERN.png";
import WorkImg4 from "../assets/Blog.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Work = () => {
  const cont = [
    {
      title: "Személyes weboldalam",
      picture: WorkImg1,
      href: "https://gogomogo1989.github.io/website/",
    },
    {
      title: "Chat",
      picture: WorkImg2,
      href: "https://chatkfd.netlify.app/login",
    },
    {
      title: "Pizzérei",
      picture: WorkImg3,
      href: "https://bestpizzakfd.netlify.app/",
    },
    {
      title: "Blog",
      picture: WorkImg4,
      href: "https://github.com/GogoMogo1989/blog2",
    },
  ];
  return (
    <div>
      <div className="w-full lg:max-w-[20%] px-6 sm:px-12 pt-20">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-black">
          Eddigi
        </h1>
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-[#1659c9]">
          munkáim:
        </h1>
      </div>
      <div
        name="work"
        className="w-full h-[120vh] min-h-screen text-black bg-white relative flex flex-col lg:flex-row items-center justify-center"
      >
        <div className="w-full max-w-[80%] lg:max-w-[80%] px-6 py-10">
          <Swiper
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            grabCursor={true}
            centeredSlides={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
            speed={1500}
            className="w-full"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {cont.map((project, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{ backgroundImage: `url(${project.picture})` }}
                  className="w-full h-[400px] bg-cover bg-center rounded-md"
                ></div>

                <div className="p-2 mt-2">
                  <span className="text-sm text-gray-400 tracking-wide">
                    {project.title}
                  </span>
                  <div className="pt-1">
                    <a
                      href={project.href}
                      className="text-sm text-gray-400 font-medium underline pl-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p className="absolute bottom-4 right-4 text-lg font-semibold text-gray-400 opacity-60">
          Munkáim
        </p>
      </div>
    </div>
  );
};

export default Work;
