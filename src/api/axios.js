import axios from 'axios';

export const createAxiosInstance = (url) => {
    const instance = axios.create({
        baseURL: url,
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            Accept: 'application/ld+json',
            'Content-Type': 'application/json; charset=utf-8',
        },
    });
    return instance;
};

const fetchData = async (url, path, params = {}) => {
    const axiosInstance = createAxiosInstance(url);
    let { data, headers } = await axiosInstance.get(path, { params });
    localStorage.setItem('token', headers['x-jwt-token']);
    return data;
};

export default fetchData;
