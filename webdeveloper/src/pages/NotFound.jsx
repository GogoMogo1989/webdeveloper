import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const NotFound = () => {
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-[80vh] text-white flex justify-center items-center relative">
      <div
        ref={titleRef}
        className="w-full h-[10vh] md:w-1/2 md:h-full flex flex-col items-center justify-center"
      >
        <h1 className="flex flex-wrap text-6xl sm:text-7xl font-bold text-[#1659c9]">
          404
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
