import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin({
    solid: {
      generate: 'ssr',
      hydratable: true
    }
  })],
  server: {
    port: 3000,
  },
  build: {
    ssr: 'src/index.tsx',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: []
    },
  },
});
