import { defineConfig, configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
   globals: true,
   environment: 'jsdom',
   setupFiles: './src/setupTests.js', //Add this line if you have a setup file
   exclude: [ ...configDefaults.exclude, 'e2e/*'], // Example of excluding certain files from test
    },
});
