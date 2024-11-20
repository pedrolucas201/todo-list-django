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
    try {
      const createdTask = await createTask({ 
        title, 
        description, 
        completed: false, 
        created_at: new Date().toISOString(), 
        updated_at: new Date().toISOString() 
      });
      console.log('Tarefa criada:', createdTask); // Verifique se a tarefa é criada
      setTitle('');
      setDescription('');
      onTaskAdded(); // Atualiza a lista
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;
