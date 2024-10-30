import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    minify: false,
    lib: {
      entry: './src/index.ts',
      name: 'Test',
      fileName: 'test'
    },
  },
  server: {
    host: '127.0.0.1'
  },
  optimizeDeps: {
    include: [],
    exclude: []
  }
})
