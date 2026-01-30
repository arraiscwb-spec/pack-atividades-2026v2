import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // Se seu projeto front-only usa import "@/..."
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // Front-only: raiz do Vite é a própria raiz do repo
  root: path.resolve(__dirname),

  // Output padrão do Vite na Vercel: dist
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },

  // Opcional: só garante que não vai ler arquivos ocultos
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

