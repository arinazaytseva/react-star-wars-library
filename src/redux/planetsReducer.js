import { planetsAPI } from "../api/api";


const SET_PLANETS = 'planets/SET-PLANETS';
const SET_CURRENT_PAGE = 'planets/SET-CURRENT-PAGE';

const initialState = {
    planets: [],
    totalPlanetsCount: null,
    currentPage: 1
};

const planetsPage = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLANETS: {
            return {
                ...state,
                planets: action.data.planets,
                totalPlanetsCount: action.data.totalPlanetsCount
            };
        };
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        };
        default: {
            return state;
        };
    };
};

const setPlanetsAC = (data) => ({ type: SET_PLANETS, data });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const getPlanets = (currentPage) => {
    return async (dispatch) => {
        let response = await planetsAPI.getPlanets(currentPage);
        let data = { planets: response.results, totalPlanetsCount: response.count };
        dispatch(setPlanetsAC(data));
    };
};

export default planetsPage;