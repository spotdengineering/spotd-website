import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // apply Next.js presets
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // top-level ignore config
  {
    ignores: [
      'node_modules/**', // dependencies
      '.next/**', // ✅ ignore Next.js build output
      'out/**', // static exports
      'build/**', // custom build dir
      'next-env.d.ts', // Next.js generated type file
    ],
  },

  // rules section
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
];

export default eslintConfig;
