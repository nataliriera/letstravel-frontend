import axios from 'axios';
//valida si la aplicion esta en produccion nos retorna un true or false
const isProduction = process.env.NODE_ENV === "production";
const baseURL = isProduction ? " https://techandtapas.herokuapp.com/" : "http://localhost:5005/api";

export const api = axios.create({
    //baseURL : baseURL
    baseURL,
    withCredentials:true,
    timeout:10000
})