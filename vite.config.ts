import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // This will be used for resolving paths if needed
import { remixConfig } from '@remix-run/dev';

export default defineConfig({
  plugins: [react(), remixConfig()],// Use the React plugin

  build: {
    outDir: 'public/build',  // Output build files to public/build
    assetsDir: '_assets',  // Store assets (CSS, JS) in the _assets subfolder within build folder
    
    rollupOptions: {
      output: {
        // Define how chunk files should be named
        assetFileNames: '_assets/tailwind-FOUZUSUO.css',  // Define asset file names with hash and extension
      }
    }
  },

  server: {
    // Add proxy settings if needed for local development
    proxy: {
      '/build': 'http://localhost:3000',  // Adjust based on your dev server
    }
  },

  // Resolve paths if needed (for example, if you have alias configurations)
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'app/'),
      // Add other aliases if needed
    }
  }
});
