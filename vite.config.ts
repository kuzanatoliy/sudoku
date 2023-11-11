import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      components: resolve(__dirname, './src/components'),
      types: resolve(__dirname, './src/types'),
    },
  },
});
