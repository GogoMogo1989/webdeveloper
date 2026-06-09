import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function ProjectCard({ project, language, cookiesAccepted }) {
  const [expanded, setExpanded] = useState(false);

  return (
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
          />
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
          <p
            className={`text-sm text-gray-500 leading-relaxed transition-all duration-300 ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {language === "hu" ? project.descriptionHu : project.descriptionEn}
          </p>

          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-2 text-xs font-medium transition-colors duration-200 cursor-pointer"
            style={{ color: "#1659c9" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#4ea8ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1659c9")}
          >
            {expanded
              ? language === "hu" ? "▲ Kevesebb" : "▲ Show less"
              : language === "hu" ? "▼ Tovább..." : "▼ Read more"}
          </button>

          {project.href && (
            <a
              href={project.href}
              className="flex items-center gap-1.5 mt-3 text-sm font-semibold transition-colors duration-200"
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

          {(project.hrefIos || project.hrefAndroid) && (
            <div className="flex flex-wrap gap-2 mt-3">
              {project.hrefIos && (
                <a
                  href={project.hrefIos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-opacity duration-200 hover:opacity-80"
                  style={{ background: "#1659c9" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </a>
              )}
              {project.hrefAndroid && (
                <a
                  href={project.hrefAndroid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-opacity duration-200 hover:opacity-80"
                  style={{ background: "#1659c9" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.341a.96.96 0 01-.96-.96V9.619a.96.96 0 011.92 0v4.762a.96.96 0 01-.96.96zm-11.046 0a.96.96 0 01-.96-.96V9.619a.96.96 0 011.92 0v4.762a.96.96 0 01-.96.96zM6.617 8.66a.48.48 0 01-.48-.48V5.52a.48.48 0 01.96 0v2.66a.48.48 0 01-.48.48zm10.766 0a.48.48 0 01-.48-.48V5.52a.48.48 0 01.96 0v2.66a.48.48 0 01-.48.48zM8.457 18.48a.96.96 0 01-.96-.96v-7.2h9.006v7.2a.96.96 0 01-.96.96H8.457zm3.063-14.4l.72-1.44a.24.24 0 10-.432-.216l-.756 1.512A5.28 5.28 0 007.2 7.44h9.6a5.28 5.28 0 00-4.852-3.36h-.428zm-1.844 2.4a.48.48 0 110-.96.48.48 0 010 .96zm4.648 0a.48.48 0 110-.96.48.48 0 010 .96z"/>
                  </svg>
                  Google Play
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

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
          <ProjectCard
            project={project}
            language={language}
            cookiesAccepted={cookiesAccepted}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperWrapper;
