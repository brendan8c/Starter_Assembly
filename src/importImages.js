import reactSvg from './assets/react.svg';
import sassSvg from './assets/sass.svg';
import tailwindcssSvg from './assets/tailwindcss.svg';
import viteSvg from './assets/vite.svg';
import eslintSvg from './assets/eslint.svg';
import prettierPng from './assets/prettier.png';
import jestPng from './assets/jest.png';

const images = {
  './react.svg': reactSvg,
  './sass.svg': sassSvg,
  './tailwindcss.svg': tailwindcssSvg,
  './vite.svg': viteSvg,
  './eslint.svg': eslintSvg,
  './prettier.png': prettierPng,
  './jest.png': jestPng,
};

export default images;

// Вывод всех доступных объектов в консоль
// Object.keys(images).forEach(key => {
//   console.log('Ключ >>> ', key, ' Объект >>> ', images[key]);
// });

// Данный JavaScript скрипт экспортирует объект images, который содержит пути к изображениям в формате SVG.
// Для каждого пути к изображению, объект images ассоциирует путь к соответствующему файлу изображения в формате SVG, который был импортирован в скрипт в качестве модуля.
// После экспорта, объект images может быть импортирован и использован в других модулях для отображения изображений на веб-странице.
