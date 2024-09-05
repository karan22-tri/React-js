import React, { useState } from 'react';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  const [editTodo, setEditTodo] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const handleEditChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleEditSubmit = (id) => {
    updateTodo(id, editedTask);
    setEditTodo(null);
    setEditedTask('');
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {editTodo === todo.id ? (
            <>
              <input
                type="text"
                value={editedTask}
                onChange={handleEditChange}
              />
              <button onClick={() => handleEditSubmit(todo.id)}>Save</button>
            </>
          ) : (
            <>
              {todo.task}
              <button onClick={() => setEditTodo(todo.id)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
