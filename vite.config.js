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
});
