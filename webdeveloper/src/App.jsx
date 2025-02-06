import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div>
        <Navbar />
        <Home />
        <Services />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
