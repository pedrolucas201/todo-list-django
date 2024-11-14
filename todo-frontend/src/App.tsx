// src/App.tsx
import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { fetchTasks } from './services/api';
import { Task } from './types/Task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const response = await fetchTasks();
    setTasks(response.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm onTaskAdded={loadTasks} />
      <TaskList tasks={tasks} onTaskDeleted={loadTasks} />
    </div>
  );
};

export default App;
