import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD

export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [react()],
=======
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
>>>>>>> e37e86e6ccda632c80d477b2d6de0d45860c5c1e
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
});
=======
}));
>>>>>>> e37e86e6ccda632c80d477b2d6de0d45860c5c1e
