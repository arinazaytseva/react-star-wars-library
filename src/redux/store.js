import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import filmsReducer from './filmsReducer';
import peopleReducer from './peopleReducer';
import planetsReducer from './planetsReducer';


const rootReducer = combineReducers({
    filmsPage: filmsReducer,
    peoplePage: peopleReducer,
    planetsPage: planetsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;