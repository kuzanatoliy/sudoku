import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import solidjs from 'eslint-plugin-solid/configs/typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import storybook from 'eslint-plugin-storybook';
import prettierRules from './.prettierrc.cjs';

export default tseslint.config(
  {
    ignores: [
      'dist/*',
      'coverage/*',
      'storybook-static/*',
      'eslint.config.js',
      'vite.config.ts',
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': [2, prettierRules],

      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    ...solidjs,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    rules: {
      'solid/components-return-once': 2,
      'solid/event-handlers': 2,
      'solid/imports': 2,
      'solid/jsx-no-duplicate-props': 2,
      'solid/jsx-no-script-url': 2,
      'solid/jsx-no-undef': [
        2,
        {
          typescriptEnabled: true,
        },
      ],
      'solid/jsx-uses-vars': 2,
      'solid/no-array-handlers': 1,
      'solid/no-destructure': 2,
      'solid/no-innerhtml': [
        2,
        {
          allowStatic: false,
        },
      ],
      'solid/no-proxy-apis': 1,
      'solid/no-react-deps': 2,
      'solid/no-react-specific-props': 2,
      'solid/no-unknown-namespaces': 2,
      'solid/prefer-for': 2,
      'solid/prefer-show': 1,
      'solid/reactivity': 2,
      'solid/self-closing-comp': 2,
      'solid/style-prop': 2,
    },
  },
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*{stories,story}.{ts,tsx}'],
    rules: {
      'storybook/await-interactions': 2,
      'storybook/context-in-play-function': 2,
      'storybook/csf-component': 2,
      'storybook/default-exports': 2,
      'storybook/hierarchy-separator': 2,
      'storybook/no-redundant-story-name': 2,
      'storybook/no-stories-of': 2,
      'storybook/no-title-property-in-meta': 0,
      'storybook/no-uninstalled-addons': 2,
      'storybook/prefer-pascal-case': 2,
      'storybook/story-exports': 2,
      'storybook/use-storybook-expect': 0,
      'storybook/use-storybook-testing-library': 2,
    },
  }
);
