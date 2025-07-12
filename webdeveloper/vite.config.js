import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
import purgecss from "vite-plugin-purgecss";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteImagemin({
      webp: {
        quality: 60,
      },
    }),
    purgecss({
      content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("swiper")) {
            return "swiper";
          }
        },
      },
    },
  },
});
