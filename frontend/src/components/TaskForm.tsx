// src/components/TaskForm.tsx
import React, { useState } from 'react';
import { createTask } from '../services/api';

interface TaskFormProps {
  onTaskAdded: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTask({ title, description, completed: false, created_at: '', updated_at: '' });
    setTitle('');
    setDescription('');
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TaskForm;
