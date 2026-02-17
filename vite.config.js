import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
<<<<<<< HEAD
import path from "path";
=======
>>>>>>> 943d384c0b3e931e95380c96ad6de3fc20a3ef4d

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
=======
>>>>>>> 943d384c0b3e931e95380c96ad6de3fc20a3ef4d
});
