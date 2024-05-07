import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      name: "@shad-tw/ui", // Name of your library
      entry: "src/index.tsx", // Entry point for your library (optional)
      fileName: (format) => `@shad-tw-ui/main.${format}.js`, // Output filename format
    },
  },
});
