// src/services/api.ts
import { Task } from '../types/Task';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Substitua pelo seu endpoint em produção
});

export default api;

export const fetchTasks = () => api.get<Task[]>('/tasks/');
export const createTask = (task: Omit<Task, 'id'>) => api.post('/tasks/', task);
export const updateTask = (id: number, task: Partial<Task>) => api.put(`/tasks/${id}/`, task);
export const deleteTask = (id: number) => api.delete(`/tasks/${id}/`);
