const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = "4bbbaef3-860e-46c2-b4b6-ed59378fbb6e";

export const sendMail = async ({ name, email, text }) => {
  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        name,
        email,
        message: text,
      }),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || "Ismeretlen hiba");
    }

    return result;
  } catch (err) {
    console.error("❌ E-mail küldési hiba:", err);
    throw err;
  }
};
