import { defineConfig } from "vite";
import { resolve } from "path";

import vitePurgeCss from "vite-plugin-purgecss";

console.log(__dirname);
console.log(resolve(__dirname, "index.html"));
console.log(resolve(__dirname, "src/"));

export default defineConfig({
  plugins: [vitePurgeCss()],
  root: resolve(__dirname, "src/"),
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src/index.html"),
      },
    },
  },
});
