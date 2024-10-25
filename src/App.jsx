
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/Mainpage';
import SinglePage from './Pages/Singlepage'
import { fetchCountries } from './utils/fetchCountries';
import ErrorPage from './ErrorHandler/ErrorPage';

export const Toggler = createContext();

const App = () => {
  const [click, setClick] = useState(false);
  const [countries, setCountries] = useState([]);

  function submitHandler() {
    setClick((preClick) => !preClick);
  }


  useEffect(() => {
    const getCountries = async () => {
      try {
        const countriesData = await fetchCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error('Error fetching countries data:', error);
      }
    };

    getCountries();
  }, []);

  return (
    <Toggler.Provider value={{ click, countries ,submitHandler }}>
    <div className={click ? 'dark-theme' : 'light-theme'}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path={`/country/:id`} element={<SinglePage />} />
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  </Toggler.Provider>
  );
};

export default App;
