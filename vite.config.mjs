// vite.config.mjs
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Gravity-System/', // GitHub Pages base path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  // Ensure proper handling of assets
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.mp3'],
});
