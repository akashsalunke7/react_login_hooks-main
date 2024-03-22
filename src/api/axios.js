import axios from 'axios';
const BASE_URL = 'http://localhost:3500';
const BASE_URL_MOUNTEBANK = "http://localhost:8885";
const BASE_URL_MOUNTEBANK_STUBS = "http://localhost:2525";

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});


export const axiosMounteBank = axios.create({
    baseURL: BASE_URL_MOUNTEBANK,
    // headers: { "Content-Type": "application/json" , "Access-Control-Allow-Origin": "http://localhost:3000" }
});

export const axiosMounteBankStubs = axios.create({
    baseURL: BASE_URL_MOUNTEBANK_STUBS,
});

