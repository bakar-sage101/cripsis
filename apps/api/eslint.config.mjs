import base from '@cripsis/eslint-config/base';

export default [
  ...base,
  {
    rules: {
      // NestJS relies on decorators and DI patterns that trip these rules.
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
    },
  },
];
