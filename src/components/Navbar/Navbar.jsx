import { useState, useEffect } from 'react';
import cl from './navbar.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const applyRandomColor = (element, ignoreChars) => {
  const words = element.textContent.split(' ');
  const coloredWords = words.map(word => {
    if (ignoreChars.includes(word)) {
      return word;
    }
    const randomColor = `rgb(${Math.floor(Math.random() * 128) + 128}, ${Math.floor(Math.random() * 128) + 128}, ${Math.floor(Math.random() * 128) + 128})`;
    return `<span style="color: ${randomColor}">${word}</span>`;
  });
  element.innerHTML = coloredWords.join(' ');
};

const applyRandomColors = ignoreChars => {
  const elements = document.querySelectorAll('[data-color]');
  elements.forEach(element => {
    element.classList.remove(cl.colorTransition); // Удаление предыдущего класса анимации
    void element.offsetWidth; // Принудительная перерисовка элемента перед добавлением нового класса
    element.classList.add(cl.colorTransition); // Добавление класса анимации
    applyRandomColor(element, ignoreChars);
  });
};

const Navbar = () => {
  const [count, setCount] = useState(0);
  const timing = 4000; // Тайминг переключения цветов (в миллисекундах)
  const ignoreCharacters = ['+', '-']; // Символы, которые нужно игнорировать при изменении цвета

  useEffect(() => {
    const intervalId = setInterval(() => {
      applyRandomColors(ignoreCharacters);
    }, timing);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={cl.navbar}>
      <h1 className={`${cl.textapp} ${cl.colorTransition}`} data-color>
        Vite + React
      </h1>
      <h1 className={`${cl.textapp} ${cl.colorTransition}`} data-color>
        Tailwindcss + SCSS + ESLint + Prettier + Jest
      </h1>
      <div className={cl.card}>
        <button className={cl.button} onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={cl.read_the_docs}>Click on the logos to learn more</p>
      <div className={cl.item}>
        <NavLink to="/" className={({ isActive }) => (isActive ? cl.activeLink : '')}>
          Home
        </NavLink>
        <NavLink to="/newpage" className={({ isActive }) => (isActive ? cl.activeLink : '')}>
          New Page
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
