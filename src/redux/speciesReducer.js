import { speciesAPI } from "../api/api";


const SET_SPECIES = 'species/SET-SPECIES';
const SET_CURRENT_PAGE = 'species/SET-CURRENT-PAGE';

const initialState = {
    species: [],
    totalSpeciesCount: null,
    currentPage: 1
};

const speciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SPECIES:
            return {
                ...state,
                species: action.data.species,
                totalSpeciesCount: action.data.totalSpeciesCount
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        default:
            return state;
    };
};

const setSpeciesAC = (data) => ({ type: SET_SPECIES, data });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const getSpecies = (currentPage) => {
    return async (dispatch) => {
        let response = await speciesAPI.getSpecies(currentPage);
        let data = { species: response.results, totalSpeciesCount: response.count };
        dispatch(setSpeciesAC(data));
    };
};

export default speciesReducer;