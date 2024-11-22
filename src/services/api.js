import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000', // URL do seu backend Flask
  headers: {
    'Content-Type': 'application/json', // Garante que os dados serão enviados como JSON
  },
});

export default api;
