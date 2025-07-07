/* const API_URL = "http://localhost:3000/api/sendmail"; */

const API_URL = "https://webpagerestapi.onrender.com/api/sendmail";

export const sendMail = async (mailData) => {
  try {
    const response = await fetch(`${API_URL}/sendmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Ismeretlen hiba");
    }

    return result;
  } catch (err) {
    console.error("❌ E-mail küldési hiba:", err);
    throw err;
  }
};
