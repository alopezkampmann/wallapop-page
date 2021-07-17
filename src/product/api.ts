import axios from "axios";

const api = axios.create({
    baseURL: 'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/'
});

const fetchAllProducts = async() => {
    const response = await api.get('/items.json');
    return response.data.items;
}

export default fetchAllProducts;


