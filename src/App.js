import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
function App() {
  const { tg, onToggle } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
      <button onClick={onToggle}>toggle</button>
    </div>
  );
}

export default App;
