import { defineConfig } from "vite";
import { resolve } from "path";
import vitePurgeCss from "vite-plugin-purgecss";

export default defineConfig({
  plugins: [vitePurgeCss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
