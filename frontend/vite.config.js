import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-username' and 'Gaine_Africa_app' with your actual GitHub username and repo name
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures assets are correctly loaded on GitHub Pages
  server: {
    port: 5173,   // Keeps your local setup
    open: true
  },
  build: {
    outDir: 'dist', // Ensures the build is placed in the right folder
  }
});