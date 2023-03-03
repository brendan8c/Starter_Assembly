import { useState } from 'react';
import cl from './scss/style.module.scss'; // Импортируем css module стилей
import Header from './components/Header'; // Импортируем модуль с логотипами

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={cl.app}>
      <Header />
      <h1 className={cl.textapp}>Vite + React + Tailwindcss + SCSS</h1>
      <div className={cl.card}>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={cl.read_the_docs}>Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default App;
