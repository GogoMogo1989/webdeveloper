import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
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
        chunkFileNames: "assets/[name]-[hash].js",
      },
    },
    sourcemap: false, // gyorsabb build és kisebb fájlok
    minify: "terser", // alapértelmezett, de explicit megadhatod
  },
});
