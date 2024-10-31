import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 8080,
  },
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]',
      customDomId: '__svg__icons__dom__',
    }),
  ],
  base: './',
  build: {
    outDir: 'docs',
  },
});
