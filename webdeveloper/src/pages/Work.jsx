import React, { useState, useEffect, Suspense } from "react";
import { useLanguage } from "../context/languageContext";
import CookieConsent from "../components/CookieConset";

const Work = () => {
  const { language } = useLanguage();
  const [cookiesAccepted, setCookiesAccepted] = useState(
    () => localStorage.getItem("cookieConsent") === "true"
  );

  const [loadSwiper, setLoadSwiper] = useState(false);

  const SwiperWrapper = React.lazy(() => import("../components/SwiperWrapper"));

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const projects = [
    {
      iframeSrc: "https://www.youtube.com/embed/eLr0_iJfrfw?autoplay=1&mute=1",
      href: "https://zsandi.netlify.app/",
      titleHu: "Zsandi Beauty",
      titleEn: "Zsandi Beauty",
      descriptionHu:
        "Egy kedves ismerősömnek készítettem ezt a weboldalt, aki régóta szeretett volna egy olyan platformot, ahol blogolhat a legújabb kozmetikai technológiákról és eszközökről, valamint ahol az ügyfelei könnyedén időpontot foglalhatnak.",
      descriptionEn:
        "I built this website for a friend who wanted a platform to blog about the latest beauty technologies and tools, while letting her clients easily book appointments.",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/BXY-2ML3JVc?autoplay=1&mute=1",
      titleHu: "Program Budapest App",
      titleEn: "Program Budapest App",
      descriptionHu:
        "Ez a projekt nagyon közel áll hozzám, életem első önálló mobilapplikációja, amit felkérésre készítettem. Az alkalmazás a különböző programok, éttermek, kávézók és pubok szűrését teszi lehetővé név, típus, konyha és sok más kritérium alapján.",
      descriptionEn:
        "This project is close to my heart – my very first solo mobile app, built on commission. Users can filter programs, restaurants, cafés and pubs by name, type, cuisine and more.",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/Wu0I6sEoDZQ?autoplay=1&mute=1",
      href: "https://italianpizzabudapest.netlify.app/",
      titleHu: "Italian Pizza Customer",
      titleEn: "Italian Pizza Customer",
      descriptionHu:
        "Ez az oldal egy bemutató platform azok számára, akik szeretnének termékeket online vásárolni készpénzzel vagy bankkártyával. A vásárlást könnyedén és gyorsan intézheted, minden tranzakcióról email visszaigazolást küldünk.",
      descriptionEn:
        "A showcase webshop for those who want to buy products online with cash or card. Checkout is quick and easy, and every transaction triggers an email confirmation.",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/u8j23NNbW8s?autoplay=1&mute=1",
      href: "https://italianpizzabudapest.netlify.app/adminlogin",
      titleHu: "Italian Pizza Admin",
      titleEn: "Italian Pizza Admin",
      descriptionHu:
        "Ez az adminisztrációs felület az Italian Pizza oldal kezelésére szolgál. Könnyedén módosíthatod, törölheted vagy hozzáadhatod a termékeket; frissítheted a kínálatot, kezelheted a rendelések státuszát.",
      descriptionEn:
        "This admin dashboard controls the Italian Pizza site. You can edit, delete or add products, update the menu, and manage order statuses.",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/yoVXrvB-f4Y?autoplay=1&mute=1",
      titleHu: "Italian Pizza App",
      titleEn: "Italian Pizza App",
      descriptionHu:
        "A Italian Pizza mobilalkalmazás kényelmes és gyors módja annak, hogy bárhol és bármikor rendelhess pizzát. Felhasználóbarát felület, gyors vásárlás bankkártyával vagy készpénzzel.",
      descriptionEn:
        "The Italian Pizza mobile app lets you order pizza anytime, anywhere. A user-friendly interface, quick checkout with card or cash, and email confirmations for every order.",
    },
  ];

  return (
    <div className="relative bg-white" id="work" style={{ minHeight: "100vh" }}>
      {!cookiesAccepted && (
        <CookieConsent onAccept={() => setCookiesAccepted(true)} />
      )}

      {/* Section header */}
      <div className="w-full px-6 sm:px-12 pt-24 pb-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black leading-tight">
          {language === "hu" ? "Kiemelt" : "Featured"}
        </h1>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-2" style={{ color: "#1659c9" }}>
          {language === "hu" ? "munkáim:" : "projects:"}
        </h1>
        <p className="text-sm text-gray-500 max-w-[500px] mt-3 leading-relaxed">
          {language === "hu"
            ? "Valódi projektek, amelyeket az igényekre szabva terveztem és fejlesztettem."
            : "Real-world projects designed and built to meet specific client needs."}
        </p>
      </div>

      {/* Swiper */}
      <div
        name="work"
        className="w-full bg-white relative flex flex-col items-center justify-center pb-20"
      >
        <div className="w-full max-w-[90%] lg:max-w-[85%] px-4">
          {loadSwiper ? (
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-64 text-gray-400 text-sm">
                  {language === "hu" ? "Betöltés..." : "Loading..."}
                </div>
              }
            >
              <SwiperWrapper
                projects={projects}
                language={language}
                cookiesAccepted={cookiesAccepted}
              />
            </Suspense>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-400 text-sm">
              {language === "hu" ? "Betöltés..." : "Loading..."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
