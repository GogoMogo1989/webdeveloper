import React, { useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Work = () => {
  const swiperRef = useRef(null);

  const cont = [
    {
      title: "Zsandi Beauty",
      iframeSrc: "https://www.youtube.com/embed/fmZzmdhABos?autoplay=1&mute=1",
      href: "https://zsandi.netlify.app/",
      description:
        "A weboldalt egy kedves ismerősömnek készítettem, aki régóta szeretett volna egy weboldalt ahol az ügyfelei tudnak időpontot foglalni és ami nem utolsó sorban mutatós is!",
    },
    {
      title: "Program Budapest App",
      iframeSrc: "https://www.youtube.com/embed/BXY-2ML3JVc?autoplay=1&mute=1",
      description: `Ez a projekt nagyon közel áll a hozzám, életem első önálló mobilapplikációja amit felkérésre készítettem el. Az applikáció feladata a különböző programok, éttermek, kávézók, pubok, közötti szűrés, név, típus, konyha és még sok más kritérium alapján. Továbbá üzleti igényként megfogalmazódott a QR code olvasás különböző akciókhoz, és a "közelben" funkció ami megmutatja a Google Maps által a közelünkben lévő eseményeket, helyeket.`,
    },
    {
      title: "Italian Pizza Customer",
      iframeSrc: "https://www.youtube.com/embed/Wu0I6sEoDZQ?autoplay=1&mute=1",
      href: "https://italianpizzabudapest.netlify.app/",
      description:
        "Ez az oldal egy bemutató platform azok számára, akik szeretnének termékeket online vásárolni, akár készpénzben, akár bankkártyával. A vásárlást könnyedén és gyorsan intézheted, ráadásul minden tranzakcióról email visszaigazolást küldünk, hogy biztos lehess a rendelésed státuszában. Az oldal lehetőséget biztosít arra is, hogy regisztrálj, így könnyebb és gyorsabban vásárolhatsz legközelebb. Ha nem szeretnél regisztrálni, semmi gond! Az oldal lehetőséget biztosít vendég vásárlásra is, így bárki könnyedén rendelhet anélkül, hogy fiókot kellene létrehoznia. Ez a bemutató oldal célja, hogy bemutassa, hogyan lehet egyszerűsíteni az online vásárlást, és elérhetővé tegye a termékek gyors rendelését mindenki számára.",
    },
    {
      title: "Italian Pizza Admin",
      iframeSrc: "https://www.youtube.com/embed/u8j23NNbW8s?autoplay=1&mute=1",
      href: "https://italianpizzabudapest.netlify.app/adminlogin",
      description:
        "Ez az adminisztrációs felület a Italian Pizza oldal kezelésére szolgál, ahol könnyedén módosíthatod, törölheted vagy hozzáadhatod a termékeket. Az admin felületen a pizzák és egyéb termékek listáját bármikor frissítheted, így mindig naprakész és változatos kínálatot biztosíthatsz vásárlóidnak. Az adminisztrátorok ezen a felületen követhetik a beérkezett rendeléseket, módosíthatják azokat, törölhetik, vagy akár új státuszt rendelhetnek hozzájuk. Ha egy rendelés valamilyen okból módosításra szorul, az admin felületen ezt gyorsan és egyszerűen intézheted. Ez a felület biztosítja a teljes kontrollt az oldal működtetése felett, így lehetőséget ad arra, hogy gördülékenyen és hatékonyan kezeld az online rendeléseket és termékkínálatot.",
    },
    {
      title: "Italian Pizza App",
      iframeSrc: "https://www.youtube.com/embed/yoVXrvB-f4Y?autoplay=1&mute=1",
      description:
        "A Italian Pizza mobilalkalmazás egy kényelmes és gyors módja annak, hogy bárhol és bármikor rendelhess pizzát és egyéb finomságokat közvetlenül a telefonodról. Az alkalmazás felhasználóbarát felülete lehetővé teszi, hogy könnyedén böngéssz a kínálatunkban, válaszd ki kedvenc ételidet, és tedd meg a rendelésedet mindössze pár kattintással. Ráadásul lehetőséged van gyors, kényelmes vásárlásra akár bankkártyával, akár készpénzes fizetéssel, és minden rendelésről email visszaigazolást kapsz. Ha szeretnél regisztrálni, akkor könnyedén mentheted a kedvenc rendeléseidet és gyorsíthatod a jövőbeli vásárlásokat. Az alkalmazás felhasználói fiókkal vagy anélkül is működik, így akkor is vásárolhatsz, ha nem szeretnél fiókot létrehozni.",
    },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", () => {
        const activeSlide =
          swiperRef.current.swiper.slides[swiperRef.current.swiper.activeIndex];
        const iframe = activeSlide.querySelector("iframe");
        if (iframe) {
          const src = iframe.src;
          iframe.src = "";
          iframe.src = src;
        }
      });
    }
  }, []);

  return (
    <div className="h-[210vh] relative">
      <div className="w-full  lg:max-w-[20%] px-6 sm:px-12 pt-20">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-black">
          Eddigi
        </h1>
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-[#1659c9] mb-20">
          munkáim:
        </h1>
      </div>
      <div
        name="work"
        className="w-full  min-h-screen text-black bg-white relative flex flex-col lg:flex-row items-center justify-center"
      >
        <div className="w-full max-w-[80%] lg:max-w-[80%] px-6 py-10">
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            grabCursor={true}
            centeredSlides={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
            speed={1500}
            className="w-full"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {cont.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[400px] bg-cover bg-center rounded-md">
                  <iframe
                    width="100%"
                    height="100%"
                    src={project.iframeSrc}
                    title={project.title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="p-2 mt-2">
                  <span className="text-sm text-gray-400 tracking-wide">
                    {project.title}
                  </span>
                  <div className="pt-1">
                    <p className="text-sm text-gray-400">
                      {project.description}
                    </p>
                    {project.href && (
                      <a
                        href={project.href}
                        className="text-sm text-gray-400 font-medium underline pl-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <p className="absolute bottom-4 right-4 text-lg font-semibold text-gray-400 opacity-60">
        Munkáim
      </p>
    </div>
  );
};

export default Work;
