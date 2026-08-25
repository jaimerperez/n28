import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default defineConfig([
  globalIgnores(['dist/**', '.astro/**', 'node_modules/**']),
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  {
    // Ficheros de configuración: se ejecutan en Node durante el build
    files: ['**/*.config.{js,mjs,ts}', '.lighthouserc.js'],
    languageOptions: { globals: globals.node },
  },
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
]);
