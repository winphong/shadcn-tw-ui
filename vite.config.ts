import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      name: "@shad-tw/ui", // Name of your library
      entry: ["src/index.tsx"], // Entry point for your library (optional)
      fileName: (format) => `main.${format}.js`, // Output filename format
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Externalize React dependencies
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true, // Clean output directory before building
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
