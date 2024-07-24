import { defineConfig } from 'vite';
import baseConfig from './base.config';

export default defineConfig({
  ...baseConfig,
  server: {
    host: true,
    port: 8080,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('development'),
  },
});