import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://swapi.py4e.com/api/'
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

export const planetsAPI = {
    getPlanets: async (currentPage) => {
        const response = await instance.get(`planets?page=${currentPage}`);
        return response.data;
    }
};

export const speciesAPI = {
    getSpecies: async (currentPage) => {
        const response = await instance.get(`species?page=${currentPage}`);
        return response.data;
    }
};

export const starshipsAPI = {
    getStarships: async (currentPage) => {
        const response = await instance.get(`starships?page=${currentPage}`);
        return response.data;
    }
};

export const vehiclesAPI = {
    getVehicles: async (currentPage) => {
        const response = await instance.get(`vehicles?page=${currentPage}`);
        return response.data;
    }
};