import cl from './header.module.scss';
import cn from 'classnames';
import { ReactComponent as Img_sass } from '../../assets/sass.svg';
import img_tailwindcss from '../../assets/tailwindcss.svg';
import images from '../../importImages'; // Нужно добавлять каждое изображение в importImages.js

const Header = () => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.logotips}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={images['./vite.svg']} className={cl.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={images['./react.svg']} className={cn(cl.logo, cl.active)} alt="React logo" />
        </a>
      </div>
      <div className={cl.logotips}>
        <a href="https://tailwindcss.com" target="_blank">
          <img src={img_tailwindcss} className={cl.logo} alt="Tailwindcss logo" />
        </a>
        <a href="https://sass-lang.com" target="_blank">
          <Img_sass className={cl.logo} alt="Sass logo" />
        </a>
        <a href="https://eslint.org" target="_blank">
          <img src={images['./eslint.svg']} className={cl.logo} alt="Eslint logo" />
        </a>
        <a href="https://prettier.io" target="_blank">
          <img src={images['./prettier.png']} className={cl.logo} alt="Prettier logo" />
        </a>
        <a href="https://jestjs.io" target="_blank">
          <img src={images['./jest.png']} className={cl.logo} alt="Jest logo" />
        </a>
      </div>
    </div>
  );
};
export default Header;

// Тут используется три разныx импорта изображений svg.
// Прямой путь: src="./src/assets/react.svg" в готовой сборке не отобразится!
