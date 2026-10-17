import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // This repository is served below /Gestor-Asesorias/ on GitHub Pages.
  base: '/Gestor-Asesorias/',
  plugins: [react()],
});
