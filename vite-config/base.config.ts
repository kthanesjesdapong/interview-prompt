import { defineConfig, loadEnv, UserConfig } from "vite";
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';


export default (({ mode }: { mode: UserConfig['mode']; }) => {
  if (mode === 'development') {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  }
  return defineConfig({
    base: './',
    envPrefix: 'CLIENT_',
    plugins: [react()],
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.woff', '**/*.woff2', '**.*.ttf', '**.*.JPG'],
    resolve: {
      alias: {
        '@app': resolve(__dirname, '../src/app'),
        '@features': resolve(__dirname, '../src/features'),
        '@pages': resolve(__dirname, '../src/pages'),
        '@components': resolve(__dirname, '../src/shared/components'),
        '@ui': resolve(__dirname, '../src/shared/ui'),
        '@api': resolve(__dirname, '../src/shared/api'),
        '@lib': resolve(__dirname, '../src/shared/lib'),
        '@hooks': resolve(__dirname, '../src/shared/hooks'),
        '@utils': resolve(__dirname, '../src/shared/utils')
      }
    }
  });
});