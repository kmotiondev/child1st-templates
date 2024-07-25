import {defineConfig} from 'vite';
import path from 'path';
import ViteRestart from 'vite-plugin-restart';
import viteCompression from 'vite-plugin-compression';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// import legacy from '@vitejs/plugin-legacy';

export default defineConfig(({command}) => ({
  base: command === 'serve' ? '' : '/dist/',
  publicDir: path.resolve(__dirname, 'src/public'),
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true
  },
  plugins: [
    viteCompression({
      filter: /\.(js|mjs|json|css|map)$/i
    }),
    ViteRestart({
      reload: [
        'templates/**/*',
      ]
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'public/icons')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: '__svg__icons__',
    }),
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // }),
  ],
  build: {
    manifest: true,
    cssCodeSplit: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    outDir: path.resolve(__dirname, 'public/dist/'),
    rollupOptions: {
      input: {
        app: './src/js/app.js',
      },
      output: {
        sourcemap: false,
        // manualChunks: {
        //   swiper: ['swiper'],
        //   alpinejs: ['alpinejs'],
        // }
      },
      external: [
        /^..\/img\/.*/
      ]
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@css': path.resolve(__dirname, 'src/css'),
      '@js': path.resolve(__dirname, 'src/js')
    }
  }
}));