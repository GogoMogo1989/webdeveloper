import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SwiperWrapper = ({ projects, language, cookiesAccepted }) => {
  return (
    <Swiper
      spaceBetween={24}
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
          <div
            className="w-full rounded-xl overflow-hidden"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.07)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            }}
          >
            {/* Video / iframe */}
            <div className="w-full h-[260px] sm:h-[300px] bg-gray-100 overflow-hidden">
              {cookiesAccepted ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={project.iframeSrc}
                  title={language === "hu" ? project.titleHu : project.titleEn}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center gap-2 text-sm text-gray-500 p-6 text-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-gray-300">
                    <path d="M15 10l4.553-2.669A1 1 0 0121 8.232v7.536a1 1 0 01-1.447.901L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {language === "hu"
                    ? "A videó megtekintéséhez engedélyezd a sütiket."
                    : "Please accept cookies to view the video."}
                </div>
              )}
            </div>

            {/* Card body */}
            <div className="p-5">
              <h3 className="text-base font-semibold text-gray-900 leading-snug">
                {language === "hu" ? project.titleHu : project.titleEn}
              </h3>
              <div
                className="mt-3 pt-3"
                style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
              >
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {language === "hu"
                    ? project.descriptionHu
                    : project.descriptionEn}
                </p>
                {project.href && (
                  <a
                    href={project.href}
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold transition-colors duration-200"
                    style={{ color: "#1659c9" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#4ea8ff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#1659c9")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperWrapper;
