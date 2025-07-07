import Lottie from "lottie-react";
import Animation from "../assets/Animation.json";

const Suspense = () => {
  return (
    <div className="w-full h-screen text-black flex flex-col items-center py-16 bg-white">
      <div className="flex justify-center items-center w-full h-full">
        <Lottie
          animationData={Animation}
          loop={true}
          autoplay={true}
          className="w-[200px] h-[200px]"
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true,
          }}
        />
      </div>
    </div>
  );
};

export default Suspense;
