// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(), // Required for Tailwind v4
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  // ───────────────────────────────────────────────────────────────
  //             Proxy configuration → this solves most 404/CORS issues
  // ───────────────────────────────────────────────────────────────
  server: {
    proxy: {
      // All calls to /ai-chat will be forwarded to your backend
      "/ai-chat": {
        target: "http://localhost:4000",   // ← change to 3000 if your backend uses 3000
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/ai-chat/, "/ai-chat"),
      },

      // Optional: if you call /health from frontend anywhere
      "/health": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});