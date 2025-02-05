import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Github from "../assets/github.png";
import Node from "../assets/node.png";
import React2 from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import ReactNative from "../assets/react-native.png";
import MongoDB from "../assets/MongoDB.png";
import Postman from "../assets/Postman.png";
import Angular from "../assets/Angular.png";
import Typescript from "../assets/typescript.png";
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
            technológiák:
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
