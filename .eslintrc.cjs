module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:solid/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'solid', 'prettier'],
  rules: {
    'prettier/prettier': [2, require('./.prettierrc.cjs')],

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
  overrides: [
    {
      files: ['**/*{stories,story}.{ts,tsx}'],
      extends: ['plugin:storybook/recommended'],
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
    },
  ],
};
