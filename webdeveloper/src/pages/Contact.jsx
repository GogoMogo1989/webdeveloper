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
      className="w-full min-h-screen text-white flex justify-center items-center p-6 relative overflow-hidden"
      style={{ background: "#06080f" }}
    >
      {/* Decorative glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(22,89,201,0.12) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative w-full max-w-[1100px] flex flex-col lg:flex-row gap-12 lg:gap-20 pt-16 pb-16">

        {/* Left: info */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
            {language === "hu" ? "Dolgozzunk együtt" : "Let's work together"}
          </h1>
          <p className="text-sm sm:text-base text-white/55 leading-relaxed mb-10 max-w-[400px]">
            {language === "hu"
              ? "Ha bárminemű kérdésed van, szeretnél együttműködni, vagy csak bemutatkoznál – bátran keress meg!"
              : "Have a question, want to collaborate, or just want to say hi? Don't hesitate to reach out!"}
          </p>

          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(22,89,201,0.15)", border: "1px solid rgba(22,89,201,0.2)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#4ea8ff]">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <a
                href="mailto:kovacsfarkasdavid@gmail.com"
                className="text-sm sm:text-base text-white/70 hover:text-white transition-colors duration-200"
              >
                kovacsfarkasdavid@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(22,89,201,0.15)", border: "1px solid rgba(22,89,201,0.2)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#4ea8ff]">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <a
                href="tel:+36706320602"
                className="text-sm sm:text-base text-white/70 hover:text-white transition-colors duration-200"
              >
                +36 70 632 0602
              </a>
            </li>

            <li className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(22,89,201,0.15)", border: "1px solid rgba(22,89,201,0.2)" }}
              >
                <LinkedinIcon width="20" height="20" />
              </div>
              <a
                href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-white/70 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Right: form */}
        <div className="w-full lg:w-[55%]">
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-white/45 mb-2 uppercase tracking-wider">
                  {language === "hu" ? "Névd" : "Your name"}
                </label>
                <input
                  className="form-input"
                  type="text"
                  placeholder={language === "hu" ? "Pl. Kiss János" : "e.g. John Smith"}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/45 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  className="form-input"
                  type="email"
                  placeholder={language === "hu" ? "email@példa.hu" : "email@example.com"}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/45 mb-2 uppercase tracking-wider">
                  {language === "hu" ? "Üzenet" : "Message"}
                </label>
                <textarea
                  className="form-input resize-none"
                  placeholder={language === "hu" ? "Meséld el a projektedet..." : "Tell me about your project..."}
                  name="text"
                  rows="6"
                  value={formData.text}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="button-33 w-full py-3 text-base disabled:opacity-50"
                  disabled={status.loading}
                >
                  {status.loading
                    ? language === "hu"
                      ? "Küldés..."
                      : "Sending..."
                    : language === "hu"
                    ? "Üzenet küldése →"
                    : "Send Message →"}
                </button>
              </div>

              {status.success && (
                <p className="pt-1 text-emerald-400 text-sm text-center">{status.success}</p>
              )}
              {status.error && (
                <p className="pt-1 text-red-400 text-sm text-center">{status.error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
