import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteImagemin({
      webp: {
        quality: 60,
      },
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
