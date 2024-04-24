import { starshipsAPI } from "../api/api";


const SET_STARSHIPS = 'starships/SET-STARSHIPS';
const SET_CURRENT_PAGE = 'starships/SET-CURRENT-PAGE';

const initialState = {
    starships: [],
    totalStarshipsCount: null,
    currentPage: 1
};

const starshipsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STARSHIPS:
            return {
                ...state,
                starships: action.data.starships,
                totalStarshipsCount: action.data.totalStarshipsCount
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

const setStarshipsAC = (data) => ({ type: SET_STARSHIPS, data });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const getStarships = (currentPage) => {
    return async (dispatch) => {
        let response = await starshipsAPI.getStarships(currentPage);
        let data = { starships: response.results, totalStarshipsCount: response.count };
        dispatch(setStarshipsAC(data));
    };
};

export default starshipsReducer;