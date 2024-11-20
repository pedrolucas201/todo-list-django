// src/components/TaskList.tsx
import React from 'react';
import { Task } from '../types/Task';
import { deleteTask, updateTask } from '../services/api';

interface TaskListProps {
  tasks: Task[];
  onTaskDeleted: () => void;
  onTaskUpdated: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskDeleted, onTaskUpdated }) => {
  const handleDelete = async (id: number) => {
    await deleteTask(id);
    onTaskDeleted();
  };

  const handleToggleCompleted = async (task: Task) => {
    try {
      // Enviar todos os dados da tarefa para o backend
      const updatedTask = { 
        ...task, 
        completed: !task.completed // Atualize apenas o campo 'completed'
      };
      console.log("Dados para enviar ao backend:", updatedTask);

      await updateTask(task.id, updatedTask);
      onTaskUpdated();
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompleted(task)}
            />
            <div className={`task-info ${task.completed ? 'completed' : ''}`}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <button onClick={() => handleDelete(task.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
