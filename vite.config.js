import { defineConfig } from 'vite';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
import react from '@vitejs/plugin-react-swc';
import legacy from '@vitejs/plugin-legacy';
import viteSvgr from 'vite-plugin-svgr';

//github.com/vitejs/awesome-vite#plugins
export default defineConfig({
  plugins: [
    react(),
    optimizeCssModules(),
    viteSvgr({ defaultExport: 'component' }), // Получаем URL-адрес SVG-изображения.
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  base: './',
  build: {
    outDir: 'dist/',
    assetsDir: '',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: assetInfo => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|webp|webm|mp3)$/.test(assetInfo.name)) {
            return `media/[name]-[hash].${extType}`;
          }
          if (/\.(css)$/.test(assetInfo.name)) {
            return `css/[name]-[hash].${extType}`;
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `fonts/[name]-[hash].${extType}`;
          }
          return `[name]-[hash].${extType}`;
        },
      },
    },
  },
});
