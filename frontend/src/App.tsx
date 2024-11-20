// src/App.tsx
import React, { useEffect, useState } from 'react';
import { fetchTasks } from './services/api';
import { Task } from './types/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    try {
      const response = await fetchTasks();
      console.log('Tarefas carregadas:', response.data); // Verifique as tarefas carregadas
      if (response && response.data) {
        setTasks(response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };  

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <TaskForm onTaskAdded={loadTasks} />
      <TaskList tasks={tasks} onTaskDeleted={loadTasks} onTaskUpdated={loadTasks} />
    </div>
  );
};

export default App;
