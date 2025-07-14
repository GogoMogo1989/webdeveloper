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
        "Ez a projekt nagyon közel áll hozzám, életem első önálló mobilapplikációja, amit felkérésre készítettem. Az alkalmazás a különböző programok, éttermek, kávézók és pubok szűrését teszi lehetővé név, típus, konyha és sok más kritérium alapján. Üzleti igényként megfogalmazódott a QR‑kód olvasás akciókhoz, valamint a 'közelben' funkció, ami a Google Maps segítségével mutatja a közeli eseményeket és helyeket.",
      descriptionEn:
        "This project is close to my heart – my very first solo mobile app, built on commission. Users can filter programs, restaurants, cafés and pubs by name, type, cuisine and more. Business requirements included QR‑code scanning for promos and a 'nearby' feature that shows events and venues around you via Google Maps.",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/Wu0I6sEoDZQ?autoplay=1&mute=1",
      href: "https://italianpizzabudapest.netlify.app/",
      titleHu: "Italian Pizza Customer",
      titleEn: "Italian Pizza Customer",
      descriptionHu:
        "Ez az oldal egy bemutató platform azok számára, akik szeretnének termékeket online vásárolni készpénzzel vagy bankkártyával. A vásárlást könnyedén és gyorsan intézheted, minden tranzakcióról email visszaigazolást küldünk. Regisztrálhatsz a gyorsabb vásárlásért, de vendégként is rendelhetsz. A cél: megmutatni, hogyan egyszerűsíthető az online vásárlás, és hogyan tehető elérhetővé a gyors rendelés mindenki számára.",
      descriptionEn:
        "A showcase webshop for those who want to buy products online with cash or card. Checkout is quick and easy, and every transaction triggers an email confirmation. You can register for faster future orders, or buy as a guest. The goal is to demonstrate how online shopping can be simplified and made accessible to all.",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/u8j23NNbW8s?autoplay=1&mute=1",
      href: "https://italianpizzabudapest.netlify.app/adminlogin",
      titleHu: "Italian Pizza Admin",
      titleEn: "Italian Pizza Admin",
      descriptionHu:
        "Ez az adminisztrációs felület az Italian Pizza oldal kezelésére szolgál. Könnyedén módosíthatod, törölheted vagy hozzáadhatod a termékeket; frissítheted a kínálatot, kezelheted a rendelések státuszát. Teljes kontrollt ad a webshop működtetése felett, hogy gördülékenyen és hatékonyan kezeld az online rendeléseket.",
      descriptionEn:
        "This admin dashboard controls the Italian Pizza site. You can edit, delete or add products, update the menu, and manage order statuses. It provides full control over the webshop to keep operations smooth and efficient.",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/yoVXrvB-f4Y?autoplay=1&mute=1",
      titleHu: "Italian Pizza App",
      titleEn: "Italian Pizza App",
      descriptionHu:
        "A Italian Pizza mobilalkalmazás kényelmes és gyors módja annak, hogy bárhol és bármikor rendelhess pizzát. Felhasználóbarát felület, gyors vásárlás bankkártyával vagy készpénzzel, email visszaigazolás minden rendelésről. Regisztrációval mentheted kedvenceidet, de regisztráció nélkül is vásárolhatsz.",
      descriptionEn:
        "The Italian Pizza mobile app lets you order pizza anytime, anywhere. A user‑friendly interface, quick checkout with card or cash, and email confirmations for every order. Register to save favourites – or order without an account if you prefer.",
    },
  ];

  const headerTop = language === "hu" ? "Kiemelt" : "Featured";
  const headerBottom = language === "hu" ? "munkáim:" : "projects:";

  return (
    <div className="h-[180vh] relative bg-white" id="work">
      {!cookiesAccepted && (
        <CookieConsent onAccept={() => setCookiesAccepted(true)} />
      )}
      <div className="w-full lg:max-w-[20%] px-6 sm:px-12 pt-20">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-black">
          {language === "hu" ? "Kiemelt" : "Featured"}
        </h1>
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-[#1659c9] mb-20">
          {language === "hu" ? "munkáim:" : "projects:"}
        </h1>
      </div>

      <div
        name="work"
        className="w-full min-h-screen text-black bg-white relative flex flex-col lg:flex-row items-center justify-center"
      >
        <div className="w-full max-w-[80%] lg:max-w-[80%] px-6 py-10">
          {loadSwiper ? (
            <Suspense fallback={<div>Loading slider...</div>}>
              <SwiperWrapper
                projects={projects}
                language={language}
                cookiesAccepted={cookiesAccepted}
              />
            </Suspense>
          ) : (
            <div>A slider betöltése folyamatban...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
