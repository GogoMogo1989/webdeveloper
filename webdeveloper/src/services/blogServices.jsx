const API_URL = "https://webpagerestapi.onrender.com/api/blog";

/* const API_URL = "http://localhost:3000/api/blog"; */

// Új blog létrehozása
export const createBlog = async ({ name, desc }) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, desc }),
    });

    if (!res.ok) throw new Error("Hiba a blog mentésekor!");
    return await res.text();
  } catch (error) {
    throw new Error(`createBlog: ${error.message}`);
  }
};

// Összes blog lekérdezése
export const getAllBlogs = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Hiba történt a blogok lekérésekor!");
    return await res.json();
  } catch (error) {
    throw new Error(`getAllBlogs: ${error.message}`);
  }
};

// Egy blog lekérdezése ID alapján
export const getBlogById = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Hiba a blog lekérdezésekor!");
    return await res.json();
  } catch (error) {
    throw new Error(`getBlogById: ${error.message}`);
  }
};
