import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import filmsReducer from './filmsReducer';
import peopleReducer from './peopleReducer';
import planetsReducer from './planetsReducer';


const rootReducer = combineReducers({
    filmsPage: filmsReducer,
<<<<<<< HEAD
    peoplePage: peopleReducer,
    planetsPage: planetsReducer
=======
    peoplePage: peopleReducer
>>>>>>> 7ddb4fa88a7edfd256ef6169f1a98400c4f7a095
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;