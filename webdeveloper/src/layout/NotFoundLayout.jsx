import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFoundLayout = () => {
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
      <NotFound />
      <Footer />
    </div>
  );
};

export default NotFoundLayout;
