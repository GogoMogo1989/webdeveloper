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
            // Regex pontosabb mintaillesztéshez
            const libMatch = id.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
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
            if (coreLibs.some((lib) => libName.startsWith(lib))) {
              return `vendor_${libName.split("/")[0]}`;
            }

            // React-rel kapcsolatos könyvtárak csoportosítása
            if (
              ["react-router", "react-dom", "@remix-run"].some((lib) =>
                libName.startsWith(lib)
              )
            ) {
              return "vendor_react_runtime";
            }

            return "vendor";
          }

          // 2. Útvonal-alapú code splitting
          if (id.includes("/src/")) {
            // Layout komponensek
            if (id.includes("/src/layouts/")) {
              return "layout";
            }

            // Oldal-specifikus chunkok
            const pageMatch = id.match(/[\\/]src[\\/]pages[\\/](.*?)([\\/]|$)/);
            if (pageMatch) {
              return `page_${pageMatch[1].replace(/[\\/]/g, "_")}`;
            }

            // Shared komponensek
            if (id.includes("/src/components/")) {
              const componentMatch = id.match(
                /[\\/]src[\\/]components[\\/](.*?)([\\/]|$)/
              );
              if (componentMatch) {
                return `component_${componentMatch[1]}`;
              }
            }
          }
        },
        chunkFileNames: (chunkInfo) => {
          // Hash rövidítése és dinamikus fájlnevek
          const isVendor = chunkInfo.name.startsWith("vendor");
          const isPage = chunkInfo.name.startsWith("page_");

          // Windows kompatibilis útvonalak
          const normalizePath = (path) => path.replace(/\\/g, "/");

          if (isVendor) {
            return normalizePath(`assets/vendor/[name]-[hash:8].js`);
          } else if (isPage) {
            const pageName = chunkInfo.name.replace("page_", "");
            return normalizePath(`assets/pages/${pageName}/[name]-[hash:6].js`);
          }
          return normalizePath(`assets/chunks/[name]-[hash:6].js`);
        },
        assetFileNames: (assetInfo) => {
          // Statikus asset-ek szervezése
          if (/\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (/\.css$/.test(assetInfo.name)) {
            return "assets/css/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        // Chunk méretkorlátok
        chunkSizeWarningLimit: 1024 * 1024, // 1MB
        maxParallelFileOps: 3,
        // Jobb hash generálás
        entryFileNames: "assets/[name]-[hash].js",
        // Windows kompatibilitás
        paths: (id) => id.replace(/\\/g, "/"),
      },
      // Jobb fa-shaking
      preserveEntrySignatures: "strict",
      // Cache-busting
      cache: false,
    },
    // További optimalizációk
    assetsInlineLimit: 4096, // 4KB alatti asset-ek inline-olva
    cssCodeSplit: true,
    sourcemap: false, // Éles buildhez
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Éles buildhez
      },
    },
  },
});
