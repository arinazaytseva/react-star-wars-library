import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import filmsReducer from './filmsReducer';
import peopleReducer from './peopleReducer';
import planetsReducer from './planetsReducer';
import speciesReducer from './speciesReducer';
import starshipsReducer from './starshipsReducer';
import vehiclesReducer from './vehiclesReducer';


const rootReducer = combineReducers({
    filmsPage: filmsReducer,
    peoplePage: peopleReducer,
    planetsPage: planetsReducer,
    speciesPage: speciesReducer,
    starshipsPage: starshipsReducer,
    vehiclesPage: vehiclesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;