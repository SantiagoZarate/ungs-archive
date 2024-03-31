/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "happy-dom",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@icon": path.resolve(__dirname, "src/components/icons/index.tsx"),
      "@component": path.resolve(__dirname, "src/components"),
      "@hook": path.resolve(__dirname, "src/hooks"),
      "@util": path.resolve(__dirname, "src/utils"),
      "@data": path.resolve(__dirname, "src/data"),
    },
  },
});
