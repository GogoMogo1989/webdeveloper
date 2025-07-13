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
          // 1. Külön chunk a nehéz könyvtáraknak
          if (id.includes("node_modules")) {
            // Fontos: a pontosabb mintaillesztés miatt regex használata
            const libMatch = id.match(/node_modules\/(.*?)(\/|$)/);
            if (!libMatch) return "vendor";

            const libName = libMatch[1];

            // Fő könyvtárak külön chunkban
            const coreLibs = [
              "gsap",
              "lodash",
              "react",
              "swiper",
              "firebase",
              "three",
            ];
            if (coreLibs.some((lib) => libName.includes(lib))) {
              return `vendor_${libName.split("/")[0]}`; // pl. vendor_gsap
            }

            // React-rel kapcsolatos könyvtárak csoportosítása
            if (
              ["react-router", "react-dom", "@remix-run"].some((lib) =>
                libName.includes(lib)
              )
            ) {
              return "vendor_react_runtime";
            }

            return "vendor"; // Általános vendor chunk
          }

          // 2. Útvonal-alapú code splitting
          if (id.includes("/src/")) {
            // Layout komponensek külön
            if (id.includes("/src/layouts/")) {
              return "layout";
            }

            // Oldal-specifikus chunkok
            const pageMatch = id.match(/\/src\/pages\/(.*?)\//);
            if (pageMatch) {
              return `page_${pageMatch[1].replace(/\//g, "_")}`; // pl. page_Product_Detail
            }

            // Shared komponensek
            if (id.includes("/src/components/")) {
              const componentMatch = id.match(/\/src\/components\/(.*?)\//);
              if (componentMatch) {
                return `component_${componentMatch[1]}`;
              }
            }
          }
        },
        chunkFileNames: (chunkInfo) => {
          // Hash rövidítése és dinamikus fájlnevek
          const isVendor = chunkInfo.name.startsWith("vendor");
          return isVendor
            ? "assets/[name]-[hash:8].js" // pl. vendor_react-a1b2c3d4.js
            : "assets/[name]/[name]-[hash:6].js"; // pl. page_Product/product-a1b2c3.js
        },
        // Chunk méretkorlátok
        chunkSizeWarningLimit: 1024 * 1024, // 1MB
        maxParallelFileOps: 3, // Párhuzamos fájlfeldolgozás
      },
    },
  },
});
