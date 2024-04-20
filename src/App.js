import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import PeoplePage from './components/PeoplePage/PeoplePage';


const App = () => {
  return ( 
    <div className='flexContainer'>
      <Header />
      <Routes>
        <Route path='/' element={<PeoplePage />} />
        <Route path='/people' element={<PeoplePage />} />
      </Routes>
    </div>
  );
}

export default App; 
