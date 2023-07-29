import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'api',
    root: './',
    environment: 'node',
    include: ['./src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    coverage: {
      reportsDirectory: './tests/unit/coverage',
    },
  },
})
