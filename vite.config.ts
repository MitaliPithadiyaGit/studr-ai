import { defineConfig } from "vite";
import { remixConfig } from "@remix-run/dev";

// Merge Remix config with Vite-specific configurations
export default defineConfig({
  plugins: [remixConfig()],
  build: {
    target: "esnext",
  },
});
