import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllBlogs } from "../services/blogServices";
import { useLanguage } from "../context/languageContext";
import Suspense from "../pages/Suspense";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogs = await getAllBlogs();
        const current = blogs.find((b) => b._id === id);
        if (!current) throw new Error("Nem található blog");

        setBlog(current);

        const currentIndex = blogs.findIndex((b) => b._id === id);
        setPrev(blogs[currentIndex - 1] || null);
        setNext(blogs[currentIndex + 1] || null);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Hiba történt a blog betöltése közben.");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <Suspense />;
  if (error) return <p>{error}</p>;
  if (!blog)
    return (
      <p>{language === "hu" ? "Cikk nem található" : "Blog doesn't exist"}</p>
    );

  return (
    <div className="min-h-screen bg-white text-black py-10 px-6 flex flex-col items-center">
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

        <div className="flex justify-between mt-12">
          <button
            onClick={() => navigate(`/blog/${prev?._id}#up`)}
            disabled={!prev}
            className={`button-33 px-4 py-2 text-sm sm:text-base rounded-lg transition-transform duration-300 ${
              !prev
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-105 bg-purple-600 text-white"
            }`}
          >
            {language === "hu" ? "Előző" : "Back"}
          </button>

          <button
            onClick={() => navigate(`/blog/${next?._id}#up`)}
            disabled={!next}
            className={`button-33 px-4 py-2 text-sm sm:text-base rounded-lg transition-transform duration-300 ${
              !next
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-105 bg-purple-600 text-white"
            }`}
          >
            {language === "hu" ? "Következő" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
