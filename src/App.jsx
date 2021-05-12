import React, { Fragment, useState, useRef  } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from './components/TodoList';


export function App() {
    const [todos, setTodos] = useState([
        {id: 1, task: "Tarea 1", completed: false },
    ]);
    
    const todoTaskRef = useRef();

    const toggleTodo = ({id}) => {
        const newTodos = {...todos}
        const todo = newTodos.find((todos) => todo.id == id);
        setTodos(newTodos);

        
    }

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task == '') return; 


        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), task, completed: false}]
        });

        todoTaskRef.current.value = null;
    } 


    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }
    return(
    <Fragment>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"/>
        <button onClick={handleTodoAdd}>+</button>
        <button onClick={handleClearAll}>-</button>
        <div>Te quedan {todos.filter((todo) => !todo.completed).length} taeras por terminar</div>
    </Fragment>
    );
}