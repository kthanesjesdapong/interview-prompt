import { defineConfig } from 'vite';
import baseConfig from './base.config';

export default defineConfig({
  ...baseConfig,
  preview: {
    host: true,
    port: 8080,
    strictPort: true
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  //Enable When you have PROD only configs && PLUGINS
  // plugins: baseConfig.plugins.filter(plugin => plugin.name !== 'some-dev-only-plugin'),
});