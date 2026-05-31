import HTML from "../assets/html (3).webp";
import CSS from "../assets/css (3).webp";
import Javascript from "../assets/javascript (3).webp";
import Github from "../assets/github (3).webp";
import Node from "../assets/node (2).webp";
import React2 from "../assets/react (3).webp";
import Tailwind from "../assets/tailwind (3).webp";
import ReactNative from "../assets/react-native (4).webp";
import MongoDB from "../assets/MongoDB (3).webp";
import Postman from "../assets/Postman (3).webp";
import Angular from "../assets/Angular (3).webp";
import Typescript from "../assets/typescript (4).webp";
import NextJs from "../assets/Next.js.png";
import NestJs from "../assets/Nest.js.png";
import videoBackground2 from "../assets/background2.mp4";
import { useLanguage } from "../context/languageContext";

const Skills = () => {
  const { language } = useLanguage();

  const skillsData = [
    { src: HTML, title: "HTML" },
    { src: CSS, title: "CSS" },
    { src: Javascript, title: "JavaScript" },
    { src: Typescript, title: "TypeScript" },
    { src: React2, title: "React" },
    { src: NextJs, title: "Next.js" },
    { src: Node, title: "Node.js" },
    { src: NestJs, title: "NestJS" },
    { src: ReactNative, title: "React Native" },
    { src: Angular, title: "Angular" },
    { src: Tailwind, title: "Tailwind" },
    { src: MongoDB, title: "MongoDB" },
    { src: Github, title: "GitHub" },
    { src: Postman, title: "Postman" },
  ];

  return (
    <div name="technologies" className="w-full min-h-screen relative" id="skills">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoBackground2} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(4, 6, 14, 0.72)" }}
      />

      {/* Content */}
      <div className="relative w-full pt-24 pb-24 px-6 sm:px-12 flex flex-col">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            {language === "hu" ? "Technológiák" : "Technologies"}
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight" style={{ color: "#1659c9" }}>
            {language === "hu" ? "amiket használok" : "I work with"}
          </h1>
        </div>

        <div className="max-w-[960px] mx-auto w-full">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="card flex flex-col items-center py-5 px-3 hover:scale-105 duration-300 cursor-default group"
              >
                <img
                  className="w-11 h-11 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                  src={skill.src}
                  alt={skill.title.toLowerCase()}
                  title={skill.title}
                  loading="lazy"
                />
                <span className="text-white/65 text-xs font-medium mt-2.5 text-center leading-tight">
                  {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
