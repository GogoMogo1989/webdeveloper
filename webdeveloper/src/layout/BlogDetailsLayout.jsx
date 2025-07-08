import BlogDetails from "../pages/BlogDetail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BlogDetailsLayout = () => {
  const { hash } = useLocation();
  const isNavbarVisible = true;

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div id="up">
      <Navbar isVisible={isNavbarVisible} />
      <BlogDetails />
      <Footer />
    </div>
  );
};

export default BlogDetailsLayout;
