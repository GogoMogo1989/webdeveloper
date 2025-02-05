import React from "react";
import WorkImg1 from "../assets/Website.png";
import WorkImg2 from "../assets/Chat_Angular.png";
import WorkImg3 from "../assets/Pizza_MERN.png";
import WorkImg5 from "../assets/Blog.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Work = () => {
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
            <SwiperSlide>
              <div
                style={{ backgroundImage: `url(${WorkImg1})` }}
                className="w-full h-[400px] bg-cover bg-center rounded-md"
              ></div>
              <div className="p-2 mt-2">
                <span className="text-sm text-gray-400 tracking-wide">
                  Személyes weboldalam
                </span>
                <div className="pt-1">
                  <a
                    href="https://gogomogo1989.github.io/website/"
                    className="text-sm text-gray-400 font-medium underline pl-1"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ backgroundImage: `url(${WorkImg2})` }}
                className="w-full h-[400px] bg-cover bg-center rounded-md"
              ></div>
              <div className="p-2 mt-2">
                <span className="text-sm text-gray-400 tracking-wide">
                  Chat
                </span>
                <div className="pt-1">
                  <a
                    href="https://chatkfd.netlify.app/login"
                    className="text-sm text-gray-400 font-medium underline pl-1"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ backgroundImage: `url(${WorkImg3})` }}
                className="w-full h-[400px] bg-cover bg-center rounded-md"
              ></div>
              <div className="p-2 mt-2">
                <span className="text-sm text-gray-400 tracking-wide">
                  Pizzeria
                </span>
                <div className="pt-1">
                  <a
                    href="https://bestpizzakfd.netlify.app/"
                    className="text-sm text-gray-400 font-medium underline pl-1"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ backgroundImage: `url(${WorkImg5})` }}
                className="w-full h-[400px] bg-cover bg-center rounded-md"
              ></div>
              <div className="p-2 mt-2">
                <span className="text-sm text-gray-400 tracking-wide">
                  Blog
                </span>
                <div className="pt-1">
                  <a
                    href="https://github.com/GogoMogo1989/blog2"
                    className="text-sm text-gray-400 underline"
                  >
                    Code
                  </a>
                </div>
              </div>
            </SwiperSlide>
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
