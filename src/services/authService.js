import api from './api'; // Importa a configuração do Axios

export const registerUser = async (email, password) => {
  try {
    const response = await api.post('/auth/register', { email, password });
    return response.data; // Retorna dados do backend
  } catch (error) {
    throw error.response.data; // Lança erro para tratar no frontend
  }
};

export const loginUser  = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    // Verifica se error.response está definido
    throw error.response ? error.response.data : { error: 'Erro desconhecido' };
  }
};