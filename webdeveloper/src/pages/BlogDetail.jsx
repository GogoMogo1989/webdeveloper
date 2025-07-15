import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../services/blogServices";
import { useLanguage } from "../context/languageContext";
import "swiper/css";
import "swiper/css/effect-cube";
import Lottie from "lottie-react";
import swiperHint from "../assets/Swipe.json";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [blogs, setBlogs] = useState([]);
  const [initialSlide, setInitialSlide] = useState(0);

  useEffect(() => {
    const fetchBlogs = async () => {
      const result = await getAllBlogs();
      setBlogs(result);

      const currentIndex = result.findIndex((b) => b._id === id);
      if (currentIndex !== -1) setInitialSlide(currentIndex);
    };

    fetchBlogs();
  }, [id]);

  const handleSlideChange = (swiper) => {
    const newBlog = blogs[swiper.activeIndex];
    if (newBlog?._id !== id) {
      navigate(`/blog/${newBlog._id}#up`);
    }
  };

  if (!blogs.length) return null;

  return (
    <Swiper
      modules={[EffectCube]}
      effect="cube"
      cubeEffect={{
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={handleSlideChange}
      initialSlide={initialSlide}
      allowTouchMove={true}
      className="mySwiper"
    >
      {blogs.map((blog) => (
        <SwiperSlide key={blog._id}>
          <div className="relative min-h-screen bg-white text-black py-10 px-6 flex flex-col items-center">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none select-none"
              style={{ width: "420px", height: "330px" }}
            >
              <Lottie
                animationData={swiperHint}
                loop={false}
                autoplay={true}
                className="w-full h-full"
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid slice",
                  progressiveLoad: true,
                }}
              />
            </div>

            <div className="w-full max-w-[900px] bg-white shadow-lg rounded-lg p-8 mt-10">
              <button
                onClick={() => navigate("/blog#up")}
                className="text-gray-600 mb-6 underline comic-text cursor-pointer hover:text-[#1659c9] transition-colors duration-300"
              >
                {language === "hu" ? "← Vissza a bloghoz" : "← Back to Blogs"}
              </button>

              <h1 className="comic-text text-3xl sm:text-4xl font-bold text-center mb-4 text-black">
                {blog.name}
              </h1>

              <p className="regular-text text-sm text-gray-500 text-center mb-8">
                {blog.date}
              </p>

              <p className="regular-text text-lg text-gray-800 leading-relaxed whitespace-pre-line">
                {blog.desc}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogDetail;
