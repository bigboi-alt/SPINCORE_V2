import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // This ensures the game looks for files in /SPINCORE_V2/ instead of the root
  base: "/SPINCORE_V2/", 
  plugins: [
    react(), 
    tailwindcss(), 
    // This keeps your game as one single HTML file for easy hosting
    viteSingleFile()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // Ensures the output folder is named 'dist' for gh-pages to find it
    outDir: "dist",
  }
});
