import { Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import Header from './components/Header/Header';
import FilmsPage from './components/FilmsPage/FilmsPage';
import PeoplePage from './components/PeoplePage/PeoplePage';
import PlanetsPage from './components/PlanetsPage/PlanetsPage';
import SpeciesPage from './components/SpeciesPage/SpeciesPage';
import StarshipsPage from './components/StarshipsPage/StarshipsPage';
import VehiclesPage from './components/VehiclesPage/VehiclesPage';
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
          <Route path='/planets' element={<PlanetsPage />} />
          <Route path='/species' element={<SpeciesPage />} />
          <Route path='/starships' element={<StarshipsPage />} />
          <Route path='/vehicles' element={<VehiclesPage />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default App; 
