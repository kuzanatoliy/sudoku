import { resolve } from 'node:path';
import { defineConfig, mergeConfig } from 'vite';
import { defineConfig as defineTestConfig } from 'vitest/config';
import solid from 'vite-plugin-solid';

const vitestConfig = defineTestConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
    globals: true,
    pool: 'vmThreads',
    poolOptions: {
      vmThreads: {
        useAtomics: false,
      },
    },
    include: ['src/**/*{test,spec}.{js,ts,jsx,tsx}'],
    includeSource: ['src/**/*.{js,ts,jsx,tsx}'],
    deps: {
      optimizer: {
        web: {
          include: ['src/**/*{test,spec}.{js,ts,jsx,tsx}'],
        },
      },
    },
    coverage: {
      all: true,
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src'],
      exclude: [
        'src/**/index.{ts,tsx}',
        'src/**/*.{stories.tsx,types.ts}',
        '**/*.d.ts',
      ],
    },
  },
});

export const viteConfig = defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      components: resolve(__dirname, './src/components'),
      'contact-me-page': resolve(__dirname, './src/contact-me-page'),
      hooks: resolve(__dirname, './src/hooks'),
      icons: resolve(__dirname, './src/icons'),
      'not-found-page': resolve(__dirname, './src/not-found-page'),
      query: resolve(__dirname, './src/query'),
      'sudoku-engine': resolve(__dirname, './src/sudoku-engine'),
      'sudoku-page': resolve(__dirname, './src/sudoku-page'),
      'timer-engine': resolve(__dirname, './src/timer-engine'),
      types: resolve(__dirname, './src/types'),
      validator: resolve(__dirname, './src/validator'),
    },
  },
});

export default mergeConfig(viteConfig, vitestConfig);
