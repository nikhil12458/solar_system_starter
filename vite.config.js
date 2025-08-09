// export default {
//     root: 'src/',
//     publicDir: '../static/',
//     base: './',
// }

// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  publicDir: "../static",
  base: "./",
  build: {
    outDir: "../dist", // put dist outside src
    emptyOutDir: true, // clean dist before build
  },
});
