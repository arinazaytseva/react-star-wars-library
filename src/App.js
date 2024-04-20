import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './App.module.css';
import Header from './components/Header/Header';
import PeoplePage from './components/PeoplePage/PeoplePage';
import FilmsPage from './components/FilmsPage/FilmsPage';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={
        ((theme === 'light') && (`${classes.flexContainer} ${classes.lightFlexContainer}`)) 
        || ((theme === 'dark') && (`${classes.flexContainer} ${classes.darkFlexContainer}`))
      }>
        <Header />
        <Routes>
          <Route path='/' element={<PeoplePage />} />
          <Route path='/films' element={<FilmsPage />} />
          <Route path='/people' element={<PeoplePage />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default App; 
