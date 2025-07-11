import HTML from "../assets/html (2).webp";
import CSS from "../assets/css (2).webp";
import Javascript from "../assets/javascript (2).webp";
import Github from "../assets/github (2).webp";
import Node from "../assets/node.webp";
import React2 from "../assets/react (2).webp";
import Tailwind from "../assets/tailwind (2).webp";
import ReactNative from "../assets/react-native (2).webp";
import MongoDB from "../assets/MongoDB (2).webp";
import Postman from "../assets/Postman (2).webp";
import Angular from "../assets/Angular (2).webp";
import Typescript from "../assets/typescript (2).webp";
import videoBackground2 from "../assets/background2.mp4";
import { useLanguage } from "../context/languageContext";

const Skills = () => {
  const { language } = useLanguage();

  const skillsData = [
    { src: HTML, title: "HTML" },
    { src: CSS, title: "CSS" },
    { src: Javascript, title: "Javascript" },
    { src: Node, title: "Node" },
    { src: Github, title: "Github" },
    { src: React2, title: "React" },
    { src: Tailwind, title: "Tailwind" },
    { src: ReactNative, title: "React-Native" },
    { src: MongoDB, title: "MongoDB" },
    { src: Postman, title: "Postman" },
    { src: Angular, title: "Angular" },
    { src: Typescript, title: "Typescript" },
  ];

  return (
    <div name="technologies" className="w-full h-[120vh] relative" id="skills">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoBackground2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="w-full lg:max-w-[50%] pt-20 px-6 sm:px-12 relative">
        <div className="text-left">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-white">
            {language === "hu" ? "Technológiák" : "Technologies"}
          </h1>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center relative">
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="hover:scale-110 duration-500 p-2">
              <img
                className="skill-card w-20 mx-auto mt-2.5"
                src={skill.src}
                alt={skill.title.toLowerCase()}
                title={skill.title}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
