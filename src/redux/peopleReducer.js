import { peopleAPI } from "../api/api";


const SET_PEOPLE = 'people/SET-PEOPLE';
const SET_CURRENT_PAGE = 'people/SET-CURRENT-PAGE';

const initialState = {
    people: [],
    totalPeopleCount: null,
    currentPage: 1
};

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE:
            return {
                ...state,
                people: action.data.people,
                totalPeopleCount: action.data.totalPeopleCount
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

const setPeopleAC = (data) => ({ type: SET_PEOPLE, data });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const getPeople = (currentPage) => {
    return async (dispatch) => {
        let response = await peopleAPI.getPeople(currentPage);
        let data = { people: response.results, totalPeopleCount: response.count };
        dispatch(setPeopleAC(data));
    };
};

export default peopleReducer;