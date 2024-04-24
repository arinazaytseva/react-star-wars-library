import { filmsAPI } from '../api/api';


const SET_FILMS = 'films/SET-FILMS';

const initialState = {
    films: []
};

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                films: action.data
            };
        default:
            return state;
    };
};

const setFilmsAC = (data) => ({ type: SET_FILMS, data });

export const getFilms = () => {
    return async (dispatch) => {
        let response = await filmsAPI.getFilms();
        dispatch(setFilmsAC(response.results));
    };
};

export default filmsReducer;