import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBlogs } from "../services/blogServices";
import { useLanguage } from "../context/languageContext";

const BlogDisplay = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await getAllBlogs();
        setBlogs(fetchedBlogs);
      } catch (err) {
        setError("Hiba történt a blogok lekérésekor.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="text-black min-h-screen relative flex flex-col items-center justify-start bg-white py-10 ">
      <div className="flex flex-wrap justify-center gap-6 px-6 max-w-[1200px] mt-20">
        {[...blogs].reverse().map((project, index) => (
          <div
            key={index}
            className="card card2 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-between w-full sm:w-[30%] md:w-[22%] min-h-[250px] sm:min-h-[300px] hover:scale-105 duration-500"
          >
            <p className="text-xs text-gray-500 mb-2 text-center">
              {project.date}
            </p>
            <h3 className="text-base sm:text-lg font-semibold mb-1 text-center">
              {project.name}
            </h3>
            <p className="text-center text-gray-600 flex-grow text-xs sm:text-sm mb-4">
              {project.desc.length > 120
                ? project.desc.slice(0, 120) + "..."
                : project.desc}
            </p>
            <button
              className="button-33 px-3 py-2 text-sm"
              onClick={() => navigate(`/blog/${project._id ?? project.id}#up`)}
            >
              {language === "hu" ? "Elolvasom" : "Read"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDisplay;
