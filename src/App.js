import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
=======
import { connect } from 'react-redux';
>>>>>>> 7ddb4fa88a7edfd256ef6169f1a98400c4f7a095
import classes from './App.module.css';
import Header from './components/Header/Header';
import PeoplePage from './components/PeoplePage/PeoplePage';
import FilmsPage from './components/FilmsPage/FilmsPage';
<<<<<<< HEAD
import PlanetsPage from './components/PlanetsPage/PlanetsPage';
=======
>>>>>>> 7ddb4fa88a7edfd256ef6169f1a98400c4f7a095
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
<<<<<<< HEAD
          <Route path='/planets' element={<PlanetsPage />} />
=======
>>>>>>> 7ddb4fa88a7edfd256ef6169f1a98400c4f7a095
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default App; 
