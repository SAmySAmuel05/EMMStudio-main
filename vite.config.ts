import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Copiar index.html a 404.html para GitHub Pages (SPA fallback)
function copy404Plugin() {
  return {
    name: "copy-404",
    closeBundle() {
      const dest = path.resolve(__dirname, "dist/404.html");
      const src = path.resolve(__dirname, "dist/index.html");
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log("Created 404.html for GitHub Pages");
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/EMMStudio-main/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    copy404Plugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
