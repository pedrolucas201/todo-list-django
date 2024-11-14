// src/App.tsx
import React, { useEffect, useState } from 'react';
import { fetchTasks } from './services/api';
import { Task } from './types/Task';
import TaskList from './components/TaskList';
import './global.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Função para carregar as tarefas
  const loadTasks = async () => {
    try {
      const response = await fetchTasks();
      setTasks(response.data); // Armazena as tarefas no estado
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  // Carrega as tarefas quando o componente monta
  useEffect(() => {
    loadTasks();
  }, []);

  // Atualiza as tarefas após a exclusão
  const handleTaskDeleted = () => {
    loadTasks();
  };

  return (
    <div className='container'>
      <h1>Minha Lista de Tarefas</h1>
      <TaskList tasks={tasks} onTaskDeleted={handleTaskDeleted} />
    </div>
  );
};

export default App;
