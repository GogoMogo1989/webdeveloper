import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteImagemin({
      webp: {
        quality: 60,
      },
    }),
    createHtmlPlugin({
      inject: {
        data: {
          preloadTags: `
<link rel="preload" as="style" href="/assets/index-CxC_ojBP.css" onload="this.rel='stylesheet';this.onload=null;">
<link rel="preload" as="style" href="/assets/vendor_sw….css" onload="this.rel='stylesheet';this.onload=null;">
<link rel="preload" as="style" href="/assets/vendor-ybeVSQkp.css" onload="this.rel='stylesheet';this.onload=null;">
<noscript><link rel="stylesheet" href="/assets/index-CxC_ojBP.css"></noscript>
          `,
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
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
            return "vendor";
          }

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
