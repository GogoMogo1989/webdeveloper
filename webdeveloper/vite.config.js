import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
import purgeCss from "vite-plugin-purgecss";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteImagemin({
      webp: {
        quality: 60,
      },
    }),
    purgeCss({
      content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
      safelist: ["safe-class"], // opcionális
    }),
  ],
});
