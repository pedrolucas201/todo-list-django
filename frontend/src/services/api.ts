// src/services/api.ts
import { Task } from '../types/Task';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todo-list-django-production.up.railway.app/api/', 
});


export const fetchTasks = () => api.get<Task[]>('tasks/');
export const createTask = async (task: Omit<Task, 'id'>) => {
  try {
    const response = await api.post<Task>('tasks/', task); // Corrigido para 'tasks/'
    console.log('Resposta ao criar tarefa:', response.data); // Log da resposta
    return response.data; // Retorna os dados criados
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    throw error;
  }
};
export const updateTask = (id: number, task: Partial<Task>) => {
  console.log("Dados enviados para updateTask:", task); // Log dos dados
  return api.put(`tasks/${id}/`, task);
};
export const deleteTask = (id: number) => api.delete(`tasks/${id}/`);

export default api;
