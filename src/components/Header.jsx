import cl from '../scss/styles/header.module.scss';

const Header = () => {
  return (
    <div className={cl.app_box}>
      <a href="https://vitejs.dev" target="_blank">
        <img src="./src/assets/vite.svg" className={cl.logo} alt="Vite logo" />
      </a>
      <a href="https://reactjs.org" target="_blank">
        <img src="./src/assets/react.svg" className={cl.logo} alt="React logo" />
      </a>
      <a href="https://tailwindcss.com" target="_blank">
        <img src="./src/assets/tailwindcss.svg" className={cl.logo} alt="Tailwindcss logo" />
      </a>
      <a href="https://sass-lang.com" target="_blank">
        <img src="./src/assets/sass.svg" className={cl.logo} alt="Sass logo" />
      </a>
    </div>
  );
};
export default Header;
