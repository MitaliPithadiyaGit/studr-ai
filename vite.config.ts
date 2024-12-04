import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { remixConfig } from '@remix-run/dev';

// Merge Remix config with Vite
export default defineConfig({
  plugins: [
    react(),
    remixConfig(),
  ],
  css: {
    postcss: './postcss.config.js', // Ensure PostCSS config is correctly referenced
  },
  build: {
    target: 'esnext', // Ensure modern JS is targeted
    outDir: 'build', // Ensure output aligns with Vercel's static expectations
  },
});
