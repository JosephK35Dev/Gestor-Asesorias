import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative asset URLs work for both GitHub project pages and root deployments.
  base: './',
  plugins: [react()],
});
