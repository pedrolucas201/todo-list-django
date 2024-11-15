// src/services/api.ts
import { Task } from '../types/Task';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://web-production-4c23.up.railway.app/api',
});

export const fetchTasks = () => api.get<Task[]>('tasks/');
export const createTask = (task: Omit<Task, 'id'>) => api.post('tasks/', task);
export const updateTask = (id: number, task: Partial<Task>) => {
  console.log("Dados enviados para updateTask:", task); // Log dos dados
  return api.put(`tasks/${id}/`, task);
};
export const deleteTask = (id: number) => api.delete(`tasks/${id}/`);

export default api;
