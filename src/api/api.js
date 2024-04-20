import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

export const peopleAPI = {
    getPeople: async (currentPage) => {
        const response = await instance.get(`people?page=${currentPage}`);
        // console.log(response);
        return response.data;
    }
    // getPerson: async (personId) => {
    //     const result = instance.get(`people/${personId}`);
    //     return result.data;
    // }
};