import { useState } from "react";
import { sendMail } from "../services/sendMailServices";
import { useLanguage } from "../context/languageContext";
import LinkedinIcon from "../Icons/Linkedin";

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await sendMail(formData);
      setStatus({ loading: false, success: res.message, error: null });
      setFormData({ name: "", email: "", text: "" });
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error:
          err.message ||
          (language === "hu" ? "Ismeretlen hiba" : "Unknown error"),
      });
    }
  };

  return (
    <div
      name="contact"
      id="contact"
      className=" w-full h-[140vh] min-h-screen text-black bg-black flex justify-center items-center p-4 relative"
    >
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:max-w-[50%] px-8 pt-20 space-y-8">
          <div className="text-left">
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-white">
              {language === "hu" ? "Elérhetőségeim:" : "Get in Touch:"}
            </h1>
          </div>

          <div className="pb-8">
            <p className="text-sm sm:text-lg text-white">
              {language === "hu"
                ? "Ha bárminemű kérdésed van és szeretnél kapcsolatba lépni velem, vagy együttműködni, bátran küldj egy e-mailt az alábbi címre, de telefonon is kereshetsz!"
                : "If you have any questions or would like to collaborate, feel free to send me an email below, or call me!"}
            </p>

            <ul className="list-none">
              <li className="text-sm sm:text-base">
                📧
                <a
                  href="mailto:kovacsfarkasdavid@gmail.com"
                  className="text-[#4ea8ff] underline"
                >
                  kovacsfarkasdavid@gmail.com
                </a>
              </li>

              <li className="text-sm sm:text-base">
                📞
                <a href="tel:+36706320602" className="text-[#4ea8ff] underline">
                  +36 70 632 0602
                </a>
              </li>

              <li className="flex flex-col pt-4">
                <a
                  className="w-1 text-white text-4xl hover:text-[#1659c9]"
                  href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon width="32" height="32" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:max-w-[50%] px-8 py-10 space-y-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-[600px] w-full"
          >
            <input
              className="bg-gray-100 p-2 text-black font-medium"
              type="text"
              placeholder={language === "hu" ? "Név" : "Name"}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              className="my-4 p-2 bg-gray-100 text-black font-medium"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              className="bg-gray-100 p-2 text-black font-medium"
              placeholder={language === "hu" ? "Üzenet" : "Message"}
              name="text"
              rows="10"
              value={formData.text}
              onChange={handleChange}
              required
            />
            <div className="pt-3">
              <button
                type="submit"
                className="button-33 disabled:opacity-50"
                disabled={status.loading}
              >
                {status.loading
                  ? language === "hu"
                    ? "Küldés..."
                    : "Sending..."
                  : language === "hu"
                  ? "Küldés"
                  : "Send"}
              </button>
            </div>

            {status.success && (
              <p className="pt-3 text-green-400">{status.success}</p>
            )}

            {status.error && (
              <p className="pt-3 text-red-400">{status.error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
