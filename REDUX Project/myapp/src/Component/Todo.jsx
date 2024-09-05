import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../Redux/action';

const Todo = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');

    const tasks = useSelector((state) => state.tasks);

    const addTodo1 = () => {
        if (todo) {
            dispatch(addTodo({ id: Date.now(), name: todo }));
        }
        setTodo('');
    };

    const handleEditTodo = (id, name) => {
        let updatedName = prompt("Update Todo", name);
        if (updatedName) {
            dispatch(editTodo(id, updatedName));
        }
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <>
           <center>
           <input
                type="text"
                placeholder='Add Todo'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={addTodo1}>Submit</button>

           </center>
            <div>
                <center>

                    
                {
                    tasks?.map((el) => {
                        return (
                            <div key={el.id}>
                                <li>{el.name}</li>
                                <button onClick={() => handleEditTodo(el.id, el.name)}>Edit</button>
                                <button onClick={() => handleDeleteTodo(el.id)}>Delete</button>
                            </div>
                        )
                    })
                }
                </center>
            </div>
        </>
    )
}

export default Todo;
