import { useState, useEffect } from "react";
import { useLanguage } from "../context/languageContext";

const CookieConsent = ({ onAccept }) => {
  const [show, setShow] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShow(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
    onAccept();
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 flex flex-col md:flex-row justify-between items-center z-100">
      <p className="mb-2 md:mb-0 max-w-xl">
        {language === "hu"
          ? "Ez az oldal YouTube videókat használ, amelyek sütiket helyeznek el. Kérjük, fogadd el a sütik használatát a videók lejátszásához."
          : "This site uses YouTube videos that place cookies. Please accept the use of cookies to play the videos."}
      </p>
      <button onClick={acceptCookies} className="button-33">
        {language === "hu" ? "Elfogadom" : "Accept"}
      </button>
    </div>
  );
};

export default CookieConsent;
