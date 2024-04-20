import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import filmsReducer from './filmsReducer';
import peopleReducer from './peopleReducer';


const rootReducer = combineReducers({
    filmsPage: filmsReducer,
    peoplePage: peopleReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;