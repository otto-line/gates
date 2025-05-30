// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/gates/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  publicDir: 'public'
});
