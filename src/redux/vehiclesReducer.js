import { vehiclesAPI } from '../api/api';


const SET_VEHICLES = 'vehicles/SET-VEHICLES';
const SET_CURRENT_PAGEE = 'vehicles/SET-CURRENT-PAGE';

const initialState = {
    vehicles: [],
    totalVehiclesCount: null,
    currentPage: 1
};

const vehiclesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_VEHICLES:
            return {
                ...state,
                vehicles: action.data.vehicles,
                totalVehiclesCount: action.data.totalVehiclesCount
            };
        case SET_CURRENT_PAGEE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        default:
            return state;
    };
};

const setVehiclesAC = (data) => ({ type: SET_VEHICLES, data });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGEE, currentPage });

export const getVehicles = (currentPage) => {
    return async (dispatch) => {
        let response = await vehiclesAPI.getVehicles(currentPage);
        let data = { vehicles: response.results, totalVehiclesCount: response.count };
        dispatch(setVehiclesAC(data));
    };
};

export default vehiclesReducer;