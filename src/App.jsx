import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './constants/Layout'
import NotFound from './section/NotFound';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading ? (
      <Loader />
    ) : (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    )
  );
};

export default App