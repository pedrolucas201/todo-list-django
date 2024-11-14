// src/components/TaskList.tsx
import React from 'react';
import { Task } from '../types/Task';
import { deleteTask } from '../services/api';

interface TaskListProps {
  tasks: Task[];
  onTaskDeleted: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskDeleted }) => {
  const handleDelete = async (id: number) => {
    await deleteTask(id);
    onTaskDeleted();
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div>
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
