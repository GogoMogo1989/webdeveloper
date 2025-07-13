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
            // Külön chunk-ok a nehezebb könyvtáraknak
            if (id.includes("gsap")) {
              return "vendor_gsap";
            }
            if (id.includes("lodash")) {
              return "vendor_lodash";
            }
            if (id.includes("react")) {
              return "vendor_react";
            }
            if (id.includes("swiper")) {
              return "vendor_swiper";
            }
            if (id.includes("firebase")) {
              return "vendor_firebase";
            }
            // Minden más node_modules könyvtárban lévő
            return "vendor";
          }

          // Külön chunk az útvonal alapján
          if (id.includes("/src/pages/")) {
            const matches = id.match(/\/src\/pages\/(.*?)\//);
            return matches ? `page_${matches[1]}` : null;
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
