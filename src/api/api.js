import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

export const peopleAPI = {
    getPeople: async (currentPage) => {
        const response = await instance.get(`people?page=${currentPage}`);
        return response.data;
    }
};

export const filmsAPI = {
    getFilms: async () => {
        const response = await instance.get(`films`);
        return response.data;
    }
};