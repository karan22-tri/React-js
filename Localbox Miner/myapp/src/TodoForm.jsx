import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    
    addTodo({
      id: uuidv4(),
      task: todo,
    });
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
