import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import peopleReducer from './peopleReducer';


const rootReducer = combineReducers({
    peoplePage: peopleReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;