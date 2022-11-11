import topLevelAwait from "vite-plugin-top-level-await";
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    topLevelAwait()
  ],
  build: {
    target: "es2015"
  }
});