import { Task } from '../types/Task';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://web-production-4c23.up.railway.app/api',
});

export default api;

export const createTask = (task: Omit<Task, 'id'>) => api.post('/tasks/', task);
export const updateTask = (id: number, task: Partial<Task>) => api.put(`/tasks/${id}/`, task);
export const deleteTask = (id: number) => api.delete(`/tasks/${id}/`);

export const fetchTasks = () => {
  console.log("Chamando fetchTasks...");  // Adicione log aqui
  return api.get<Task[]>('/tasks/')
    .then(response => {
      console.log("Resposta da API:", response.data);  // Log para verificar resposta
      return response;
    })
    .catch(error => {
      console.error("Erro ao buscar tarefas:", error);  // Log para verificar erro
    });
};
