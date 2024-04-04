import axios from "axios";


const fetchServerUS = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000,
});


export default fetchServerUS