import axios from 'axios';

const API = axios.create({
    baseURL: 'https://rentify-api-037b.onrender.com/api',
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `${localStorage.getItem('token')}`;
    }
    return req;
});

export const fetchAllProperties = () => API.get('/properties');
export const fetchProperty = (id) => API.get(`/properties/${id}`);
export const createProperty = (newProperty) => API.post('/properties', newProperty);
export const updateProperty = (id, updatedProperty) => API.put(`/properties/${id}`, updatedProperty);
export const deleteProperty = (id) => API.delete(`/properties/${id}`);
export const registerUser = (userData) => API.post('/users/register', userData);
export const loginUser = (userData) => API.post('/users/login', userData);
export const fetchSellerProperties = () => API.get('/properties/seller');
export const fetchUserDetail = async (token) => {
    try {
        const response = await API.get('/users/user', {
            headers: {
                'Authorization': ``
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};
