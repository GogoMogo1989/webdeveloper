const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = "b14a5538-4a74-445f-b6b5-560dc3c2b8f5";

export const sendMail = async ({ name, email, text }) => {
  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: `Új üzenet a portfolióból – ${name}`,
        name,
        email,
        message: text,
      }),
    });

    const result = await response.json();

    console.log("📧 Web3Forms válasz:", result);

    if (!result.success) {
      throw new Error(result.message || "Ismeretlen hiba");
    }

    return result;
  } catch (err) {
    console.error("❌ E-mail küldési hiba:", err);
    throw err;
  }
};
