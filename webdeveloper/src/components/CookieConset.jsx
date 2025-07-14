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

    const gtmScript = document.createElement("script");
    gtmScript.src =
      "https://www.googletagmanager.com/gtag/js?id=AW-17330617569";
    gtmScript.async = true;
    document.head.appendChild(gtmScript);

    // Inline config script
    const configScript = document.createElement("script");
    configScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17330617569');
  `;
    document.head.appendChild(configScript);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 flex flex-col md:flex-row justify-between items-center z-100">
      <p className="mb-2 md:mb-0 max-w-xl">
        {language === "hu"
          ? "Ez a weboldal sütiket használ a felhasználói élmény javítása érdekében. Kérjük, fogadd el a sütik használatát a folytatáshoz."
          : "This website uses cookies to enhance your user experience. Please accept the use of cookies to continue."}
      </p>
      <button onClick={acceptCookies} className="button-33">
        {language === "hu" ? "Elfogadom" : "Accept"}
      </button>
    </div>
  );
};

export default CookieConsent;
