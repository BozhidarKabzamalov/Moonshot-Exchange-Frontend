import axios from 'axios';

const axioxInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default axioxInstance;
