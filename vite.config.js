import { defineConfig } from "vite";
import { resolve } from "path";

import vitePurgeCss from "vite-plugin-purgecss";

export default defineConfig({
  plugins: [vitePurgeCss()],
  root: resolve(__dirname, "src/"),
  base: "/workit",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
