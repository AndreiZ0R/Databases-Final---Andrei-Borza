import axios from 'axios';

const baseURL = 'http://localhost:3001';

const personsEndpoint = `${baseURL}/persoane`;
const accountsEndpoint = `${baseURL}/conturi`;
const cardsEndpoint = `${baseURL}/carduri`;
const movingsEndpoint = `${baseURL}/miscari`;
const queriesEndpoint = `${baseURL}/query`;


export const getAllPersons = () => {
    return axios.get(`${personsEndpoint}/all`).then(response => response.data);
};

export const getAllAccounts = () => {
    return axios.get(`${accountsEndpoint}/all`).then(response => response.data);
};

export const getAllCards = () => {
    return axios.get(`${cardsEndpoint}/all`).then(response => response.data);
};

export const getAllMovings = () => {
    return axios.get(`${movingsEndpoint}/all`).then(response => response.data);
};

export const getQuery = (str) => {
    return axios.get(`${queriesEndpoint}/${str}`).then(response => response.data);
};


//TODO: post + patch