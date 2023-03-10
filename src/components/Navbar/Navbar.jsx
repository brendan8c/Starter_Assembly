import { useState } from 'react';
import cl from './navbar.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const Navbar = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={cl.navbar}>
      <h1 className={cl.textapp}>Vite + React + Tailwindcss + SCSS</h1>
      <div className={cl.card}>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
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
