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
    try {
      await deleteTask(id);
      onTaskDeleted();
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  };

  const handleToggleComplete = async (task: Task) => {
    try {
      await updateTask(task.id, { completed: !task.completed });
      onTaskUpdated();
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.completed ? 'Concluído' : 'Pendente'}</p>
          <button onClick={() => handleToggleComplete(task)}>
            {task.completed ? 'Desmarcar' : 'Completar'}
          </button>
          <button onClick={() => handleDelete(task.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
