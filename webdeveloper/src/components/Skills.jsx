import React from "react";
import HTML from "../assets/html.webp";
import CSS from "../assets/css.webp";
import Javascript from "../assets/javascript.webp";
import Github from "../assets/github.webp";
import Node from "../assets/node.webp";
import React2 from "../assets/react.webp";
import Tailwind from "../assets/tailwind.webp";
import ReactNative from "../assets/react-native.webp";
import MongoDB from "../assets/MongoDB.webp";
import Postman from "../assets/Postman.webp";
import Angular from "../assets/Angular.webp";
import Typescript from "../assets/typescript.webp";
import videoBackground2 from "../assets/background2.mp4";

const Skills = () => {
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
    <div name="technologies" className="w-full h-[120vh] relative">
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
            Használt
          </h1>
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-[#1659c9]">
            technológák:
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
              />
            </div>
          ))}
        </div>
      </div>
      <p className="absolute bottom-4 right-4 text-lg font-semibold text-gray-400 opacity-60">
        Technológiák
      </p>
    </div>
  );
};

export default Skills;
