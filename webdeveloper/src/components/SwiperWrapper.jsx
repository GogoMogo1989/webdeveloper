import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SwiperWrapper = ({ projects, language, cookiesAccepted }) => {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      grabCursor={true}
      centeredSlides={true}
      modules={[Autoplay, Navigation]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: true,
      }}
      speed={1500}
      navigation={true}
      className="w-full"
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[400px] bg-cover bg-center rounded-md">
            {cookiesAccepted ? (
              <iframe
                width="100%"
                height="100%"
                src={project.iframeSrc}
                title={language === "hu" ? project.titleHu : project.titleEn}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-sm text-gray-700">
                {language === "hu"
                  ? "A videó megtekintéséhez engedélyezd a sütiket."
                  : "Please accept cookies to view the video."}
              </div>
            )}
          </div>
          <div className="p-2 mt-2">
            <span className="text-sm text-gray-700 tracking-wide">
              {language === "hu" ? project.titleHu : project.titleEn}
            </span>
            <div className="pt-1">
              <p className="text-sm text-gray-500">
                {language === "hu"
                  ? project.descriptionHu
                  : project.descriptionEn}
              </p>
              {project.href && (
                <a
                  href={project.href}
                  className="text-sm text-gray-700 font-medium underline pl-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperWrapper;
