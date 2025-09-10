import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./", // مهم جدًا يخلي الروابط relative
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild', // استخدم esbuild بدل terser
  },
  server: {
    open: false, // مش يفتح المتصفح تلقائياً
  },
});
