import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Relative base ("./") makes the build work on any GitHub Pages repo name
// (e.g. https://<user>.github.io/<repo>/) without hardcoding the repo.
export default defineConfig({
    base: "./",
    plugins: [react()],
    build: {
        outDir: "dist",
        chunkSizeWarningLimit: 1200,
    },
});
