import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    name: 'api',
    root: './',
    environment: 'node',
    include: ['./src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    coverage: {
      reportsDirectory: './data/tests/unit/coverage',
    },
  },
  plugins: [tsconfigPaths()],
})
