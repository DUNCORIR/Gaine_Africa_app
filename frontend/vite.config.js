import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-username' and 'Gaine_Africa_app' with your actual GitHub username and repo name
export default defineConfig({
  plugins: [react()],
  base: "/Gaine_Africa_app/", // Ensures assets are correctly loaded on GitHub Pages
});