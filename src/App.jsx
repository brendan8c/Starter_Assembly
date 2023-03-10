import cl from './scss/styles/all_styles.module.scss'; // Импортируем css module стилей
import Header from './components/Header/Header'; // Импортируем модуль с логотипами
import Navbar from './components/Navbar/Navbar';
import Newpage from './components/Newpage/Newpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className={cl.app}>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/newpage" element={<Newpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
