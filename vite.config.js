import { defineConfig } from "vite";
import { resolve } from "path";

import vitePurgeCss from "vite-plugin-purgecss";

console.log("__dirname: ", __dirname);

export default defineConfig({
  plugins: [vitePurgeCss()],
  base: "/workit",
  // root: resolve(__dirname, "/"),
  // build: {
  //   outDir: "../dist",
  //   emptyOutDir: true,
  //   rollupOptions: {
  //     input: {
  //       home: resolve(__dirname, "/index.html"),
  //     },
  //   },
  // },
  build: {
    outDir: "/dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
      },
    },
  },
});
